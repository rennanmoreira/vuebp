import { HTTP_IDENTITY, HTTP_IDENTITY_AUTH } from '@/services/http/http-base'

export const getToken = data =>
	HTTP_IDENTITY_AUTH.post('/token', data)
