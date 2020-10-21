<template>
	<div class="flex w-full">
		<base-icon-button
			color="black"
			icon="/icons/left-arrow.svg"
			@click="$emit('back')"
		/>
		<base-typography
			class="justify-center ml-5"
			type="normal"
			color="black"
			weight="medium"
			>Matchmaking Lobby</base-typography
		>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
