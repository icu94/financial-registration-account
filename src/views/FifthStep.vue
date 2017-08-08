<template>
	<div class="pages">
		<img src="../assets/form5.png">
		<div class="content">
			<div class="title">投资者确认函</div>
			<p>华宇期货：</p>
			<p>本人/本单位保证已在工作人员的配合下完成以下事项：</p>
			<p>1. 本人/本单位已经亲自签署《风险揭示书》以及《客户协议书》；</p>
			<p>2. 本人/本单位已按照有关规定配合工作人员采集了本人/本单位的影像资料；</p>
			<p>3. 本人/本单位保证已满足开户条件并且非交易市场所禁止人员；</p>
			<p>4. 本人/本单位已在交易中心指定银行开立专用账户进行资金结算；</p>
			<p>5. 本人/本单位已熟悉《华宇期货授信系统交易须知》及相关办法；</p>
			<p>6. 本人/本单位已掌握交易软件各项功能并能熟练操作；</p>
			<p>7. 本人/本单位希望立即开通交易。</p>
			<p>凡由于对交易规则等相关制度理解有误或交易软件操作失误而造成的一切损失由本人/本单位独自承担。</p>
		</div>
		<div class="tip">
			<img src="../assets/agreed.png">
			<span>我已阅读并同意以上服务</span>
		</div>
		<router-link to="sixthstep" class="next-btn">下一步</router-link>
		<router-link to="fourthstep" class="prev-btn">上一步</router-link>
	</div>
</template>

<script>
	export default {
		name: 'FifthStep',
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
