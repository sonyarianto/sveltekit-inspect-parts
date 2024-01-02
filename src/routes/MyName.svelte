<script lang="ts">
	import { onMount } from 'svelte';
	import { name } from '$lib/stores';

	console.log('[<script>] /MyName.svelte');

	onMount(() => {
		console.log('[onMount()] /MyName.svelte');
	});
</script>

<div>
	My name is {$name}.
</div>
<div>See on devtools console and also on the development server console.</div>
