import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import assert from 'node:assert/strict';
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const expected=JSON.parse(fs.readFileSync('src/data/authoritative-sources.json','utf8'));
for(const [file,hash]of Object.entries(expected))assert.equal(sha(fs.readFileSync(path.join('..',file))),hash,`Authoritative document changed: ${file}`);
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const source=walk('.').filter(f=>!/(^|[\\/])(?:node_modules|\.astro|\.local|dist|test-results|playwright-report)(?:[\\/]|$)/.test(f));
const dist=walk('dist'),files=[...source,...dist],issues=[];let scannedText=0;
for(const file of files){
 if(/(?:^|[\\/])(?:\.env[^\\/]*|Cargo\.toml|tauri\.conf\.json|\.git)(?:$|[\\/])|\.(?:rs|pdb|exe|msi|map|key|pem|pfx)$/i.test(file))issues.push(`Prohibited file: ${file}`);
 if(/\.(?:astro|ts|mjs|json|md|txt|css|html|yml|ps1)$/i.test(file)){
  const t=fs.readFileSync(file,'utf8');scannedText++;
  if(/(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----)/.test(t))issues.push(`Credential pattern: ${file}`);
  const cacheName=['WaveLab','Phase','A','BuildCache'].join('_');
  if(/C:[\\/]+Users[\\/]+ENG-RABEE|\.codex[\\/]attachments|(?:127\.0\.0\.1:\d+.*token=)/i.test(t)||t.includes(cacheName))issues.push(`Private/local path: ${file}`);
 }
}
assert(!fs.existsSync('../.github/workflows'),'No active workflow may be introduced');
assert(fs.readFileSync('public/third-party-notices.txt','utf8').includes('SIL OPEN FONT LICENSE'),'Missing font notices');
const result={timestamp:new Date().toISOString(),authoritativeDocuments:Object.keys(expected).length,sourceFiles:source.length,builtFiles:dist.length,scannedText,issues,limits:'Pattern scan and curated-tree inspection, not proof of absence of every possible secret. No application source or installer is required.'};
fs.mkdirSync('.local',{recursive:true});fs.writeFileSync('.local/delivery-audit.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));assert.equal(issues.length,0,'Delivery audit failed');
