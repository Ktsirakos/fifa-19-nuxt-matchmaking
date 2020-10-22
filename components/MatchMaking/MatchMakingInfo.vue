<template>
	<div class="matchmaking-container">
		<transition name="fade">
			<match-making-content
				v-if="searching"
				content-title="Matchmaking Lobby"
				title="Searching for compatible opponents"
				subtitle="We’re searching our database of players to pair you with an opponent of similar skill"
				caption="4000 in queue"
			/>
		</transition>
		<transition name="fade">
			<match-making-content
				v-if="!searching"
				content-title="Matchmaking Lobby"
				title="A match has been found for you!"
				subtitle="We’ve found a compatible opponent for you to play Squad Battles with in FIFA 19"
				caption="By tapping accept, you agree to play a match that may last for up to 30 minutes."
			/>
		</transition>
		<footer-bar
			:max-time-to-accept="settings.maxTimeToAccept"
			:searching="searching"
			@timer-ended="$emit('timer-ended')"
			@cancel="$emit('cancel')"
		/>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import FooterBar from '@/components/MatchMaking/FooterBar'
import MatchMakingContent from '@/components/MatchMaking/MatchMakingContent'
export default {
	components: {
		FooterBar,
		MatchMakingContent
	},
	props: {
		searching: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		...mapGetters({
			settings: 'application/settings'
		})
	}
}
</script>

<style lang="scss" scoped>
.matchmaking-container {
	position: absolute;
	width: 100vw;
	height: 637px;
}

.matchmaking-footer-bar {
	position: absolute;
	top: 92%;
	right: 0;
	width: 294px;
	height: 89px;

	&.black {
		background: $black;
	}

	&.primary {
		background: $primary;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
