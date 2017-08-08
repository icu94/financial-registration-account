<template>
	<div class="pages">
		<img src="../assets/form6.png">
		<div class="content">
			<div class="title">关于禁止代客交易的说明</div>
			<p>尊敬的客户：</p>
			<p>华宇期货禁止代客交易及变相代客交易，严厉禁止我单位及下辖业务体系内的任何机构或个人向您提供具体细化至某一指定点位建仓平仓的信息参考，请广大客户提高防范意识，勿将交易账户交由他人操作，亦可及时向我司举报代客交易或变相代客交易行为。对由于代客交易行为产生的交易风险及损失，我司不承担任何责任。</p>
		</div>
		<div class="tip">
			<img src="../assets/agreed.png">
			<span>我已阅读并同意以上服务</span>
		</div>
		<router-link to="seventhstep" class="next-btn">下一步</router-link>
		<router-link to="fifthstep" class="prev-btn">上一步</router-link>
	</div>
</template>

<script>
	export default {
		name: 'SixthStep',
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
