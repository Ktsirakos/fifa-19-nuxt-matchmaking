<template>
	<div class="black-box flex justify-center">
		<slot></slot>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.black-box {
	position: relative;
	z-index: 0;
	width: 105px;
	height: 105px;
	background: $black;
}
</style>
