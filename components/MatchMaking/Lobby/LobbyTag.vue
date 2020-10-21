<template>
	<div class="game-tag flex justify-center">
		<base-typography
			class="uppercase"
			type="small"
			color="white"
			weight="medium"
			>{{ game }}</base-typography
		>
	</div>
</template>

<script>
export default {
	props: {
		game: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.game-tag {
	background: $black;
	height: 14px;
	width: 58px;
	border-radius: 0px 100px 100px 0px;
}
</style>
