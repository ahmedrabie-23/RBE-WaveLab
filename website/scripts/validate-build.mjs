import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
import {elements,attr,text,find} from './html.mjs';
const args=process.argv.slice(2),dist=path.resolve(args.find(a=>a.startsWith('--dist='))?.slice(7)||'dist');
const base=(process.env.BASE_PATH||'/RBE-WaveLab').replace(/\/$/,'')+'/',origin=process.env.SITE_URL||'https://ahmedrabie-23.github.io';
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const files=walk(dist),pages=files.filter(f=>f.endsWith('.html')),failures=[],seenTitles=new Set(),seenCanonical=new Set();let checkedLinks=0,mathCount=0;
const manifest=JSON.parse(fs.readFileSync('src/data/release.json','utf8')),canDownload=manifest.status==='stable'&&manifest.stable!==null;
const check=(value,msg)=>{if(!value)failures.push(msg);};
const route=file=>base+path.relative(dist,file).replaceAll('\\','/').replace(/index\.html$/,'');
for(const file of pages){
 const html=fs.readFileSync(file,'utf8'),nodes=elements(html),r=route(file),label=path.relative(dist,file);
 const title=text(find(nodes,'title')||{}),description=attr(find(nodes,'meta','name','description')||{},'content'),canonical=attr(find(nodes,'link','rel','canonical')||{},'href');
 check(!!title&&!seenTitles.has(title),`${label}: absent/duplicate title`);seenTitles.add(title);
 check(description&&description.length>=40&&description.length<=190,`${label}: invalid description length`);
 const expected=new URL(r.endsWith('404.html')?base+'404/':r,origin).href;
 check(canonical===expected&&!seenCanonical.has(canonical),`${label}: wrong/duplicate canonical ${canonical}`);seenCanonical.add(canonical);
 check(nodes.filter(n=>n.tagName==='h1').length===1,`${label}: expected exactly one h1`);
 check(attr(find(nodes,'html')||{},'lang')==='en',`${label}: wrong language`);
 check(attr(find(nodes,'meta','property','og:image')||{},'content')===new URL(base+'brand/social.png',origin).href,`${label}: wrong OG image`);
 for(const n of nodes.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json')){try{const data=JSON.parse(text(n));check(data['@context']==='https://schema.org',`${label}: JSON-LD context`);check(!/aggregateRating|reviewRating|downloadCount/.test(text(n)),`${label}: fabricated schema metric`);}catch{failures.push(`${label}: invalid JSON-LD`);}}
 check(nodes.some(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json'),`${label}: no structured data`);
 check(!html.includes('katex-error')&&!/[\u0600-\u06ff\ufffd]/u.test(html),`${label}: math/encoding error`);
 const maths=nodes.filter(n=>n.tagName==='math');mathCount+=maths.length;
 for(const img of nodes.filter(n=>n.tagName==='img'))check(attr(img,'alt')!==undefined,`${label}: image without alt`);
 const installerActions=nodes.filter(n=>attr(n,'data-installer-download')!==undefined);
 check(installerActions.length===(canDownload&&label.replaceAll('\\','/')==='download/index.html'?1:0),`${label}: wrong installer action count`);
 if(canDownload)for(const action of installerActions)check(attr(action,'href')===manifest.stable.assetURL,`${label}: installer differs from verified manifest`);
 else check(!html.includes('/releases/download/'),`${label}: unapproved installer URL`);
 for(const n of nodes){for(const field of ['href','src','poster']){
  const value=attr(n,field);if(!value||/^(?:https?:|mailto:|data:|tel:)/.test(value))continue;
  let url;try{url=new URL(value,new URL(r,origin));}catch{failures.push(`${label}: malformed ${field}`);continue;}
  if(url.origin!==new URL(origin).origin)continue;
  check(url.pathname.startsWith(base),`${label}: URL escapes project base ${value}`);
  let target=path.join(dist,decodeURIComponent(url.pathname.slice(base.length)));if(url.pathname.endsWith('/'))target=path.join(target,'index.html');
  check(fs.existsSync(target)&&fs.statSync(target).isFile(),`${label}: broken ${field} ${value}`);checkedLinks++;
  if(url.hash&&fs.existsSync(target)&&target.endsWith('.html')){const targetNodes=target===file?nodes:elements(fs.readFileSync(target,'utf8'));check(targetNodes.some(t=>attr(t,'id')===decodeURIComponent(url.hash.slice(1))),`${label}: missing anchor ${value}`);}
 }}
 for(const table of nodes.filter(n=>n.tagName==='table')){const rows=[];const scan=n=>{if(n.tagName==='tr')rows.push(n);n.childNodes?.forEach(scan);};scan(table);const sizes=rows.map(n=>n.childNodes.filter(c=>c.tagName==='td'||c.tagName==='th').length);check(sizes.every(s=>s===sizes[0]),`${label}: split Markdown table ${sizes}`);}
}
check(pages.length===40,`Expected40 generated HTML pages; found${pages.length}`);
const home=elements(fs.readFileSync(path.join(dist,'index.html'),'utf8'));
check(home.filter(n=>attr(n,'data-home-section')).length===8,'Homepage must have eight approved sections');
const nav=home.find(n=>n.tagName==='nav'&&attr(n,'aria-label')==='Primary');
check(nav!==undefined,'Missing primary navigation');
const siteMap=fs.readFileSync(path.join(dist,'sitemap-0.xml'),'utf8');check(!siteMap.includes('404'),'404 must not be indexed');check(siteMap.includes(new URL(base+'experiments/wave-propagation/',origin).href),'Sitemap lost base');
const propagation=elements(fs.readFileSync(path.join(dist,'experiments/wave-propagation/index.html'),'utf8'));
check(propagation.some(n=>n.tagName==='mi'&&text(n)==='ω'),'Lowercase omega not rendered in MathML');
check(propagation.some(n=>n.tagName==='mi'&&text(n)==='Ω'),'Uppercase ohm not rendered in MathML');
check(mathCount>70,`Insufficient rendered math coverage ${mathCount}`);
const output={timestamp:new Date().toISOString(),base,origin,pages:pages.length,checkedLinks,mathExpressions:mathCount,failures};
fs.mkdirSync('.local',{recursive:true});fs.writeFileSync('.local/build-validation.json',JSON.stringify(output,null,2));console.log(JSON.stringify(output,null,2));
if(args.includes('--require-stable')){const manifest=JSON.parse(fs.readFileSync('src/data/release.json','utf8'));assert.equal(manifest.status,'stable','Future publication requires approved verified Stable manifest');}
const publicationState=args.find(a=>a.startsWith('--require-publication-state='))?.split('=')[1];
if(publicationState!==undefined){
 assert(['stable','suspended'].includes(publicationState),'Publication permits only explicit stable or suspended');
 assert.equal(manifest.status,publicationState,'Manifest must match the approved publication/rollback state');
 if(publicationState==='suspended')assert.equal(canDownload,false,'Rollback must remove installer action');
}
assert.equal(failures.length,0,`Build audit failed (${failures.length})`);
