<script>
	/** @type {import("@prismicio/client").Content.AboutImgSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<img src={slice.primary.aboutImg.url} alt={slice.primary.aboutImg.alt} />
</section>
<pre>

    {JSON.stringify(slice, null, 3)}

</pre>
