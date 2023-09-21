<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	export let data;

	// console.log(data);
</script>

<body>
	<SliceZone slices={data.slices} {components} />
</body>
