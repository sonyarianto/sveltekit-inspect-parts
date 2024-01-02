<script lang="ts">
	import { onMount } from 'svelte';

	console.log('[<script>] /+layout.svelte');

	onMount(() => {
		console.log('[onMount()] /+layout.svelte');
	});
</script>

<slot />
