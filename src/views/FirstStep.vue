<template>
	<div class="pages">
		<img src="../assets/security.png">
		<div class="title">HELLO!</div>
		<div class="description">敬爱的用户您好！请根据提示完成注册流程，审核通过后我们将以短信的形式将用户名和密码发送至您的手机，请注意查收！</div>
		<div class="form-group">
			<div class="input-group">
				<input type="tel" placeholder="手机号码" v-model="phone">
			</div>
			<div class="input-group">
				<input class="vcode" type="tel" placeholder="输入验证码" v-model="v_code">
				<div class="get-vcode">获取验证码</div>
			</div>
			<div class="input-group">
				<input type="text" placeholder="真实姓名" v-model="name">
			</div>
			<div class="input-group">
				<input type="number" placeholder="身份证号码" v-model="id_number">
			</div>
		</div>
		<router-link to="idcard" class="next-btn">下一步</router-link>
	</div>
</template>

<script>
	export default {
	    name: 'FirstStep',
		data() {
	        return {
	            phone: '',
				v_code: '',
				name: '',
				id_number: ''
			}
		}
	}
</script>

<style scoped lang="scss">
	.title {
		width: 100%;
		padding: 2rem 0;
		font-size: 3.2rem;
		color: #131415;
		letter-spacing: 2px;
		line-height: 74px;
		text-align: center;
	}
	.description {
		font-size: 1.2rem;
		color: #565e61;
		line-height: 2.2rem;
		text-align: center;
		padding: 2rem 1rem;
		padding-top: 0;
	}
	.form-group	{
		padding: 0 2.4rem;
		.input-group {
			width: 100%;
			margin-bottom: 1.5rem;
			&:after {
				display: table;
				content: ' ';
				clear: both;
			}
			input {
				width: 100%;
				height: 4.5rem;
				/*line-height: 4.5rem;*/
				font-size: 1.7rem;
				border: none;
				padding: 1rem 2rem;
				background-color: #f5f5f5;
				border-radius: 5rem;
			}
			.vcode {
				width: 60%;
				float: left;
			}
			.get-vcode {
				float: left;
				width: 35%;
				margin-left: 5%;
				height: 4.5rem;
				line-height: 4.5rem;
				border-radius: 5rem;
				text-align: center;
				color: #fff;
				font-size: 1.7rem;
				background-color: #2979ff;
			}
		}
	}
</style>
