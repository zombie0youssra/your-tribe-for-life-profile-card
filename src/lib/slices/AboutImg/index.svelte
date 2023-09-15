<script>
	/** @type {import("@prismicio/client").Content.AboutImgSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<img src={slice.primary.aboutImg.url} alt={slice.primary.aboutImg.alt} />
</section>

<!-- <pre>

    {JSON.stringify(slice, null, 3)}

</pre> -->

<style>
	img {
		margin-left: 1rem;
		margin-top: 1rem;
		height: 5rem;
		width: auto;
		border: 0.2rem solid rgb(40, 40, 58);
		border-radius: 2rem;
	}
</style>
