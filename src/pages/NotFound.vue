<template>
	<div class="not-found">
		<img alt="Efficacy logo" src="@/assets/images/efficacy_logo.png">

		<div>
			<h1>404</h1>

			<h3>{{labels.subTitle}}</h3>

			<router-link :to="{ name: 'home' }">{{labels.backInitial}}</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class NotFound extends Vue {
	@Getter('texts/notFound') labels
}
</script>

<style lang="scss" scoped>
.not-found {
	background: white;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	
	img {
		width: 40vh;
		max-width: 400px;
		margin: 40px;
	}

	div {
		text-align: center;
	}
}
</style>
