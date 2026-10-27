import fs from 'node:fs';import path from 'node:path';import {spawnSync} from 'node:child_process';import assert from 'node:assert/strict';
const out=path.resolve('.local/root-base'),env={...process.env,BASE_PATH:'/',SITE_URL:'https://wavelab.example',ASTRO_TELEMETRY_DISABLED:'1'};
fs.mkdirSync('.local',{recursive:true});
const build=spawnSync(process.execPath,['node_modules/astro/bin/astro.mjs','build','--outDir',out],{encoding:'utf8',env});fs.writeFileSync('.local/root-base-build.log',build.stdout+build.stderr);assert.equal(build.status,0,'Root-base fixture build failed');
const validation=spawnSync(process.execPath,['scripts/validate-build.mjs',`--dist=${out}`],{encoding:'utf8',env});fs.writeFileSync('.local/root-base-validation.log',validation.stdout+validation.stderr);assert.equal(validation.status,0,'Root-base fixture routing audit failed');
fs.copyFileSync('.local/build-validation.json','.local/root-base-validation.json');console.log(fs.readFileSync('.local/root-base-validation.json','utf8'));
