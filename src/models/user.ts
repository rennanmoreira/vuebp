export class AuthToken {
	username: string = ''
	password: string = ''
	minutesToExpire: number = 9999
}

export class User {
	name: string = ''
	email: string = ''
	login: string = ''
	company: string = ''
	department: string = ''
}

export class ChangePassword {
	login: string = ''
	password: string = ''
	changePassword: boolean = true
	updatedBy: number = 0
}
