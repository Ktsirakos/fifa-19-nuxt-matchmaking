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
		this.setLobby(false)
		this.timeOut = setTimeout(() => {
			this.toggle()
		}, 3000)
	},
	methods: {
		...mapMutations({
			setLobby: 'matchmaking/setLobby'
		}),
		toggle() {
			if (this.searching) {
				this.searching = false
				this.$nuxt.$emit('found-match')
			} else {
				this.searching = true
				this.$nuxt.$emit('start-search')
			}
		},
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
