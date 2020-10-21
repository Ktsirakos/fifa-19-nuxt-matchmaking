<template>
	<div class="flex flex-wrap">
		<lobby-participant
			v-for="par in participants"
			:key="par.name"
			class="mr-5"
			:img="par.img"
			:name="par.name"
			:role="par.role"
			:status="par.status"
		/>
		<lobby-participant
			v-for="i in remainningSlots"
			:key="i"
			:empty="true"
		/>
	</div>
</template>

<script>
import LobbyParticipant from './LobbyParticipant'
export default {
	components: {
		LobbyParticipant
	},
	props: {
		participants: {
			type: Array,
			default: () => []
		},
		slots: {
			type: Number,
			default: 2
		}
	},
	computed: {
		remainningSlots() {
			if (this.participants.length > this.slots) return []
			else {
				const list = new Array(this.slots - this.participants.length)
				return list
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>
