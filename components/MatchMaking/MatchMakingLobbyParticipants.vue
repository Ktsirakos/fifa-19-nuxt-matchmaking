<template>
	<div class="flex w-full">
		<div class="w-1/12 self-center">
			<base-typography type="small" color="white" weight="light"
				>Lobby</base-typography
			>
		</div>
		<div class="flex flex-wrap">
			<base-avatar-circle
				v-for="par in participants"
				:key="par.id"
				class="m-3"
				:img="par.img"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		participants: {
			type: Array,
			default: () => {
				return []
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>
