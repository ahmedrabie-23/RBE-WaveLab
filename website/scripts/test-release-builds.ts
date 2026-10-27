import fs from 'node:fs';import path from 'node:path';import {spawnSync} from 'node:child_process';import assert from 'node:assert/strict';
import raw from '../src/data/release.json';import {elements,attr} from './html.mjs';
const origin='https://github.com/ahmedrabie-23/RBE-WaveLab';
const fake={version:'1.0.0',publicationDate:'2026-10-27',releaseURL:origin+'/releases/tag/v1.0.0',assetURL:origin+'/releases/download/v1.0.0/RBE-WaveLab_1.0.0_x64-setup.exe',filename:'RBE-WaveLab_1.0.0_x64-setup.exe',bytes:12345,sha256:'a'.repeat(64),signature:'unsigned',notesURL:origin+'/releases/tag/v1.0.0',ownerApproved:true,verification:{assetHTTPStatus:200,computedSHA256:'a'.repeat(64),checkedAt:'2026-10-27T00:00:00Z'}};
const source=path.resolve('src/data/release.json'),saved=fs.readFileSync(source),root=path.resolve('.local/release-fixtures'),results:any[]=[];
fs.mkdirSync(root,{recursive:true});
try{
 for(const status of ['stable','suspended']){
  fs.writeFileSync(source,JSON.stringify({...raw,status,notice:'LOCAL FIXTURE, NOT A PUBLIC RELEASE',knownLimitations:'Synthetic metadata; no real asset exists or is contacted.',stable:fake},null,2)+'\n');
  const dir=path.join(root,status),run=spawnSync(process.execPath,['node_modules/astro/bin/astro.mjs','build','--outDir',dir],{encoding:'utf8',env:{...process.env,ASTRO_TELEMETRY_DISABLED:'1'}});
  fs.writeFileSync(path.join(root,`${status}.log`),run.stdout+run.stderr);assert.equal(run.status,0,`${status} build failed`);
  const html=fs.readFileSync(path.join(dir,'download/index.html'),'utf8'),nodes=elements(html),links=nodes.filter(n=>attr(n,'data-installer-download')!==undefined);
  assert.equal(links.length,status==='stable'?1:0);if(status==='stable')assert.equal(attr(links[0],'href'),fake.assetURL);else assert(!html.includes('/releases/download/'));
  assert(html.includes(fake.sha256));assert(html.includes('12,345 bytes'));assert(html.includes('1.0.0'));
  const home=fs.readFileSync(path.join(dir,'index.html'),'utf8');assert(home.includes(status==='stable'?'Download for Windows':'Downloads temporarily suspended'));
  results.push({state:status,built:true,installerActions:links.length,metadataConsistent:true,realAssetContacted:false});
 }
 fs.writeFileSync(source,JSON.stringify({...raw,status:'stable',stable:{...fake,ownerApproved:false}}));
 const rejected=spawnSync(process.execPath,['node_modules/astro/bin/astro.mjs','build','--outDir',path.join(root,'rejected')],{encoding:'utf8',env:{...process.env,ASTRO_TELEMETRY_DISABLED:'1'}});
 fs.writeFileSync(path.join(root,'rejected.log'),rejected.stdout+rejected.stderr);assert.notEqual(rejected.status,0,'Unapproved build must fail closed');results.push({state:'unapproved stable',expectedBuildRejection:true});
}finally{fs.writeFileSync(source,saved);}
assert.deepEqual(fs.readFileSync(source),saved);fs.writeFileSync('.local/release-build-tests.json',JSON.stringify({timestamp:new Date().toISOString(),actualManifestRestored:true,localOnly:true,results},null,2));console.log(JSON.stringify(results,null,2));
