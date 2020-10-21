<template>
	<div class="flex w-full">
		<base-typography
			class="w-2/5 self-center"
			type="small"
			weight="bold"
			color="black"
			>{{ name }}</base-typography
		>
		<base-typography
			class="w-2/5 self-center"
			type="small"
			weight="regular"
			color="black"
			>{{ value }}</base-typography
		>
		<base-icon-button
			class="w-1/5 flex justify-end"
			icon="/icons/down-arrow.svg"
		/>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String
		},
		value: {
			type: String
		}
	}
}
</script>

<style lang="scss" scoped></style>
