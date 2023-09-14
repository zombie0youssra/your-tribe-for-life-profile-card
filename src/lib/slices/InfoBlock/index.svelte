<script>
	/** @type {import("@prismicio/client").Content.InfoBlockSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as element (element.id)}
		<p>{element.infotext}</p>
	{/each}
</section>
