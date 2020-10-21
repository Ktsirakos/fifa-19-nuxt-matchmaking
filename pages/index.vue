<template>
	<background>
		<base-navbar class="w-full" />
		<nuxt-child></nuxt-child>
	</background>
</template>

<script>
import Background from '@/components/background'
import BaseNavbar from '@/components/BaseComponents/BaseNavbar'
export default {
	components: {
		Background,
		BaseNavbar
	},
	mounted() {
		this.$router.push('/matchmaking-lobby')
	}
}
</script>

<style lang="scss" scoped></style>
