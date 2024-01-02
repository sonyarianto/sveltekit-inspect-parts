<script lang="ts">
	import { onMount, afterUpdate, onDestroy } from 'svelte';
	import { name } from '$lib/stores';
	import { browser } from '$app/environment';

	console.log('[<script>] /MyName.svelte');

	onMount(() => {
		console.log('[onMount()] /MyName.svelte');
	});

	onDestroy(() => {
		console.log('[onDestroy()] /MyName.svelte');
	});

	afterUpdate(() => {
		console.log('[afterUpdate()] /MyName.svelte');
	});

	if (browser) {
		console.log('[browser] /MyName.svelte');
	}
</script>

<div>
	My name is {$name}.
</div>
<div>See on devtools console and also on the development server console.</div>
