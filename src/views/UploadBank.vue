<template>
	<div class="pages">
		<img src="../assets/security.png">
		<div class="upload-box">
			<div class="description">
				<div class="title">上传银行卡（卡号面）</div>
				<div class="text">可以扫描或高清拍摄，请保证银行卡上卡号信息清晰完整，可供审核人员辨认。</div>
			</div>
			<div class="id-card-form">
				<input type="file" ref="card-positive" @change="bankChange">
				<span class="icon iadd"></span>
				<div class="text">点击上传银行卡（卡号面）</div>
				<img src="../assets/imgbg.png" class="thumbnail-img" :style="{'background-image': 'url(' + bank_card + ')'}">
			</div>
		</div>
		<div class="form-group">
			<select v-model="selected_provice">
				<option value="">请选择</option>
				<option v-for="c in city" :value="c.name">{{c.name}}</option>
			</select>
			<select v-model="selected_city">
				<option value="">请选择</option>
				<option value=""></option>
			</select>
			<select>
				<option value="">请选择</option>
				<option value=""></option>
			</select>
			<input type="text" placeholder="请输入银行支行">
		</div>
		<router-link to="secondstep" class="next-btn">下一步</router-link>
		<router-link to="idcard" class="prev-btn">上一步</router-link>
	</div>
</template>

<script>
	import provice from '@/assets/city'
	export default {
	    name: 'UploadBank',
		data() {
	        return {
	            bank_card: '',
				city: provice,
				selected_provice: '',
				selected_city: ''
			}
		},
		mounted() {
//	        console.log(this.selected_provice)
		},
		methods: {
			bankChange(e) {
				let files = e.target.files || e.dataTransfer.files
				if (!files.length) {
					return
				}
				this.createBank(files[0])
			},
			createBank(file) {
				let reader = new FileReader()
				let _this = this
				reader.onload = (e) => {
					_this.bank_card = e.target.result
				}
				reader.readAsDataURL(file)
			}
		}
	}
</script>

<style scoped lang="scss">
	.upload-box {
		padding: 4rem 2rem;
		&:after {
			display: table;
			content: ' ';
			clear: both;
		}
		.description {
			float: left;
			width: 49%;
			.title {
				color: #555;
				font-size: 1.6rem;
			}
			.text {
				color: #9b9b9b;
				font-size: 1.2rem;
				margin-top: 1rem;
			}
		}
		.id-card-form {
			float: left;
			width: 49%;
			height: 10rem;
			margin-left: 2%;
			position: relative;
			border: 1px dashed #b8c2c7;
			input[type='file'] {
				width: 100%;
				height: 100%;
				opacity: 0;
				outline: none;
				position: absolute;
				top: 0;
				left: 0;
				z-index: 5;
			}
			.text {
				color: #b8c2c7;
				position: absolute;
				top: 55%;
				left: 0;
				width: 100%;
				text-align: center;
			}
			.iadd {
				position: absolute;
				top: 30%;
				left: 50%;
				margin-left: -1rem;
			}
			.thumbnail-img {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 4;
			}
		}
	}
	.form-group	{
		color: #222;
		padding: 0 2rem;
		select {
			width: 100%;
			height: 4rem;
			line-height: 4rem;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			font-size: 1.4rem;
			padding: 0 2rem;
			border: 0;
			border-radius: 5rem;
			background-color: #f5f5f5;
			outline: none;
			margin-bottom: 1.5rem;
		}
		input {
			width: 100%;
			height: 4rem;
			line-height: 4rem;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			font-size: 1.4rem;
			padding: 1rem 2rem;
			border: 0;
			border-radius: 5rem;
			background-color: #f5f5f5;
			outline: none;
			&:-moz-placeholder,
			&::-moz-placeholder,
			&:-ms-input-placeholder,
			&::-webkit-input-placeholder {
				color: #222 !important;
			}
		}
	}
</style>
