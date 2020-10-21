<template>
	<div class="outer-circle">
		<div class="inner-circle">
			<img :src="img" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.outer-circle {
	border: 2px solid #ffffff;
	box-sizing: border-box;
	border-radius: 50%;
	padding: 4px;

	.inner-circle {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		overflow: hidden;
	}
}
</style>
