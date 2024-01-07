module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "/vin-r/" : "/",
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/assets/scss/app.scss";
				`
			}
		}
	}
}
