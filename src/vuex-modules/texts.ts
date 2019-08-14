import Vue from 'vue'
import { Module, MutationTree, ActionTree } from 'vuex'
import { RootState, Texts } from '@/models/store'
import VueFilterDateFormat from 'vue-filter-date-format'
// import ElementUI from 'element-ui/lib/locale'

const state = new Texts()

const getters = {
	data: (state: Texts) => state.data, // Mudar para texts
	date: (state: Texts) => state.data.general.date,
	languages: (state: Texts) => state.languages,
	languageSelected: (state: Texts) => state.languageSelected,

	// Pages
	auth: (state: Texts) => state.data.page.auth,
	home: (state: Texts) => state.data.page.main.home,
	notFound: (state: Texts) => state.data.page.notFound,
	userSettings: (state: Texts) => state.data.page.main.userSettings,
	serviceOrders: (state: Texts) => state.data.page.main.serviceOrders,

	checkoutList: (state: Texts) => state.data.page.main.folders.checkout.list,
	checkoutItem: (state: Texts) => state.data.page.main.folders.checkout.item,

	inventoryList: (state: Texts) => state.data.page.main.folders.inventory.list,
	inventoryItem: (state: Texts) => state.data.page.main.folders.inventory.item,
	inventoryNew: (state: Texts) => state.data.page.main.folders.inventory.new,

	// Components
	topbar: (state: Texts) => state.data.component.layout.topbar,
	customDialog: (state: Texts) => state.data.component.shared.customDialog,
	customDatePicker: (state: Texts) => state.data.component.shared.customDatePicker,

	checkoutAccompaniment: (state: Texts) => state.data.component.checkout.accompaniment,
	checkoutFilters: (state: Texts) => state.data.component.checkout.filters,
	checkoutItemVolume: (state: Texts) => state.data.component.checkout.itemVolume,
	checkoutSummary: (state: Texts) => state.data.component.checkout.summary,
	checkoutVolume: (state: Texts) => state.data.component.checkout.volume,

	serviceOrdersConference: (state: Texts) => state.data.component.serviceOrders.conference,
	serviceOrdersDetails: (state: Texts) => state.data.component.serviceOrders.details,
	serviceOrdersFilters: (state: Texts) => state.data.component.serviceOrders.filters,
	serviceOrdersItems: (state: Texts) => state.data.component.serviceOrders.items,
	serviceOrdersNewConference: (state: Texts) => state.data.component.serviceOrders.newConference,
	serviceOrdersNewMovements: (state: Texts) => state.data.component.serviceOrders.newMovements,
	serviceOrdersMovements: (state: Texts) => state.data.component.serviceOrders.movements,
	serviceOrdersObservations: (state: Texts) => state.data.component.serviceOrders.observations,
	serviceOrdersOverview: (state: Texts) => state.data.component.serviceOrders.overview,
	serviceOrdersSales: (state: Texts) => state.data.component.serviceOrders.sales,
}

const actions: ActionTree<Texts, RootState> = {
	async setLanguage({ state, commit }, language = state.languageSelected.code) {
		await commit('setLanguage', require(`@/texts/${language}.json`))
		commit('setLanguageSelected', language)
		localStorage.setItem('language', language)
		Vue.use(VueFilterDateFormat, state.data.general.date)
		// console.log('elemenent', state.languageSelected.elementUI)
		// ElementUI.use('element-ui/lib/locale/lang/pt-br')
	}
}

const mutations: MutationTree<Texts> = {
	setLanguage(state, data) { state.data = data },
	setLanguageSelected(state, language) {
		state.languageSelected = state.languages.find(({code}) => code === language) || state.languages[0] // pt-BR
	}
}

export const texts: Module<Texts, RootState> = {
	state,
	getters,
	actions,
	mutations,
	namespaced: true
}
