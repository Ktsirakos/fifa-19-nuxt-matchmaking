<template>
	<background>
		<base-navbar class="w-full" />
		<nuxt-child></nuxt-child>
	</background>
</template>

<script>
import Background from '@/components/background'
import BaseNavbar from '@/components/BaseComponents/BaseNavbar'
import settings from '@/assets/application_configuration.json'
export default {
	components: {
		Background,
		BaseNavbar
	},
	mounted() {
		this.$router.push('/matchmaking-lobby')
		this.$store.commit('application/setSettings', settings)
	}
}
</script>

<style lang="scss" scoped></style>
