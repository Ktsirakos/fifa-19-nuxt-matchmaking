<template>
	<!-- <div v-if="searching"> -->
	<div
		:class="searching ? 'black' : 'primary'"
		class="matchmaking-footer-bar flex p-5"
	>
		<base-typography class="w-2/3 self-center" type="label" color="white">{{
			searching ? 'Searching...' : 'Accept'
		}}</base-typography>

		<!-- IN CASE OF SEARCHING FOR A MATCH -->
		<div v-if="searching" class="w-1/3 flex justify-between self-center">
			<base-typography type="label" color="white">{{
				getTimeElapsed
			}}</base-typography>
			<base-icon-button
				icon="/icons/x.svg"
				@click="$emit('cancel')"
			></base-icon-button>
		</div>

		<!-- IN CASE OF MATCH FOUND -->
		<transition name="black-to-primary">
			<div
				v-if="!searching"
				class="w-1/3 flex justify-between self-center"
			>
				<base-typography type="label" color="white"
					>-{{ getTimeElapsed }}</base-typography
				>
				<base-icon-button
					icon="/icons/right-arrow.svg"
					@click="$router.push('/matchmaking-lobby')"
				></base-icon-button>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		searching: {
			type: Boolean,
			default: false
		},
		maxTimeToAccept: {
			type: Number,
			default: 60
		}
	},
	data() {
		return {
			timeElapsed: {
				minutes: 0,
				seconds: 0
			},
			now: undefined,
			timingInterval: undefined
		}
	},
	computed: {
		getTimeElapsed() {
			if (this.timeElapsed.seconds < 10) {
				return `${this.timeElapsed.minutes}:0${this.timeElapsed.seconds}`
			} else {
				return `${this.timeElapsed.minutes}:${this.timeElapsed.seconds}`
			}
		}
	},
	watch: {
		searching(newValue, oldValue) {
			if (!newValue) {
				clearInterval(this.timingInterval)
				this.startReverseCounting()
			}
		}
	},
	mounted() {
		this.startCounting()
	},
	beforeDestroy() {
		clearInterval(this.timingInterval)
	},
	methods: {
		startCounting() {
			this.now = new Date()
			this.timingInterval = setInterval(() => {
				const diff = new Date() - this.now
				this.timeElapsed.seconds = Math.floor(diff / 1000)
				if (this.timeElapsed.seconds >= 60) {
					this.now = new Date()
					this.timeElapsed.minutes++
				}
			}, 1000)
		},
		startReverseCounting() {
			this.timeElapsed.minutes = Math.floor(this.maxTimeToAccept / 60)
			this.timeElapsed.seconds =
				this.maxTimeToAccept - this.timeElapsed.minutes * 60

			this.timingInterval = setInterval(() => {
				this.timeElapsed.seconds = this.timeElapsed.seconds - 1
				if (this.timeElapsed.seconds < 0) {
					this.timeElapsed.minutes--
					this.timeElapsed.seconds = 59

					if (this.timeElapsed.minutes === -1) {
						this.$emit('timer-ended')
						clearInterval(this.timingInterval)
						this.$toast.show(
							'You were returned to lobby because of not accepting a match',
							{ duration: 1000 }
						)
					}
				}
			}, 1000)
		}
	}
}
</script>

<style lang="scss" scoped></style>
