<template>
	<div class="matchmaking-lobby-footer-container flex">
		<base-typography
			class="w-1/2 self-center"
			type="label"
			color="white"
			weight="bold"
			>Play now</base-typography
		>
		<base-typography
			class="w-2/6 self-center"
			type="label"
			color="white"
			weight="reqular"
			>4,001 in queue</base-typography
		>
		<base-icon-button
			class="w-1/6 flex justify-end self-center"
			icon="/icons/right-arrow.svg"
			@click="$emit('click')"
		/>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.matchmaking-lobby-footer-container {
	width: 100%;
	height: 89px;
	background: $primary;
}
</style>
