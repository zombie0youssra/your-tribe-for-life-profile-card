<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	export let data;

	console.log(data);
</script>

<h2>halllooo</h2>
<SliceZone slices={data.slices} {components} />
