<template>
  <float-label :label="placeholder" :fixed="fixedPlaceholder || disabled">
    <el-input
			:type="type"
			:name="name"
			:value="value"
			:clearable="clearable"
			:disabled="disabled"
			:placeholder="fixedPlaceholder || disabled ? '' : placeholder"
			@input="setInputValue">

			<el-button v-if="hasButton" slot="append" icon="el-icon-plus" @click="$emit('click')"/>
		</el-input>
  </float-label>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
	props: {
		name: { type: String,	default: ''	},
		type: { type: String, default: 'text' },
		value: { default: '' },
		disabled: { type: Boolean, default: false },
		valueType: { type: String, default: 'text' },
		clearable: { type: Boolean, default: false },
		hasButton: { type: Boolean, default: false },
		placeholder: { type: String, default: '' },
		fixedPlaceholder: { type: Boolean, default: false },
	}
})
export default class CustomInput extends Vue {
	setInputValue(event) {
		switch (this.$props.valueType) {
			case 'number':
				this.$emit('input',  event ? +event : '')
				break;

			default:
				this.$emit('input', event)
				break;
		}
	}
}
</script>
