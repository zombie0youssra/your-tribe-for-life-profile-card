<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	export let data;

	// console.log(data);
</script>

<section>
	<SliceZone slices={data.slices} {components} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		background-color: rgb(66, 66, 109);
		border-radius: 2rem;
	}
</style>
