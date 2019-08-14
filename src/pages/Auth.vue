<template>
	<div class="login-page flex">
		<div class="box grow scrollable align-vertical side-box box-left">
			<div class="align-vertical-middle wrapper text-center">
				<img class="image-logo" src="@/assets/images/efficacy_logo.png" alt="logo-left"/>
			</div>
		</div>
		<div class="box grow scrollable align-vertical side-box box-right">
			<div class="align-vertical-middle wrapper">
				
				<form v-loading="authInProgress" class="form-box" @submit.prevent="onAuth" novalidate>
					<h2>{{labels.title}}</h2>
					
					<CustomInput
						clearable
						class="styled"
						type="email"
						v-model="login.username"
						:placeholder="labels.inputs.username">
					</CustomInput>

					<CustomInput
						clearable						
						class="styled"
						type="password"
						v-model="login.password"
						:placeholder="labels.inputs.password">
					</CustomInput>

					<CustomSelect
						class="styled"
						propValue="code"
						v-model="languageSelected"
						:options="languages"
						:placeholder="labels.inputs.select"
						:label="item => `${item.idiom} (${item.country})`"
						@input="setLanguage($event)">
					</CustomSelect>

					<div class="message-status failure">
						<span v-if="hasMessageError">{{labels.messageInvalidUser}}</span>
					</div>

					<div class="flex text-center center pt-10 pb-10">			
						<el-button plain size="large" native-type="submit" class="custom-btn filled-btn pulse animated themed">
							{{labels.signIn}}
						</el-button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { getToken } from '@/services/user'
import { AuthToken } from '@/models/user'

@Component
export default class Auth extends Vue {
	login = new AuthToken()

	authInProgress = false
	hasMessageError = false
	languageSelected = localStorage.getItem('language')

	@Getter('texts/auth') labels
	@Getter('texts/languages') languages
	@Action('texts/setLanguage') setLanguage

	onAuth() {
		this.hasMessageError = false
		this.authInProgress = true

		getToken(this.login)
			.then(this.onAuthSuccess)
			.catch(this.onAuthFailure)
	}

	onAuthSuccess(success) {
		sessionStorage.setItem('wmsauth', success.data.token)
		this.$router.push({ name: 'home' })
		this.authInProgress = false
	}

	onAuthFailure() {
		this.hasMessageError = true
		this.authInProgress = false
	}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/_variables';

.login-page {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 0 !important;

	.side-box {
		.wrapper {
			width: 100%;
			box-sizing: border-box;
			padding: 20px;
		}
	}

	.box-left {
		background-image: url('~@/assets/images/bg_login.jpg');
		background-size: cover;
		background-position: 50% 50%;

		.wrapper {
			.image-logo {
				width: 90%;
				max-width: 400px;
				margin-top: 20px;
			}

		}
	}
	.box-right {
		background: white;
		color: var(--background-color);
	}
	
	.form-box {
		width: 100%;
		max-width: 450px;
		padding: 30px;
		box-sizing: border-box;
		margin: 20px auto;

		a {
			font-size: 14px;
			color: $text-color-efficacy;
			text-decoration: none;
			font-weight: 500;
		}
		h2{
			color:#2560A8;
			text-align: center;
			margin-bottom: 30px;
		}

		.image-logo {
			width: 80px;
			margin: 0px auto;
			margin-bottom: 70px;
			display: block;
		}
	}
	
	.message-status {
		text-align: center;
		margin: 10px 2px;
	}
}

@media (max-width: 1200px) {
	.login-page {
			.box-left {
				.wrapper {
					.h-big {
						font-size: 50px;
				}
			}
		}
	}
}

@media (max-width: 900px) {
	.login-page {
		.box-left {
			.wrapper {
				.h-big {
					font-size: 30px;
				}
			}
		}
	}
}
@media (max-width: 768px) {
	.login-page {
		display: block !important;
		overflow: auto;
		background-color:#fff;
		
		.side-box {
			display: block;
		}
		.box-left{
			background-image: none;
			background-color: $text-color-white;
			.wrapper{
				.image-logo{
					width: 40%;
				}
			}
		}
		.form-box {
			margin-top: 0px;
			padding-top: 0px;
			margin-bottom: 0px;
			padding-bottom: 0px;
		}
	}
}

// .el-select .el-input .el-select__caret.is-reverse {
//   transform: rotateZ(180deg) !important;
//   -webkit-transform: rotateZ(180deg) !important;
// }
</style>