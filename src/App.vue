<template>
	<header-component />
	<div class="body-item">
		<router-view />
	</div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue"

export default {
	data() {
		return {}
	},
	components: {
		HeaderComponent
	}
}
</script>

<style lang="scss">
#app {
	height: 100%;
	font-family: Calibri, Roboto, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

html,
body {
	height: 100%;
	font-size: 16px;
	background: hsl(0, 0%, 10%);
}

.body-item {
	padding: calc($gap * 3);
	margin: 0 calc($gap * 30) 0;
	background: hsl(0, 0%, 10%);
}

@media (max-width: 768px) {
	.body-item {
		padding: calc($gap * 2);
		margin: 0 0 0;
	}
}
</style>
