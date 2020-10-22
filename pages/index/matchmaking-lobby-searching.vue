<template>
	<div class="matchmaking-lobby-searching flex">
		<match-making-info :searching="searching" @cancel="goToLobby" />
		<black-box>
			<base-icon-button icon="/icons/left-arrow.svg" @click="goToLobby" />
		</black-box>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
import BlackBox from '@/components/BlackBox'
import MatchMakingInfo from '@/components/MatchMaking/MatchMakingInfo'
export default {
	transition: {
		name: 'appear',
		mode: 'out-in'
	},
	components: {
		BlackBox,
		MatchMakingInfo
	},
	data() {
		return {
			searching: true,
			timeOut: undefined
		}
	},
	mounted() {
		this.$toast.show(
			'Automatic timer to simulate finding a match. Please wait 4 seconds',
			{
				duration: 2500,
				position: 'bottom-center'
			}
		)

		this.setLobby(false)

		// Timeout  for testing purposes which finds a match in 3 seconds
		this.timeOut = setTimeout(() => {
			this.searching = false
			this.$nuxt.$emit('found-match')
		}, 4000)
	},
	methods: {
		...mapMutations({
			setLobby: 'matchmaking/setLobby'
		}),
		goToLobby() {
			clearTimeout(this.timeOut)
			this.$router.push('matchmaking-lobby')
		}
	}
}
</script>

<style lang="scss" scoped>
.matchmaking-lobby-searching {
	position: relative;
}
</style>
