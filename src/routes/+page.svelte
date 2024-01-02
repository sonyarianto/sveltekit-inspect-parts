<script context="module" lang="ts">
	console.log('[<script context="module">] /+page.svelte');
</script>

<script lang="ts">
	import { onMount, afterUpdate, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { name } from '$lib/stores';
	import MyName from './MyName.svelte';
	import { browser } from '$app/environment';

	console.log('[<script>] /+page.svelte');

	onMount(() => {
		$name = 'SvelteKit Inspect Parts';

		console.log('[onMount()] /+page.svelte');
	});

	onDestroy(() => {
		console.log('[onDestroy()] /+page.svelte');
	});

	afterUpdate(() => {
		console.log('[afterUpdate()] /+page.svelte');
	});

	if (browser) {
		console.log('[browser] /+page.svelte');
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="SvelteKit Inspect Parts" />
</svelte:head>

<div>Hello, world!</div>
<button on:click={() => goto('/about')}>About</button>
<MyName />
