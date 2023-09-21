<script>
	/** @type {import("@prismicio/client").Content.ListThingsSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as item (item)}
		<section class="wrapper">
			<img src={item.imgproof.url} alt={item.imgproof.url} />
			<span>{item.info}</span>
			<a href={item.weblink}>go to</a>
		</section>
	{/each}
</section>

<style>
	section {
		margin-left: 1rem;
		display: flex;
		flex-direction: column;
	}

	.wrapper {
		display: flex;
		flex-direction: row;
	}
	span {
		font-weight: 500;
		font-size: 18px;
		margin-right: 1rem;
	}
</style>
