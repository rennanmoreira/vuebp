<template v-slot:dialog>
	<el-dialog
		width="30%"
		:title="labels.notAvaialable"
		:visible="visible"
		@update:visible="close">
		<span>{{labels.notAvaialableDescription}}</span>
		<span slot="footer" class="dialog-footer">
			<el-button type="primary" class="custom-btn filled-btn" @click="$emit('update:visible', false)">{{labels.close}}</el-button>
		</span>
	</el-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({
	props: {
		visible: { type: Boolean, default: false },
	}
})
export default class CustomDialog extends Vue {
	@Getter('texts/customDialog') labels

	close() { this.$emit('update:visible', false) }
}
</script>

<style lang="scss">
.el-dialog {
	min-width: 290px;

	.el-dialog__body {
		word-break: break-word;
	}
}
</style>
