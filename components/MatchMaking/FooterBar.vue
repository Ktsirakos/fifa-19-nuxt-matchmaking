<template>
	<!-- <div v-if="searching"> -->
	<div
		:class="searching ? 'black' : 'primary'"
		class="matchmaking-footer-bar flex p-5"
	>
		<base-typography class="w-2/3 self-center" type="label" color="white">{{
			searching ? 'Searching...' : 'Accept'
		}}</base-typography>
		<div v-if="searching" class="w-1/3 flex justify-between self-center">
			<base-typography type="label" color="white">1:45</base-typography>
			<base-icon-button icon="/icons/x.svg"></base-icon-button>
		</div>
		<div v-else class="w-1/3 flex justify-between self-center">
			<base-typography type="label" color="white">-0:59</base-typography>
			<base-icon-button icon="/icons/right-arrow.svg"></base-icon-button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		searching: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" scoped></style>
