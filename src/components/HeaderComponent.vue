<template>
	<div class="header-wrapper">
		<div class="header-item logo">
			<div class="logo-item">
				<!-- <div class="item-title">Vinayaka Raju S</div> -->
				<!-- <div class="item-sub-title"></div> -->
				<img :src="require('../../public/Images/code-terminal.png')" alt="linkedin" height="80px" width="80px"/>
			</div>
		</div>
		<div class="header-item nav-links">
			<div class="nav-buttons-wrapper">
				<div class="nav-item">
					<router-link :to="{ name: 'home' }">Home</router-link>
				</div>
				<div class="nav-item">
					<router-link :to="{ name: 'blog' }">Blog</router-link>
				</div>
				<div class="nav-item">
					<a :href="'https://github.com/vinayakaraju46'" target="_blank">Github</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.header-wrapper {
	display: flex;
	gap: $gap;
	width: 100%;
	height: 100px;
	padding: calc($gap * 6);
	background-color: hsl(0, 0%, 10%);
	align-items: center;
	.header-item {
		width: calc(100% / 2 - #{$gap});
		display: flex;
		align-items: center;

		.logo-item {
			.item-title {
				font-size: 2rem;
				font-weight: 700;
				color: hsl(0, 0%, 80%);
			}
			.item-sub-title {
				font-size: 1rem;
				font-weight: 400;
				color: hsl(0, 0%, 80%);
			}
		}
		.nav-buttons-wrapper {
			display: flex;
			gap: calc($gap * 2);
			.nav-item {
				font-size: 1.25rem;
				font-weight: 600;

				a {
					text-decoration: none;
					color: hsl(0, 0%, 80%);

					&:hover {
						color: hsl(0, 0%, 95%);
						text-decoration: underline;
					}
				}
			}
		}
		&.nav-links {
			display: flex;
			justify-content: flex-end;
		}
	}
}

@media screen and (max-width: 768px) {
	.header-wrapper {
		padding: calc($gap);

		.header-item {
			.nav-buttons-wrapper {
				gap: calc($gap);
			}
		}
	}
}
</style>
