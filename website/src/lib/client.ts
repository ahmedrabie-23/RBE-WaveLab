const theme = document.querySelector<HTMLSelectElement>('#theme');
const system = window.matchMedia('(prefers-color-scheme: dark)');
const allowed = (v: string | null) => v === 'light' || v === 'dark' ? v : 'system';
function selection() { try { return allowed(localStorage.getItem('wavelab-theme')); } catch { return 'system'; } }
function apply(value: string) { document.documentElement.dataset.theme = value === 'system' ? system.matches ? 'dark' : 'light' : value; }
if (theme) { theme.value = selection(); apply(theme.value); theme.addEventListener('change', () => { apply(theme.value); try { if (theme.value === 'system') localStorage.removeItem('wavelab-theme'); else localStorage.setItem('wavelab-theme', theme.value); } catch { /* Preference storage is optional. */ } }); }
system.addEventListener('change', () => { if (selection() === 'system') apply('system'); });
const mobile = document.querySelector<HTMLDetailsElement>('.mobile-menu');
mobile?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { mobile.open = false; }));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && mobile?.open) { mobile.open = false; mobile.querySelector('summary')?.focus(); } });
const viewer = document.querySelector<HTMLDialogElement>('#image-viewer');
document.querySelectorAll<HTMLButtonElement>('[data-gallery]').forEach(button => button.addEventListener('click', () => {
 if (!viewer) return; const image = viewer.querySelector<HTMLImageElement>('#viewer-image')!;
 image.src = button.dataset.gallery!; image.alt = button.dataset.alt || 'Actual WaveLab application'; viewer.querySelector('#viewer-caption')!.textContent = button.dataset.alt || ''; viewer.showModal();
}));
viewer?.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll<HTMLButtonElement>('[data-wave-play]').forEach(button => {
 const diagram = document.getElementById(button.getAttribute('aria-controls') || '');
 const stop = () => { diagram?.setAttribute('data-playing','false'); button.setAttribute('aria-pressed','false'); button.textContent = reduced.matches ? 'Reduced motion: static illustration' : 'Play conceptual wave'; button.disabled = reduced.matches; };
 stop(); reduced.addEventListener('change',stop);
 button.addEventListener('click', () => { const playing = button.getAttribute('aria-pressed') === 'true'; button.setAttribute('aria-pressed',String(!playing)); diagram?.setAttribute('data-playing',String(!playing)); button.textContent = playing ? 'Play conceptual wave' : 'Pause conceptual wave'; });
});
