<template>
	<p
		:style="customColor ? `color: ${customColor}` : ''"
		class="typography-container"
		:class="getTypographyClass"
	>
		<slot></slot>
	</p>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'normal',
			validator: value => {
				return [
					'header',
					'normal',
					'subtitle',
					'subtitle-small',
					'small',
					'label'
				].includes(value)
			}
		},
		color: {
			type: String,
			default: 'primary'
		},
		align: {
			type: String,
			default: 'left'
		},
		weight: {
			type: String,
			default: 'regular',
			validator: value => {
				return ['bold', 'regular', 'medium', 'light'].includes(value)
			}
		},
		customColor: {
			type: String
		}
	},
	computed: {
		getTypographyClass() {
			return `${this.type} ${this.color} align-${this.align} ${this.weight}`
		}
	}
}
</script>

<style lang="scss" scoped>
.typography-container {
	color: $black;
	font-size: 16px;

	&.white {
		color: $white;
	}

	&.primary {
		color: $primary;
	}

	@import '@/assets/scss/components/BaseComponents/_base-typography-alignment.scss';
	@import '@/assets/scss/components/BaseComponents/_base-typography-font-weight.scss';
	@import '@/assets/scss/components/BaseComponents/_base-typography-font-sizes.scss';
}
</style>
