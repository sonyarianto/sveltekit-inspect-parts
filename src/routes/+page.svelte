<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { name } from '$lib/stores';

	console.log('[<script>] /+page.svelte');

	onMount(() => {
		$name = 'SvelteKit Inspect Parts';
		
		console.log('[onMount()] /+page.svelte');
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="SvelteKit Inspect Parts" />
</svelte:head>

<div>Hello, world!</div>
<button on:click={() => goto('/about')}>About</button>
