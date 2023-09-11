<script>
	/** @type {import("@prismicio/client").Content.TextBlockSlice} */
	import { PrismicRichText } from '@prismicio/svelte';
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.textblock} />
</section>
