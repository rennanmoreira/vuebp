export default function (error: any) {
	// TODO: Resolver para emitir notificacoes que o servidor esta fora de serviço
	if (error.request.status) {
		error.response = {
			status: 500,
			data: {
				message: 'Não foi possivel contactar o servidor.'
			}
		}
	}

	return error
}
