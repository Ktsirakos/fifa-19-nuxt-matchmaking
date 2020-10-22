export const state = () => ({
	settings: {}
})

export const mutations = {
	setSettings(state, payload) {
		state.settings = payload
	}
}

export const getters = {
	settings: state => state.settings
}
