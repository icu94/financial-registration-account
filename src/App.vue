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

	.tip {
		width: 22rem;
		height: 2rem;
		line-height: 2rem;
		margin: 1rem auto;
		&:after {
			display: table;
			content: ' ';
			clear: both;
		}
		img {
			width: 2rem;
			height: 2rem;
			float: left;
		}
		span {
			height: 2rem;
			line-height: 2rem;
			font-size: 1.6rem;
			color: #555;
			float: left;
			margin-left: 2rem;
		}
	}

	.next-btn {
		position: absolute;
		left: 50%;
		bottom: 9%;
		margin-left: -10rem;
		background: #2979ff;
		border-radius: 5rem;
		width: 20rem;
		height: 5rem;
		line-height: 5rem;
		text-align: center;
		font-size: 1.8rem;
		color: #fff;
	}

	.prev-btn {
		position: absolute;
		right: 8%;
		bottom: 10.5%;
		font-size: 1.2rem;
		padding: .5rem 0;
		color: #555;
		border-bottom: .2rem solid #2979ff;
	}
</style>
