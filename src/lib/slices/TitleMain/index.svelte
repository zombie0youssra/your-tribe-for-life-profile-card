<script>
	/** @type {import("@prismicio/client").Content.TitleMainSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<h1>{slice.primary.name}</h1>
	<svg width="220" height="56" viewBox="5 0 220 4" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0 0H55V56H0V0Z" fill="#900E0E" />
		<path d="M55 0H110V56H55V0Z" fill="#B82808" />
		<path d="M110 0H165V56H110V0Z" fill="#B85D08" />
		<path d="M165 0H220V56H165V0Z" fill="#C38C00" />
	</svg>
</section>

<style>
	svg {
		margin-top: -2rem;
	}
</style>
