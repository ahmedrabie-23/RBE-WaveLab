import { contact, github } from '../lib/paths';
export const person = { '@type': 'Person', name: 'Ahmed Rabie', sameAs: [contact, 'https://github.com/ahmedrabie-23'] };
export const nav = [{ title: 'Features', path: 'features/' },{ title: 'Experiments', path: 'experiments/' },{ title: 'Learn', path: 'learn/' },{ title: 'Download', path: 'download/' },{ title: 'Community', path: 'community/' }];
export const policies = [
 { slug: 'privacy', title: 'Privacy', description: 'Local application workflows, website preferences and separate external-service behavior.', id: 'docs/privacy', source: 'docs/PRIVACY.md' },
 { slug: 'requirements', title: 'Platform requirements', description: 'Windows 11 x64 target, WebView2 dependency and current qualification limits.', id: 'docs/requirements', source: 'docs/REQUIREMENTS.md' },
 { slug: 'scientific-scope', title: 'Scientific scope', description: 'Supported continuous-wave models, measurement validity and engineering limitations.', id: 'docs/scientific_scope', source: 'docs/SCIENTIFIC_SCOPE.md' },
 { slug: 'release-status', title: 'Application release status', description: 'Current release facts, executed checks and explicitly untested qualification limits.', id: 'docs/release_status', source: 'docs/RELEASE_STATUS.md' },
 { slug: 'support', title: 'Support', description: 'Official bug, community and general-contact channels with best-effort support.', id: 'support', source: 'SUPPORT.md' },
 { slug: 'security', title: 'Security reporting', description: 'Private vulnerability reporting and safe handling of confidential information.', id: 'security', source: 'SECURITY.md' },
 { slug: 'copyright', title: 'Copyright and application licensing', description: 'Ahmed Rabie ownership, RBE branding and independent third-party rights.', id: 'copyright', source: 'COPYRIGHT.md' },
];
export { github, contact };
