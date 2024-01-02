<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { browser } from '$app/environment';

	console.log('[<script>] /+layout.svelte');

	onMount(() => {
		console.log('[onMount()] /+layout.svelte');
	});

	afterUpdate(() => {
		console.log('[afterUpdate()] /+layout.svelte');
	});

	if (browser) {
		console.log('[browser] /+layout.svelte');
	}
</script>

<slot />
