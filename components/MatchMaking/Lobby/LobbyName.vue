<template>
	<div class="flex">
		<base-typography
			class="self-center"
			type="subtitle"
			color="black"
			weight="bold"
			>{{ lobbyName }}</base-typography
		>
		<img
			class=" ml-3 self-center"
			src="/icons/lock.svg"
			@click="$emit('lock')"
		/>
	</div>
</template>

<script>
export default {
	computed: {
		lobbyName() {
			return "Konstantino's lobby"
		}
	}
}
</script>

<style lang="scss" scoped></style>
