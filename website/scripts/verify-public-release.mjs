// Proposed future GET-only integrity gate. Not installer execution or authorization.
import fs from 'node:fs';import assert from 'node:assert/strict';import crypto from 'node:crypto';
assert.equal(process.argv[2],'--approved-stable-publication','Explicit approved-stage invocation required');
const manifest=JSON.parse(fs.readFileSync('src/data/release.json','utf8'));
const pin=JSON.parse(fs.readFileSync('publication-release-pin.json','utf8'));
assert.equal(manifest.status,'stable');const stable=manifest.stable;assert.equal(stable?.ownerApproved,true);
for(const key of ['version','filename','bytes','sha256'])assert.equal(stable[key],pin[key],`Frozen ${key} mismatch`);
assert.equal(stable.signature,'unsigned');assert.equal(stable.releaseURL,`${pin.origin}/releases/tag/v${pin.version}`);
assert.equal(stable.assetURL,`${pin.origin}/releases/download/v${pin.version}/${pin.filename}`);
const response=await fetch(stable.assetURL,{signal:AbortSignal.timeout(300000)});
assert.equal(response.status,200,'Actual public installer GET must succeed');
assert(response.body,'No response body');assert(new URL(response.url).protocol==='https:','No insecure redirect');
const hash=crypto.createHash('sha256');let bytes=0;
for await(const chunk of response.body){bytes+=chunk.length;assert(bytes<=pin.bytes,'Unexpected larger asset');hash.update(chunk);}
const actual=hash.digest('hex');assert.equal(bytes,pin.bytes);assert.equal(actual,pin.sha256);
assert.equal(stable.verification?.assetHTTPStatus,200);assert.equal(stable.verification?.computedSHA256,actual);
const record={checkedAt:new Date().toISOString(),version:pin.version,filename:pin.filename,bytes,sha256:actual,HTTPStatus:response.status,installerExecuted:false};
fs.mkdirSync('.local',{recursive:true});fs.writeFileSync('.local/public-asset-verification.json',JSON.stringify(record,null,2));
console.log(JSON.stringify(record,null,2));
