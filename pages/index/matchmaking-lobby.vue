<template>
	<div class="flex flex-col">
		<div class="p-5">
			<lobby-nav-bar />
			<hr />
			<lobby-name />
			<lobby-tag game="fifa 19" />
			<lobby-participants-info
				class="mt-5 mb-5"
				:participants="participants"
			/>
			<lobby-settings />
		</div>
		<div class="h-screen"></div>
		<lobby-footer id="lobbyFooter" class="p-5" @click="startSearching" />
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
import LobbyNavBar from '@/components/MatchMaking/Lobby/LobbyNavBar'
import LobbyName from '@/components/MatchMaking/Lobby/LobbyName'
import LobbyTag from '@/components/MatchMaking/Lobby/LobbyTag'
import LobbyFooter from '@/components/MatchMaking/Lobby/LobbyFooter'
import LobbySettings from '@/components/MatchMaking/Lobby/LobbySettings'
import LobbyParticipantsInfo from '@/components/MatchMaking/Lobby/LobbyParticipantsInfo'

export default {
	components: {
		LobbyNavBar,
		LobbyName,
		LobbyTag,
		LobbyFooter,
		LobbySettings,
		LobbyParticipantsInfo
	},
	computed: {
		participants() {
			return [
				{
					name: 'Konstantinos',
					img: '/Person.png',
					role: 'Team Leader',
					status: 'ready',
					rank: ['G', '74']
				}
			]
		}
	},
	mounted() {
		this.setLobby(true)
	},
	methods: {
		...mapMutations({
			setLobby: 'matchmaking/setLobby'
		}),
		startSearching() {
			this.$router.push('matchmaking-lobby-searching')
			this.$nuxt.$emit('start-search')
		}
	}
}
</script>

<style lang="scss" scoped>
#lobbyFooter {
	position: fixed;
	bottom: 0;
}
</style>
