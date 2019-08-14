import axios from 'axios'

import networkError from './network-error'
import unexpectedError from './unexpected-error'
import validateUnauthorized from './validate-unauthorized'

const BASE_URL = window.location.hostname === '10.21.1.3' ? process.env.VUE_APP_API_LOCAL : process.env.VUE_APP_API
const API_WMS = BASE_URL + ':50005'
const API_PRINTER = BASE_URL + process.env.VUE_APP_PORT_PRINTER
const API_IDENTITY = BASE_URL + process.env.VUE_APP_PORT_IDENTITY

const createAxios = (baseURL: string) => axios.create({
	baseURL,
	timeout: 60000,
	headers: {
		'Content-Type': 'application/json',
		'Authorization': { toString: () => `Bearer ${sessionStorage.getItem('wmsauth')}` }
	}
})

const interceptAxios = axiosInstance => axiosInstance.interceptors.response.use(
	response => Promise.resolve(response),

	error => Promise.reject(Object.assign(error,
		networkError(error),
		unexpectedError(error),
		validateUnauthorized(error, sessionStorage.getItem('wmsauth'))
	))
)

const HTTP_WMS = createAxios(API_WMS)
const HTTP_PRINTER = createAxios(API_PRINTER)
const HTTP_IDENTITY = createAxios(API_IDENTITY)
const HTTP_IDENTITY_AUTH = createAxios(API_IDENTITY)

interceptAxios(HTTP_WMS)
interceptAxios(HTTP_PRINTER)
interceptAxios(HTTP_IDENTITY)

export {
	HTTP_WMS,
	HTTP_PRINTER,
	HTTP_IDENTITY,
	HTTP_IDENTITY_AUTH
}
