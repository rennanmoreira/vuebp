<template>
	<svg
		class="custom-icon"
		:style="style"
		:viewBox="viewBox"
		@click="$emit('click', $event)">

		<path :fill="color" :d="path" />
	</svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import mdi from '@/assets/mdi.json'

@Component
export default class CustomInput extends Vue {
	@Prop({ default: 0 }) mt
	@Prop({ default: 0 }) mr
	@Prop({ default: 0 }) mb
	@Prop({ default: 0 }) ml
	@Prop({ default: 24 }) size
	@Prop({ default: '' }) name
	@Prop({ default: '#6F6F6F' }) color
	@Prop({ default: 'pointer' }) cursor

	get path() { return mdi[this.name] }
	get width() { return `width: ${this.size}px;` }
	get style() { return `${this.width}${this.height}${this.margin}${this.cursorType}` }
	get height() { return `height: ${this.size}px;` }
	get margin() { return `margin: ${this.mt} ${this.mr} ${this.mb} ${this.ml};` }
	get viewBox() { return `0 0 24 24`}
	get cursorType() { return `cursor: ${this.cursor};` }
}
</script>
