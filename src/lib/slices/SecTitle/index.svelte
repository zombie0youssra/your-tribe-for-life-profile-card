<script>
	/** @type {import("@prismicio/client").Content.SecTitleSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<img src="star.png" alt="tiny star" />
	<h2>{slice.primary.sectitle}</h2>
	<img src="star.png" alt="tiny star" />
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		margin-top: 1rem;
	}

	section img {
		height: 1.5rem;
		width: auto;
		margin-top: 1.2rem;
	}
</style>
