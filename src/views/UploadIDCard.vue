<template>
	<div class="pages">
		<img src="../assets/security.png">
		<div class="upload-box">
			<div class="description">
				<div class="title">上传身份证正面</div>
				<div class="text">可以扫描或高清拍摄，请保证身份证上信息清晰完整，可供审核人员辨认。</div>
			</div>
			<div class="id-card-form">
				<input type="file" ref="card-positive" @change="cardPositiveChange">
				<span class="icon iadd"></span>
				<div class="text">点击上传身份证正面</div>
				<img src="../assets/imgbg.png" class="thumbnail-img" :style="{'background-image': 'url(' + id_card_positive + ')'}">
			</div>
		</div>
		<div class="upload-box">
			<div class="description">
				<div class="title">上传身份证背面</div>
				<div class="text">可以扫描或高清拍摄，请保证身份证上信息清晰完整，可供审核人员辨认。</div>
			</div>
			<div class="id-card-form">
				<input type="file" ref="card-negative" @change="cardNegativeChange">
				<span class="icon iadd"></span>
				<div class="text">点击上传身份证背面</div>
				<img src="../assets/imgbg.png" class="thumbnail-img" :style="{'background-image': 'url(' + id_card_negative + ')'}">
			</div>
		</div>
		<router-link to="bank" class="next-btn">下一步</router-link>
		<router-link to="/" class="prev-btn">上一步</router-link>
	</div>
</template>

<script>
	export default {
	    name: 'UploadIDCard',
		data() {
	        return {
	            id_card_positive: '',
				id_card_negative: ''
			}
		},
		mounted() {
			document.title = '上传身份证'
		},
		methods: {
	        cardPositiveChange(e) {
	            let files = e.target.files || e.dataTransfer.files
				if (!files.length) {
	                return
				}
				this.createCardPositive(files[0])
			},
			createCardPositive(file) {
	            let reader = new FileReader()
				let _this = this
				reader.onload = (e) => {
	                _this.id_card_positive = e.target.result
				}
				reader.readAsDataURL(file)
			},
			cardNegativeChange(e) {
				let files = e.target.files || e.dataTransfer.files
				if (!files.length) {
					return
				}
				this.createCardNegative(files[0])
			},
			createCardNegative(file) {
				let reader = new FileReader()
				let _this = this
				reader.onload = (e) => {
					_this.id_card_negative = e.target.result
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
</style>
