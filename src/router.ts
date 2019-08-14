import Vue from 'vue'
import Router from 'vue-router'

const page = (page: string) => () => import(`@/pages/${page}.vue`)

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			component: page('Main'),
			meta: { requiresAuth: true },
			children: [
			{
				path: '/',
				name: 'home',
				alias: ['/home'],
				component: page('main/Home')
			}, {
				path: '/user-settings',
				name: 'user.settings',
				component: page('main/UserSettings')
			}, {
				path: '/checkout',
				component: page('main/Checkout'),
				children: [
					{
						path: '/checkout',
						name: 'checkout',
						component: page('main/checkout/List')
					},
					{
						path: '/checkout/:checkoutId',
						name: 'checkout.item',
						component: page('main/checkout/Item')
					}
				]
			}, {
				path: '/inventory',
				component: page('main/Inventory'),
				children: [
					{
						path: '/inventory',
						name: 'inventory',
						component: page('main/inventory/List')
					},
					{
						path: '/inventory/new',
						name: 'inventory.new',
						component: page('main/inventory/New')
					},
					{
						path: '/inventory/:inventoryId',
						name: 'inventory.item',
						component: page('main/inventory/Item')
					}
				]
			}, {
				path: '/service-orders',
				component: page('main/ServiceOrders'),
				children: [
					{
						path: '/service-orders',
						name: 'service.orders',
						component: page('main/service-orders/List')
					},
					{
						path: '/service-orders/:OSID',
						name: 'service.orders.index',
						component: page('main/service-orders/Index')
					},
					{
						path: '/service-orders/:OSID/overview',
						name: 'service.orders.overview',
						component: page('main/service-orders/Overview')
					}
				]
			}
		]}, {
			path: '/login',
			name: 'auth',
			alias: ['/logout'],
			component: page('Auth'),
			meta: { guest: true }
		}, {
			path: '/*',
			name: 'notFound',
			component: page('NotFound')
		}
	]
})

router.beforeEach((to: any, from: any, next: any) => {
	const hasMeta = (type: string) => to.matched.some((record: any) => record.meta[type])
	const wmsauth = sessionStorage.getItem('wmsauth') || ''

	if(to.path.endsWith('/logout')) sessionStorage.removeItem('wmsauth')

	if(hasMeta('requiresAuth') && wmsauth === '') next({ name: 'auth' })
	// params: { nextUrl: to.fullPath }

	if(hasMeta('guest') && wmsauth !== '') next({ name: 'home'})

	next()
})

export default router
