<template>
	<div class="home">
		<h2 class="text-center">{{labels.welcome + user.Name}}</h2>
		<router-link :to="{ name: 'user.settings' }">{{labels.settings}}</router-link>
		<router-link :to="{ name: 'service.orders' }">{{labels.serviceOrders}}</router-link>
		<router-link :to="{ name: 'checkout' }">{{labels.checkout}}</router-link>
		<router-link :to="{ name: 'inventory' }">{{labels.inventory}}</router-link>
		<router-link to="/logout">{{labels.logout}}</router-link>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getUser } from '@/services/user'
import { Getter } from 'vuex-class'

@Component
export default class Home extends Vue {
	user = {}

	@Getter('texts/home') labels

	created() { getUser().then(i => this.user = i)}
}
</script>

<style lang="scss" scoped>
.home {
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 768px) {
		img {
			width: 40%;
		}
	}
}
.menu {
	position: absolute;
	overflow-y: scroll;
	height: 500px;
}
</style>
