import {test} from 'node:test';
import assert from 'node:assert/strict';
import raw from '../src/data/release.json';
import {validateRelease,releaseView} from '../src/lib/release';
const origin='https://github.com/ahmedrabie-23/RBE-WaveLab';
// Test data only: these metadata do not describe a published asset.
export function stableFixture(){return {...structuredClone(raw),status:'stable',notice:'LOCAL TEST FIXTURE ONLY',knownLimitations:'Fixture, not a real installer.',stable:{version:'1.0.0',publicationDate:'2026-10-27',releaseURL:origin+'/releases/tag/v1.0.0',assetURL:origin+'/releases/download/v1.0.0/RBE-WaveLab_1.0.0_x64-setup.exe',filename:'RBE-WaveLab_1.0.0_x64-setup.exe',bytes:12345,sha256:'a'.repeat(64),signature:'unsigned',notesURL:origin+'/releases/tag/v1.0.0',ownerApproved:true,verification:{assetHTTPStatus:200,computedSHA256:'a'.repeat(64),checkedAt:'2026-10-27T00:00:00Z'}}};}
test('actual pre-release never offers an installer',()=>{const v=releaseView(raw);assert.equal(v.canDownload,false);assert.equal(v.downloadURL,null);assert.equal(v.manifest.stable,null);});
test('approved local Stable fixture produces the exact validated URL',()=>{const f=stableFixture(),v=releaseView(f);assert.equal(v.downloadURL,f.stable.assetURL);assert.equal(v.canDownload,true);});
test('suspended former Stable preserves metadata but removes the action',()=>{const f=stableFixture();f.status='suspended';const v=releaseView(f);assert.equal(v.canDownload,false);assert.equal(v.downloadURL,null);assert.equal(v.manifest.stable?.version,'1.0.0');});
test('suspended before Stable is also safe',()=>{assert.equal(releaseView({...raw,status:'suspended'}).downloadURL,null);});
const invalid:Array<[string,(f:any)=>void]>=[
 ['RC disguised as Stable',f=>f.stable.version='1.0.0-rc.5'],['unapproved Stable',f=>f.stable.ownerApproved=false],['wrong repository',f=>f.stable.releaseURL=f.stable.releaseURL.replace('ahmedrabie-23','other')],['wrong asset',f=>f.stable.assetURL+='?token=private'],['javascript URL',f=>f.stable.assetURL='javascript:alert(1)'],['bad size',f=>f.stable.bytes=0],['fractional size',f=>f.stable.bytes=1.5],['bad checksum',f=>f.stable.sha256='fake'],['unverified bytes',f=>f.stable.verification.computedSHA256='b'.repeat(64)],['missing verification',f=>delete f.stable.verification],['asset not found',f=>f.stable.verification.assetHTTPStatus=404],['invalid date',f=>f.stable.publicationDate='2026-02-31'],['missing date',f=>delete f.stable.publicationDate],['bad signature',f=>f.stable.signature='verified publisher maybe'],['wrong platform',f=>f.platform='All Windows'],['missing limitation context',f=>f.knownLimitations=42],['schema mismatch',f=>f.schemaVersion=2],['unknown state',f=>f.status='latest'],['wrong source notes',f=>f.sourceNotesURL='https://example.com'],['invalid verification timestamp',f=>f.stable.verification.checkedAt='unknown'],['prerelease carrying asset',f=>f.status='pre-release']
];
for(const [label,mutate]of invalid)test(`reject ${label}`,()=>{const f=stableFixture();mutate(f);assert.throws(()=>validateRelease(f));});
test('reject null/array/empty inputs',()=>{for(const f of [null,[],{},undefined])assert.throws(()=>validateRelease(f));});
