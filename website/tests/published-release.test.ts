import {test} from 'node:test';
import assert from 'node:assert/strict';
import facts from '../src/data/published-release.json';
import raw from '../src/data/release.json';
import pending from '../activation-manifest.pending.json';
import pin from '../publication-release-pin.json';
import {validateRelease,releaseView} from '../src/lib/release';
test('published desktop identity is independent of website publication',()=>{
 assert.equal(facts.releaseID,438495818);assert.equal(facts.version,'1.0.0');assert.equal(facts.tag,'v1.0.0');
 assert.equal(facts.tagTargetCommit,'3f86a9c4671322d73ff5c8f9b694617adb4203b6');assert.equal(facts.releasePublicationTimestamp,'2026-11-08T20:55:53Z');
 assert.equal(facts.websitePublicationTimestamp,null);assert.equal(facts.websitePublicationStatus,'not-published');
 assert.equal(facts.releaseURL,pin.origin+'/releases/tag/v1.0.0');
});
test('published bytes and full-download evidence match the immutable pin',()=>{
 for(const k of ['filename','bytes','sha256'] as const)assert.equal(facts.installer[k],pin[k]);
 assert.equal(facts.installer.signature,'unsigned');assert.equal(facts.installer.assetURL,pin.origin+'/releases/download/v1.0.0/'+pin.filename);
 assert.equal(facts.verification.assetHTTPStatus,200);assert.equal(facts.verification.completeDownloadedBytes,pin.bytes);assert.equal(facts.verification.computedSHA256,pin.sha256);assert(Number.isFinite(Date.parse(facts.verification.checkedAt)));
 const ids:Record<string,number>={'LICENSE.txt':725136754,'RBE_WaveLab_1.0.0_User_Materials.zip':725136811,'RBE_WaveLab_1.0.0_x64-setup.exe':725080724,'SHA256SUMS.txt':725136728,'THIRD_PARTY_NOTICES.md':725136782};
 assert.equal(facts.assets.length,5);assert.equal(new Set(facts.assets.map(a=>a.id)).size,5);
 for(const a of facts.assets){assert.equal(a.id,ids[a.name]);assert.equal(a.browser_download_url,pin.origin+'/releases/download/v1.0.0/'+a.name);}
});
test('each actual publication state is guarded and pending activation is not approval',()=>{
 const actual=releaseView(raw);assert.equal(actual.canDownload,actual.manifest.status==='stable');
 if(actual.canDownload)assert.equal(actual.downloadURL,facts.installer.assetURL);else assert.equal(actual.downloadURL,null);
 const inactive=releaseView({...structuredClone(raw),status:'pre-release',stable:null});assert.equal(inactive.canDownload,false);
 assert.equal(pending.stable.ownerApproved,false);assert.throws(()=>validateRelease(pending));
 assert.equal(pending.stable.publicationDate,facts.releasePublicationTimestamp.slice(0,10));assert.equal(pending.stable.verification.checkedAt,facts.verification.checkedAt);
 for(const k of ['filename','bytes','sha256','assetURL'] as const)assert.equal(pending.stable[k],facts.installer[k]);
});
test('isolated synthetic approval can activate and suspension always removes CTA',()=>{
 // In-memory simulation only, never a real owner/deployment approval.
 const simulated=structuredClone(pending) as any;simulated.stable.ownerApproved=true;
 assert.equal(releaseView(simulated).downloadURL,facts.installer.assetURL);
 simulated.status='suspended';assert.equal(releaseView(simulated).canDownload,false);assert.equal(releaseView(simulated).downloadURL,null);
});
