<template>
	<div class="flex flex-col">
		<hr />
		<div v-for="set in settings" :key="set.name">
			<base-select
				class="mt-2 mb-2"
				:value="set.value"
				:name="set.name"
			/>
			<hr />
		</div>
	</div>
</template>

<script>
import settingsObject from './settings.json'
export default {
	data() {
		return {
			settings: settingsObject
		}
	}
}
</script>

<style lang="scss" scoped></style>
