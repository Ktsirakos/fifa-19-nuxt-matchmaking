export const state = () => ({
	searching: true,
	lobby: true,
	queue: {
		size: 4001
	}
})
export const mutations = {
	setSearching(state, payload) {
		state.searching = payload
	},
	setLobby(state, payload) {
		state.lobby = payload
	}
}

export const getters = {
	searching: state => state.searching,
	lobby: state => state.lobby,
	queue: state => state.queue
}
