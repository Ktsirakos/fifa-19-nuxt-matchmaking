<template>
	<div id="background--container">
		<div class="overlay w-full">
			<slot></slot>
		</div>

		<!-- IN CASE WE ARE NOT IN THE LOBBY, CHANGE THE 
		BACKGROUND COLOR ACCORDING TO SEARCHING STATUS -->
		<div v-if="searching && !lobby" class="inner-box-primary"></div>
		<div v-if="!searching && !lobby" class="inner-box-black"></div>

		<!-- IN CASE WE ARE AT THE LOBBY ADD A CLASS WHICH MOVED THE IMAGE TOP RIGHT -->
		<img :class="getClass" :src="image" />
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
	props: {
		image: {
			type: String,
			default: '/Image.png'
		}
	},
	computed: {
		...mapGetters({
			searching: 'matchmaking/searching',
			lobby: 'matchmaking/lobby'
		}),
		getClass() {
			let classes = ''
			if (this.lobby) {
				classes = 'lobby-background'
			} else {
				classes = ''
			}
			return classes
		}
	},
	created() {
		// Observable for changing the background once a match was found
		// Making it black
		this.$nuxt.$on('found-match', () => {
			this.setSearching(false)
		})

		// Observable for changing the background once a match was found
		// Making it primary
		this.$nuxt.$on('start-search', () => {
			this.setSearching(true)
		})
	},
	beforeDestroy() {
		this.$nuxt.$off('found-match')
		this.$nuxt.$off('start-search')
	},
	methods: {
		...mapMutations({
			setSearching: 'matchmaking/setSearching'
		})
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
		animation: animation-down 0.7s;
	}

	.lobby-background {
		top: -40%;
		left: 40%;
		animation: animation-up 0.7s;
	}

	@keyframes animation-up {
		0% {
			top: 10%;
			left: 40px;
		}
		100% {
			top: -40%;
			left: 40%;
		}
	}

	@keyframes animation-down {
		100% {
			top: 10%;
			left: 40px;
		}
		0% {
			top: -40%;
			left: 40%;
		}
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
}
</style>
