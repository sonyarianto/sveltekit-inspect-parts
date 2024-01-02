import { browser } from '$app/environment';

export async function load() {
	console.log('[load()] /+page.ts');

	if (browser) {
		console.log('[browser inside load()] /+page.ts');
	}
}

if (browser) {
	console.log('[browser outside load()] /+page.ts');
}
