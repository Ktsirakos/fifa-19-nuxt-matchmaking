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
		/**
		 * The type of the typography
		 * Responsible for the font-size and line-height
		 */
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
		/**
		 * Responsible for the color of the typography
		 */
		color: {
			type: String,
			default: 'primary'
		},
		/**
		 * Responsible for the alignment
		 */
		align: {
			type: String,
			default: 'left'
		},
		/**
		 * Responsible for the weight of the typography
		 * font-weight => bold, medium,normal,light
		 */
		weight: {
			type: String,
			default: 'regular',
			validator: value => {
				return ['bold', 'regular', 'medium', 'light'].includes(value)
			}
		},
		/**
		 * In case the user needs to register a new color once
		 * You can use this variable!
		 */
		customColor: {
			type: String
		}
	},
	computed: {
		/**
		 * Function which assignes the classes according to props
		 */
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
