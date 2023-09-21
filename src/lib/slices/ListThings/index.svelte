<script>
	/** @type {import("@prismicio/client").Content.ListThingsSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as item (item)}
		<img src={item.imgproof.url} alt={item.imgproof.url} />
		<span>{item.info}</span>
		<!-- <a href={item.weblink}>Link</a> -->
	{/each}
</section>
