import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/models/store'

// Modules
import { texts } from '@/vuex-modules/texts'
import { checkout } from '@/vuex-modules/checkout'
import { serviceOrders } from '@/vuex-modules/serviceOrders'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
	modules: {
		texts,
		checkout,
		serviceOrders
	},
	strict: process.env.NODE_ENV !== 'production'
}

export default new Vuex.Store<RootState>(store)
