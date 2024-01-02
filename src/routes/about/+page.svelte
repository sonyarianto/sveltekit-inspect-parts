<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	console.log('[<script>] /about/+page.svelte');

	onMount(() => {
		console.log('[onMount()] /about/+page.svelte');
	});
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About" />
</svelte:head>

<div>About</div>
<button on:click={() => goto('/')}>Back</button>
