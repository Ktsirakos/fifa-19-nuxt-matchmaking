<template>
	<div id="background--container">
		<div class="overlay w-full">
			<slot></slot>
		</div>

		<!-- IN CASE WE ARE NOT IN THE LOBBY, CHANGE THE 
		BACKGROUND COLOR ACCORDING TO SEARCHING STATUS -->
		<div v-if="searching && !lobby" class="inner-box-primary"></div>
		<transition name="primary-to-black">
			<div v-if="!searching && !lobby" class="inner-box-black"></div>
		</transition>

		<!-- IN CASE WE ARE AT THE LOBBY ADD A CLASS WHICH MOVED THE IMAGE TOP RIGHT -->
		<transition :key="lobby" name="background-photo-animation">
			<img :class="getClass" :src="image" />
		</transition>
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
				classes = 'lobby-background-up'
			} else {
				classes = 'lobby-background-down'
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
