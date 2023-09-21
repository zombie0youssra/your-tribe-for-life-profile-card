<script>
	/** @type {import("@prismicio/client").Content.InfoBlockSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="container">
		<div class="content">
			<div class="content__container">
				<p class="content__container__text">welcome</p>

				<ul class="content__container__list">
					<li class="content__container__list__item">world!</li>
					<li class="content__container__list__item">human!</li>
					<li class="content__container__list__item">alien!</li>
					<li class="content__container__list__item">nerds!</li>
				</ul>
			</div>
		</div>
	</div>
	<img src={slice.primary.myimg.url} alt={slice.primary.myimg.alt} />
</section>

<style>
	section {
		display: flex;
		height: 10rem;
		width: 100vw;
		margin-top: 5rem;
		flex-direction: row;
		gap: 5%;
		background-color: #c38c00;
	}

	.container {
		width: 340px;
		height: 50px;
		margin-top: 4rem;
		margin-left: 1rem;
	}

	.content {
		display: block;
		position: sticky;
		overflow: hidden;
		font-family: 'Lato', sans-serif;
		font-size: 35px;
		line-height: 40px;
		color: #ecf0f1;
	}

	.content__container {
		font-weight: 600;
		overflow: hidden;
		height: 40px;
		padding: 0 20px;
	}

	.content__container:before {
		content: '[';
		left: 0;
	}

	.content__container:after {
		content: ']';
		position: absolute;
		right: 0;
	}

	.content__container:after,
	.content__container:before {
		position: absolute;
		top: -2px;
		color: #b82808;
		font-size: 42px;
		line-height: 40px;
		-webkit-animation-name: opacity;
		-webkit-animation-duration: 2s;
		-webkit-animation-iteration-count: infinite;
		animation-name: opacity;
		animation-duration: 2s;
		animation-iteration-count: infinite;
	}

	.content__container__text {
		display: inline;
		float: left;
		margin: 0;
	}

	.content__container__list {
		margin-top: 0;
		padding-left: 110px;
		text-align: left;
		list-style: none;
		-webkit-animation-name: change;
		-webkit-animation-duration: 10s;
		-webkit-animation-iteration-count: infinite;
		animation-name: change;
		animation-duration: 10s;
		animation-iteration-count: infinite;
	}

	.content__container__list__item {
		line-height: 40px;
		margin: 0;
		margin-left: 3rem;
	}

	@keyframes opacity {
		0%,
		100% {
			opacity: 0;
		}

		50% {
			opacity: 1;
		}
	}

	@keyframes change {
		0%,
		12.66%,
		100% {
			transform: translate3d(0, 0, 0);
		}

		16.66%,
		29.32% {
			transform: translate3d(0, -25%, 0);
		}

		33.32%,
		45.98% {
			transform: translate3d(0, -50%, 0);
		}

		49.98%,
		62.64% {
			transform: translate3d(0, -75%, 0);
		}

		66.64%,
		79.3% {
			transform: translate3d(0, -50%, 0);
		}

		83.3%,
		95.96% {
			transform: translate3d(0, -25%, 0);
		}
	}
</style>
