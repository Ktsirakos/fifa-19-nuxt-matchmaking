<template>
	<div id="background--container">
		<div class="overlay">
			<slot></slot>
		</div>
		<img :src="image" />
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
			default: '/Image.png'
		}
	}
}
</script>

<style lang="scss" scoped>
#background--container {
	height: 100vh;
	width: 100vw;
	background: $bg;
	position: relative;
	overflow: hidden;

	img {
		position: absolute;
		top: 10%;
		left: 40px;
		mix-blend-mode: multiply;
		opacity: 0.8;
		z-index: 0;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
}
</style>
