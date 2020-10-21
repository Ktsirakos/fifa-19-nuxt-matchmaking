<template>
	<div class="flex flex-col">
		<div class="p-5">
			<lobby-nav-bar />
			<hr />
			<lobby-name />
			<lobby-tag game="fifa 19" />
			<lobby-settings />
		</div>
		<div class="h-screen"></div>
		<lobby-footer id="lobbyFooter" class="p-5" />
	</div>
</template>

<script>
import LobbyNavBar from '@/components/MatchMaking/Lobby/LobbyNavBar'
import LobbyName from '@/components/MatchMaking/Lobby/LobbyName'
import LobbyTag from '@/components/MatchMaking/Lobby/LobbyTag'
import LobbyFooter from '@/components/MatchMaking/Lobby/LobbyFooter'
import LobbySettings from '@/components/MatchMaking/Lobby/LobbySettings'

export default {
	components: {
		LobbyNavBar,
		LobbyName,
		LobbyTag,
		LobbyFooter,
		LobbySettings
	}
}
</script>

<style lang="scss" scoped>
#lobbyFooter {
	position: absolute;
	bottom: 0;
}
</style>
