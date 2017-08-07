<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style lang="scss">
	* {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	html, body {
		font-size: 20px;
		height: 100%;
		font-family: 'PingFang SC';
	}

	body {
		width: 750px;
		max-width: 750px;
		padding: 0px;
		margin: 0px auto;
		overflow: hidden;
		position: relative;
	}

	a {
		color: inherit;
		display: block;
		text-decoration: none;
	}

	#app {
		height: 100%;
		background-image: url("./assets/bg.png");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}

	.thumbnail-img {
		max-width: 100%;
		height: auto;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
	}

	.icon {
		width: 2rem;
		height: 2rem;
		line-height: 2rem;
		display: inline-block;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.iadd {
		background-image: url("./assets/icons/add.svg");
	}

	.next-btn {
		position: absolute;
		left: 50%;
		bottom: 10%;
		margin-left: -10rem;
		background: #2979ff;
		border-radius: 5rem;
		width: 20rem;
		height: 5.2rem;
		line-height: 5.2rem;
		text-align: center;
		font-size: 2.2rem;
		color: #fff;
	}

	.prev-btn {
		position: absolute;
		right: 5%;
		bottom: 11.5%;
		font-size: 1.6rem;
		padding: .5rem 0;
		color: #555;
		border-bottom: .2rem solid #2979ff;
	}
</style>
