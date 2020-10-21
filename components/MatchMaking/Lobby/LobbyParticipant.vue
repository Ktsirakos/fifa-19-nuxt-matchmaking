<template>
	<div class="flex flex-col">
		<div class="img-mask">
			<img v-if="!empty" :src="img" />
		</div>
		<div v-if="!empty">
			<base-typography
				class="mt-2"
				type="small"
				color="dark-grey"
				weight="regular"
				>{{ role }} /</base-typography
			>
			<base-typography
				class="mt-2"
				type="normal"
				color="black"
				weight="bold"
				>{{ name }}</base-typography
			>
			<base-chip class="mt-2" :label="status" />
		</div>
		<div v-else>
			<base-typography
				class="mt-2"
				type="small"
				color="dark-grey"
				weight="regular"
				>Team Player /</base-typography
			>
			<button class="mt-2 flex">
				<base-typography
					class="self-center"
					type="normal"
					color="black"
					weight="bold"
					>Invite Player</base-typography
				>
				<base-icon-button
					class="self-center ml-3"
					icon="/icons/right-chevron.svg"
				/>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String
		},
		img: {
			type: String
		},
		role: {
			type: String,
			default: 'Team Player'
		},
		status: {
			type: String,
			default: () => 'not ready'
		},
		empty: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" scoped>
.img-mask {
	border-radius: 6px;
	width: 140px;
	height: 187px;
	overflow: hidden;
	border: 2px solid $grey;
}
</style>
