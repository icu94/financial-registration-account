import Vue from 'vue'
import Router from 'vue-router'

const FirstStep = resolve => require(['@/views/FirstStep'], resolve)

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'FirstStep',
			component: FirstStep
		}
	]
})
