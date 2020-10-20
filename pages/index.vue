<template>
	<background>
		<base-typography
			class="w-screen"
			align="right"
			type="header"
			color="white"
			weight="bold"
			>Test</base-typography
		>
		<base-typography
			class="w-screen"
			align="right"
			type="subtitle"
			color="white"
			>Test</base-typography
		>
		<base-typography
			class="w-screen"
			align="center"
			type="normal"
			color="white"
			>Test</base-typography
		>
		<base-typography
			class="w-screen"
			align="center"
			type="small"
			color="white"
			weight="light"
			>Test</base-typography
		>
	</background>
</template>

<script>
import Background from '@/components/background'
export default {
	components: {
		Background
	}
}
</script>

<style lang="scss" scoped></style>
