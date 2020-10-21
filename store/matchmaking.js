export const state = () => ({
	searching: false,
	queue: {
		size: 4001
	}
})
export const mutations = {
	setSearching(state, payload) {
		state.searching = payload
	}
}

export const getters = {
	searching: state => state.searching,
	queue: state => state.queue
}
