import Vue from 'vue'
import Router from 'vue-router'

const FirstStep = resolve => require(['@/views/FirstStep'], resolve)

const UploadIDCard = resolve => require(['@/views/UploadIDCard'], resolve)

const UploadBank = resolve => require(['@/views/UploadBank'], resolve)

const SecondStep = resolve => require(['@/views/SecondStep'], resolve)

const ThirdStep = resolve => require(['@/views/ThirdStep'], resolve)

const FourthStep = resolve => require(['@/views/FourthStep'], resolve)

const FifthStep = resolve => require(['@/views/FifthStep'], resolve)

const SixthStep = resolve => require(['@/views/SixthStep'], resolve)

const SeventhStep = resolve => require(['@/views/SeventhStep'], resolve)

const FinishStep = resolve => require(['@/views/FinishStep'], resolve)

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
		},
		{
			path: '/fourthstep',
			name: 'FourthStep',
			component: FourthStep
		},
		{
			path: '/fifthstep',
			name: 'FifthStep',
			component: FifthStep
		},
		{
			path: '/sixthstep',
			name: 'SixthStep',
			component: SixthStep
		},
		{
			path: '/seventhstep',
			name: 'SeventhStep',
			component: SeventhStep
		},
		{
			path: '/finish',
			name: 'FinishStep',
			component: FinishStep
		}
	]
})
