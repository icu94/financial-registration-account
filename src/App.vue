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

	#app {
		height: 100%;
		background-image: url("./assets/bg.png");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
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
</style>
