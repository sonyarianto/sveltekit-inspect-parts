<script lang="ts">
	import { goto } from '$app/navigation';
	import { myStoreData } from '$lib/stores';

	console.log('/+page.svelte');
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="SvelteKit Inspect Parts" />
</svelte:head>

<div>Hello, world!</div>
<button on:click={() => goto('/about')}>About</button>
