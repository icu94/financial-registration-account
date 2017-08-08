import Vue from 'vue'
import Router from 'vue-router'

const FirstStep = resolve => require(['@/views/FirstStep'], resolve)

const UploadIDCard = resolve => require(['@/views/UploadIDCard'], resolve)

const UploadBank = resolve => require(['@/views/UploadBank'], resolve)

const SecondStep = resolve => require(['@/views/SecondStep'], resolve)

const ThirdStep = resolve => require(['@/views/ThirdStep'], resolve)

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'FirstStep',
			component: FirstStep
		},
		{
			path: '/idcard',
			name: 'UploadIDCard',
			component: UploadIDCard
		},
		{
			path: '/bank',
			name: 'UploadBank',
			component: UploadBank
		},
		{
			path: '/secondstep',
			name: 'SecondStep',
			component: SecondStep
		},
		{
			path: '/thirdstep',
			name: 'ThirdStep',
			component: ThirdStep
		}
	]
})
