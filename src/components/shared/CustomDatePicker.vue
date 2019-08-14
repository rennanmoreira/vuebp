<template>
  <float-label :label="placeholder" :fixed="fixedPlaceholder || disabled">
		<el-date-picker v-if="!teste"
			unlink-panels
			:type="type"
			:name="name"
			:value="value"
      format="dd/MM/yyyy"
      value-format="yyyy-MM-dd"
			:range-separator="labels.to"
			:end-placeholder="labels.finalDate"
			:start-placeholder="labels.initialDate"
			@input="$emit('input', $event)">
		</el-date-picker>
		<div class="mobile-range-date"  v-if="teste">
			<el-date-picker
				class="date-picker-start"
				type="date"
				v-model="value[0]"
				:placeholder="labels.initialDate">
			</el-date-picker>
			<el-date-picker
				class="date-picker-end"
				type="date"
				v-model="value[1]"
				:placeholder="labels.finalDate">
			</el-date-picker>
		</div>
	</float-label>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({
	props: {
		teste: { type: Boolean, default: false },
		name: { type: String,	default: ''	},
		type: { type: String, default: 'daterange' },
		value: { default: undefined },
		disabled: { type: Boolean, default: false },
		placeholder: { type: String, default: '' },
		rangeSeparator: { type: String, default: 'Até' },
		endPlaceholder: { type: String, default: 'Data final' },
		startPlaceholder: { type: String, default: 'Data inicial' },
		fixedPlaceholder: { type: Boolean, default: false },
	}
})
export default class CustomDatePicker extends Vue {
	@Getter('texts/customDatePicker') labels

	get showPlaceholder() { return this.$props.disabled ? '' : this.$props.placeholder }
}
</script>

<style lang="scss" scoped>
.mobile-range-date {
	display: flex;
	width: 100%;

	.date-picker-start, .date-picker-end {
		width: 50%;
	}

	.date-picker-end {
		.span {
			.el-input__icon .el-icon-date {
				display: none;
			}
		}
	}
}
</style>
