import raw from '../data/release.json';
export interface StableRelease {
  version: string; publicationDate: string; releaseURL: string; assetURL: string;
  filename: string; bytes: number; sha256: string; signature: 'unsigned' | 'signed';
  notesURL: string; ownerApproved: true;
  verification: { assetHTTPStatus: 200; computedSHA256: string; checkedAt: string };
}
export interface ReleaseManifest {
  schemaVersion: 1; status: 'pre-release' | 'stable' | 'suspended';
  candidateVersion: string; platform: 'Windows 11 x64'; stable: StableRelease | null;
  notice: string; knownLimitations: string; sourceNotesURL: string;
}
const origin = 'https://github.com/ahmedrabie-23/RBE-WaveLab';
export function validateRelease(input: unknown): ReleaseManifest {
  if (!input || typeof input !== 'object') throw new Error('Release manifest must be an object');
  const r = input as ReleaseManifest;
  if (r.schemaVersion !== 1 || !['pre-release', 'stable', 'suspended'].includes(r.status) || r.platform !== 'Windows 11 x64') throw new Error('Unsupported release state/platform');
  if (typeof r.candidateVersion !== 'string' || !r.candidateVersion.trim() || typeof r.notice !== 'string' || !r.notice.trim() || typeof r.knownLimitations !== 'string' || !r.knownLimitations.trim() || r.sourceNotesURL !== `${origin}/blob/main/docs/RELEASE_STATUS.md`) throw new Error('Missing authoritative release context');
  if (r.status === 'pre-release' && r.stable !== null) throw new Error('Pre-release cannot expose an installer');
  if (r.status === 'stable' || r.stable !== null) {
    const v = r.stable;
    if (!v || typeof v.version !== 'string' || !/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(v.version) || v.ownerApproved !== true) throw new Error('Stable must be explicitly approved, never an RC');
    if (v.releaseURL !== `${origin}/releases/tag/v${v.version}`) throw new Error('Wrong release repository/tag');
    if (!/^[A-Za-z0-9_.-]+_x64-setup\.exe$/.test(v.filename) || !v.filename.includes(v.version)) throw new Error('Wrong installer filename');
    if (v.assetURL !== `${origin}/releases/download/v${v.version}/${v.filename}`) throw new Error('Installer URL must be exact official asset');
    if (!Number.isSafeInteger(v.bytes) || v.bytes <= 0 || !/^[a-f0-9]{64}$/.test(v.sha256)) throw new Error('Missing real size/hash');
    if (!['unsigned','signed'].includes(v.signature) || typeof v.publicationDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(v.publicationDate) || !Number.isFinite(Date.parse(v.publicationDate)) || new Date(v.publicationDate).toISOString().slice(0,10) !== v.publicationDate) throw new Error('Invalid release date/signature');
    if (v.notesURL !== v.releaseURL || v.verification?.assetHTTPStatus !== 200 || v.verification.computedSHA256 !== v.sha256 || typeof v.verification.checkedAt !== 'string' || !Number.isFinite(Date.parse(v.verification.checkedAt))) throw new Error('Independent asset verification required');
  }
  return r;
}
export function releaseView(input: unknown) {
  const r = validateRelease(input);
  return { manifest: r, canDownload: r.status === 'stable' && r.stable !== null,
    downloadURL: r.status === 'stable' ? r.stable!.assetURL : null,
    label: r.status === 'stable' ? 'Download for Windows' : r.status === 'suspended' ? 'Downloads temporarily suspended' : 'Release in preparation' };
}
export const release = validateRelease(raw);
