<template>
	<float-label :label="placeholder" :fixed="fixedPlaceholder || disabled">
		<el-select

			class="w-100"
			:value="value"
			:disabled="disabled"
			:multiple="multiple"
			:clearable="clearable"
			:collapse-tags="collapseTags"
			:placeholder="fixedPlaceholder || disabled ? '' : placeholder"
			@input="$emit('input', $event)">

			<el-option
				v-for="item in options"
				:key="itemValue(item)"
				:value="itemValue(item)"
				:label="fixLabel(item)">
			</el-option>
		</el-select>
	</float-label>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
	props: {
		name: { type: String,	default: ''	},
		value: { default: undefined },
		label: { type: Function, default: item => item },
		options: { type: Array, default: [] },
		multiple: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false },
		clearable: { type: Boolean, default: false },
		propValue: { type: String, default: '' },
		placeholder: { type: String, default: '' },
		collapseTags: { type: Boolean, default: false },
		fixedPlaceholder: { type: Boolean, default: false },
	}
})
export default class CustomSelect extends Vue {

	fixLabel(item) {
		if (this.$props.collapseTags && this.$props.value && this.$props.value.includes(item.ID)) {
			return `${this.$props.label(item).substring(0, 8)}...`
		}

		return this.$props.label(item)
	}

	itemValue(item) { return this.$props.propValue === '' ? item : item[this.$props.propValue] }
}
</script>
