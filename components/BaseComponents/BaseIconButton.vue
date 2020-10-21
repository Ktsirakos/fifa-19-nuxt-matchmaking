<template>
	<button class="w-auto h-auto" @click="$emit('click')">
		<img :class="getColor" :src="icon" />
	</button>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			required: true
		},
		color: {
			type: String
		}
	},
	computed: {
		getColor() {
			return `${this.color}`
		}
	}
}
</script>

<style lang="scss" scoped>
.black {
	filter: brightness(0);
}
</style>
