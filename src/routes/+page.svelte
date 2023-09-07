<script>
	import { SliceZone } from '@prismicio/svelte';
	import { dev } from '$app/enviroment';

	export let data;
</script>

<SliceZone slices={data.document.data.body} />

<pre>
    {JSON.stringify(data, null, 2)}
</pre>
