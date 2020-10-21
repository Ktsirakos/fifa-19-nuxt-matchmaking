<template>
	<div class="chip-box flex justify-center">
		<base-typography class="uppercase self-center" type="xxs" color="black">
			{{ label }}
		</base-typography>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String
		}
	}
}
</script>

<style lang="scss" scoped>
.chip-box {
	border: 1px solid #1b1b1b;
	box-sizing: border-box;
	height: 17px;
	width: 51px;

	p {
		color: $black;
	}
}
</style>
