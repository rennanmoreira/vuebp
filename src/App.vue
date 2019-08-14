<template>
  <div id="app">
    <slot name="dialog"></slot>
    <router-view/>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component
export default class App extends Vue {
	@Action('texts/setLanguage') setLanguage

	created() { this.setLanguage() }
}
</script>

<style>
#app {
	height: 100%;
}
</style>