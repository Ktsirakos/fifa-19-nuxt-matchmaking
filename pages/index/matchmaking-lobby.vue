<template>
	<div class="matchmaking-lobby flex">
		<match-making-info :searching="searching" />
		<black-box>
			<base-icon-button icon="/icons/left-arrow.svg" @click="toggle" />
		</black-box>
	</div>
</template>

<script>
import BlackBox from '@/components/BlackBox'
import MatchMakingInfo from '@/components/MatchMaking/MatchMakingInfo'
export default {
	components: {
		BlackBox,
		MatchMakingInfo
	},
	data() {
		return {
			searching: true
		}
	},
	methods: {
		toggle() {
			if (this.searching) {
				this.searching = false
				this.$nuxt.$emit('found-match')
			} else {
				this.searching = true
				this.$nuxt.$emit('start-search')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.matchmaking-lobby {
	position: relative;
}
</style>
