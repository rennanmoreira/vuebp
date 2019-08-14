export default function (error: any, wmsauth: any) {
	if ((error.request || {}).status === 401 && wmsauth) {
		sessionStorage.removeItem('wmsauth')
		location.reload()
	}
	return error
}
