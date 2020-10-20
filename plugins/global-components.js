import Vue from 'vue'
import BaseButton from '@/components/BaseComponents/BaseButton'
import BaseTypography from '@/components/BaseComponents/BaseTypography'
import BaseSelect from '@/components/BaseComponents/BaseSelect'
import BaseChip from '@/components/BaseComponents/BaseChip'
import BaseIconButton from '@/components/BaseComponents/BaseIconButton'
const components = {
	BaseButton,
	BaseTypography,
	BaseChip,
	BaseSelect,
	BaseIconButton
}

Object.entries(components).forEach(([name, component]) => {
	Vue.component(name, component)
})
