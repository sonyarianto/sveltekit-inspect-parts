<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';

	console.log('[<script>] /+layout.svelte');

	onMount(() => {
		console.log('[onMount()] /+layout.svelte');
	});

	afterUpdate(() => {
		console.log('[afterUpdate()] /+layout.svelte');
	});
</script>

<slot />
