<template>
	<button class="w-auto h-auto" @click="$emit('click')">
		<img :src="icon" />
	</button>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped></style>
