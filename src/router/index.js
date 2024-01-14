import { createRouter, createWebHistory } from "vue-router"

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
	},
	{
		path: "/blog",
		name: "blog",
		component: () => import(/* webpackChunkName: "blog" */ "../views/BlogView.vue")
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
