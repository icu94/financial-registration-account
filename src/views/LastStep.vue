<template>
	<div class="pages">
		<div class="title">温馨提示：</div>
		<p>1，账号和密码已经发送到您的注册手机上，请妥善保管您的交易账号和密码信息（非常重要！）</p>
		<p>2，任何情况下不要把账号和密码泄露给其他人，以确保您的账号和资金安全。</p>
		<p>3，实盘客户端交易软件下载。 立即下载</p>
		<p>4，手机APP交易软件下载。</p>
		<img src="../assets/qr.png">
		<p>软件下载</p>
	</div>
</template>

<script>
	export default {
		name: 'LastStep',
		mounted() {
			document.title = '温馨提示'
		}
	}
</script>

<style scoped lang="scss">
	.pages {
		padding: 2rem;
		text-align: center;
	}
	.title {
		color: #333;
		padding: 2rem;
		font-size: 2.6rem;
		text-align: center;
	}
	p {
		color: #565656;
		text-align: center;
		line-height: 1.8rem;
	}
</style>
