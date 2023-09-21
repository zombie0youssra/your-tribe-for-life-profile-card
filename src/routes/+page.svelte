<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	export let data;

	// console.log(data);
</script>

<main>
	<SliceZone slices={data.slices} {components} />
</main>

<style>
	main {
		margin-left: -1rem;
	}
</style>
