<template>
	<div class="pages">
		<img src="../assets/form7.png">
		<div class="content">
			<div class="title">账号安全保障确认书</div>
			<p>本人/本单位已经认真阅读《关于禁止代客交易的说明》，承诺不将交易账号及密码以任何形式泄露给他人。如违反该通知中的规定，本人/本单位自愿承担由此产生的一切损失。</p>
		</div>
		<div class="tip">
			<img src="../assets/agreed.png">
			<span>我已阅读并同意以上服务</span>
		</div>
		<router-link to="finish" class="next-btn">下一步</router-link>
		<router-link to="sixthstep" class="prev-btn">上一步</router-link>
	</div>
</template>

<script>
	export default {
		name: 'SeventhStep',
		mounted() {
			document.title = '开户注册'
		}
	}
</script>

<style scoped lang="scss">
	.content {
		width: 100%;
		padding: 2rem;
		height: 38rem;
		overflow: scroll;
		.title {
			font-size: 2.5rem;
			text-align: center;
		}
		p {
			color: #565e61;
			margin: .5rem 0;
			padding: 0;
			font-size: 1.4rem;
			line-height: 2.4rem;
		}
	}
</style>
