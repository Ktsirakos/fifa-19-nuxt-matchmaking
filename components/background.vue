<template>
	<div id="background--container">
		<div class="overlay w-full">
			<slot></slot>
		</div>
		<div v-if="searching" class="inner-box-primary"></div>
		<div v-else class="inner-box-black"></div>
		<img :src="image" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	props: {
		image: {
			type: String,
			default: '/Image.png'
		}
	},
	data() {
		return {
			searching: true
		}
	},
	computed: {
		...mapGetters({
			searching: 'matchmaking/searching'
		})
	},
	created() {
		this.$nuxt.$on('found-match', () => {
			this.searching = false
		})

		this.$nuxt.$on('start-search', () => {
			this.searching = true
		})
	},
	beforeDestroy() {
		this.$nuxt.$off('found-match')
		this.$nuxt.$off('start-search')
	}
}
</script>

<style lang="scss" scoped>
#background--container {
	height: 100vh;
	width: 100vw;
	background: $bg;
	position: relative;
	overflow: hidden;

	.inner-box-primary {
		position: absolute;
		min-width: 90vw;
		height: 637px;
		left: 0px;
		top: 105px;
		background: $primary;
	}

	.inner-box-black {
		position: absolute;
		min-width: 90vw;
		height: 637px;
		left: 0px;
		top: 105px;
		background: $black;
	}

	img {
		position: absolute;
		top: 10%;
		left: 40px;
		mix-blend-mode: multiply;
		opacity: 0.8;
		z-index: 0;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
}
</style>
