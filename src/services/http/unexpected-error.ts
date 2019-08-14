
export default function (error: any) {
	if (error.response && error.response.status >= 500) {
		error.response.data = Object.assign(
			{ message: 'Ocorreu um erro inexperado.' },
			error.response.data || {}
		)
	}
	return error
}
