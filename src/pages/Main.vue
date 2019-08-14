<template>
	<div class="h-100 w-100">
		<CustomDialog :visible.sync="dialogVisible"/>

		<div class="layout-container flex justify-center h-100 h-100">
			<VerticalNav
				position="left"
				:open-sidebar.sync="collapsedMenu"
				@close-menu="closeMenu">
			</VerticalNav>

			<div class="container flex column box grow w-100">
				<Topbar @click="collapsedMenu = !collapsedMenu"/>

				<div class="page-layout scrollable">
					<transition name="slide-fade">
						<router-view/>
  				</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Topbar from '@/components/layout/Topbar.vue'
import VerticalNav from '@/components/layout/sidebar/VerticalNav.vue'

@Component({
	components: {
		Topbar,
		VerticalNav
	}
})
export default class Main extends Vue {
	collapsedMenu = false
	dialogVisible = false

	closeMenu(event) {
		this.collapsedMenu = false
		if (event === 'notImplemented') {
			this.dialogVisible = true
		}
	}
}
</script>

<style lang="scss">
.page-layout {
	padding: 25px;

	.el-submenu__title {
		color: #2560A8;
	}
}

@media (max-width: 767px) {
	.page-layout {
		padding: 4px 15px 15px;
	}

	h1 {
		font-size: 1.5rem;
	}
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all 0s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(-100px);
  opacity: 0;
}

</style>
