import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import './styles/global.scss'
import './registerServiceWorker'
import VueFilterDateFormat from 'vue-filter-date-format'

// IMPORTS: Template Pragmatic
import 'flex.box'
import Vuebar from 'vuebar'
import VueFloatLabel from 'vue-float-label'

// IMPORTS: ElementUI
import lang from 'element-ui/lib/locale/lang/pt-br'
import locale from 'element-ui/lib/locale'
import {
	Badge,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Checkbox,
	CheckboxButton,
	CheckboxGroup,
	Col,
	Container,
	DatePicker,
	Dialog,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	Form,
	FormItem,
	Input,
	InputNumber,
	Loading,
	Menu,
	MenuItem,
	MenuItemGroup,
	Message,
	MessageBox,
	Option,
	Progress,
	Radio,
	RadioButton,
	RadioGroup,
	Row,
	Select,
	Submenu,
	Switch,
	Table,
	TableColumn,
	TabPane,
	Tabs,
	Upload,
} from 'element-ui'

// IMPORTS: Custom Components
import CustomIcon from '@/components/shared/CustomIcon.vue'
import CustomInput from '@/components/shared/CustomInput.vue'
import CustomSelect from '@/components/shared/CustomSelect.vue'
import CustomDatePicker from '@/components/shared/CustomDatePicker.vue'
import CustomDialog from '@/components/shared/CustomDialog.vue'

Vue.use(VueFilterDateFormat)

Vue.config.productionTip = false

// USES: Templates Pragmatic
Vue.use(Vuebar)
Vue.use(VueFloatLabel)
Vue.use(Tabs)

// USES: ElementUI
Vue.use(Badge)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Col)
Vue.use(Container)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Loading)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Option)
Vue.use(Progress)
Vue.use(Radio)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Row)
Vue.use(Select)
Vue.use(Submenu)
Vue.use(Switch)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Upload)

locale.use(lang)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

// USES: Custom Components
Vue.component('CustomIcon', CustomIcon)
Vue.component('CustomInput', CustomInput)
Vue.component('CustomSelect', CustomSelect)
Vue.component('CustomDialog', CustomDialog)
Vue.component('CustomDatePicker', CustomDatePicker)

Vue.component('vue-scroll')

Vue.config.keyCodes.f7 = 118

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
