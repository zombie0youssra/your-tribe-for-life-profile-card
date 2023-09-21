<script>
	/** @type {import("@prismicio/client").Content.InfoBlockSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<p>{slice.primary.about}</p>
	<img src={slice.primary.myimg.url} alt={slice.primary.myimg.alt} />
</section>
