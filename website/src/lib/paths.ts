export const base = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/`;
export function href(path = ''): string { return base + path.replace(/^\/+/, ''); }
export function canonical(path = ''): string { return new URL(href(path), import.meta.env.SITE || 'https://ahmedrabie-23.github.io').href; }
export const github = 'https://github.com/ahmedrabie-23/RBE-WaveLab';
export const contact = 'https://www.linkedin.com/in/ahmedrabie23';
