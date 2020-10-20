<template>
	<div class="w-full flex justify-between">
		<square-logo class="w-auto" />
		<div class="flex self-center">
			<base-typography
				class="mr-5"
				type="label"
				color="black"
				weight="bold"
				>FIFA 19</base-typography
			>
			<sidebar-logo class="mr-3" />
		</div>
	</div>
</template>

<script>
import SquareLogo from '@/components/Logos/SquareLogo'
import SidebarLogo from '@/components/Logos/SidebarLogo'
export default {
	components: {
		SquareLogo,
		SidebarLogo
	}
}
</script>

<style lang="scss" scoped></style>
