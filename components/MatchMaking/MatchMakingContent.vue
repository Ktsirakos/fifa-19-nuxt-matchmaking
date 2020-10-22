<template>
	<div class="match-making-content-container">
		<base-typography class="mt-3" type="normal" color="white">{{
			contentTitle
		}}</base-typography>
		<base-typography
			class="mt-3"
			type="header"
			weight="bold"
			color="white"
			>{{ title }}</base-typography
		>
		<base-typography class="mt-3" type="subtitle-small" color="white">
			{{ subtitle }}
		</base-typography>

		<div class="mt-5 mb-5"></div>

		<!-- LOBBY PARTICIPANTS -->
		<match-making-lobby-participants :participants="participants" />

		<!-- LOBBY INFORMATION -->
		<div class="flex mt-5">
			<div class="w-1/12 self-center">
				<img class="mr-5" src="/icons/single-line.svg" />
			</div>
			<base-typography type="small" color="white">{{
				caption
			}}</base-typography>
		</div>
	</div>
</template>

<script>
import MatchMakingLobbyParticipants from '@/components/MatchMaking/MatchMakingLobbyParticipants'
export default {
	components: {
		MatchMakingLobbyParticipants
	},
	props: {
		contentTitle: {
			type: String
		},
		title: {
			type: String
		},
		subtitle: {
			type: String
		},
		caption: {
			type: String
		}
	},
	computed: {
		participants() {
			const array = [
				{
					id: 'cmerigunptuiae',
					img: '/Person.png'
				}
			]

			return array
		}
	}
}
</script>

<style lang="scss" scoped>
.match-making-content-container {
	position: absolute;
	top: 130px;
	padding-left: 16px;
	width: 85vw;
}
</style>
