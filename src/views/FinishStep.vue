<template>
	<div class="pages">
		<img src="../assets/form8.png">
		<div class="content">
			<div class="title">注册资料已经填写完成！请点击确认注册，完成账号注册流程。</div>
			<img src="../assets/success.png">
		</div>
		<div class="tip">
			<img src="../assets/agreed.png">
			<span>我已阅读并同意以上服务</span>
		</div>
		<router-link to="last" class="next-btn">确认注册</router-link>
		<router-link to="seventhstep" class="prev-btn">上一步</router-link>
	</div>
</template>

<script>
	export default {
		name: 'FinishStep',
		mounted() {
			document.title = '注册成功'
		}
	}
</script>

<style scoped lang="scss">
	.content {
		width: 100%;
		padding: 2rem 5rem;
		height: 38rem;
		overflow: scroll;
		text-align: center;
		.title {
			font-size: 2.5rem;
			text-align: center;
			margin-bottom: 2rem;
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
