<template>
	<el-dialog :model-value="dialogVisible" :close-on-click-modal="false" @close="closeDialog"
		:title="`${editTypeName}作品`" width="500" center>
		<el-form ref="ruleFormRef" :disabled="processing" :model="form" :rules="rules" label-width="auto"
			class="demo-ruleForm" :size="formSize" status-icon @submit.prevent="submitForm(ruleFormRef)">
			<el-form-item label="设计师" prop="designer">
				<el-input v-model.trim="form.designer" placeholder="设计师昵称" />
			</el-form-item>
			<el-form-item label="作品描述" prop="desc">
				<el-input v-model.trim="form.desc" placeholder="作品描述" />
			</el-form-item>
			<el-form-item label="作品标签" prop="tag">
				<el-input v-model.number="form.tag" placeholder="作品标签" />
			</el-form-item>
			<el-form-item label="设计图" prop="img">
				<el-upload class="avatar-uploader" method="get" :show-file-list="false" :on-success="handleAvatarSuccess">
					<img v-if="imageUrl" :src="imageUrl" class="avatar" />
					<el-icon v-else class="avatar-uploader-icon">
						<Plus />
					</el-icon>
				</el-upload>
			</el-form-item>
			<el-form-item>
				<el-button @click="resetForm(ruleFormRef)">重置表单</el-button>
				<el-button type="primary" native-type="submit" :loading="processing"
					@click="submitForm(ruleFormRef)">确认</el-button>
				<span class="text-rose text-right m-l-5rem">{{ errInfo }}</span>
			</el-form-item>
		</el-form>
	</el-dialog>
</template>
<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import { ElMessage, type ComponentSize, type FormInstance, type FormRules } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import { useWorksStore } from "@/store/works";
import { randomNum, waitTime } from '@/utils/common';
const { create, update } = useWorksStore()
const worksStore = useWorksStore()
const emit = defineEmits<{
	(e: 'dialogEmit', isShow: boolean): void
}>()

const { dialogVisible, rowData, editType } = defineProps({
	dialogVisible: {
		type: Boolean,
		default: false
	},
	rowData: {
		type: Object,
		default: () => ({})
	},
	editType: Number
})


const editTypeName = editType == 1 ? '添加' : '编辑'
//发出事件处理父组件处理弹窗关闭
const closeDialog = () => {
	emit('dialogEmit', false)
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const form = reactive({
	designer: '',
	desc: null,
	tag: null,
	img: worksStore.works[randomNum(0, worksStore.works.length - 1)].img,
})
nextTick(() => {
	editType == 2 && Object.assign(form, rowData)
})

const rules = reactive<FormRules>({
	designer: [
		{ required: true, message: '请输入设计师昵称', trigger: 'blur' },
		{ min: 2, max: 12, message: '长度应为2-12个字符', trigger: 'blur' },
	],
	desc: [
		{
			required: true,
			message: '请输入作品描述',
			trigger: 'change',
		},
	],
	tag: [
		{
			required: false,
			message: '输入作品自定标签',
			trigger: 'change',
		},
	],
})
const errInfo = ref('')
const processing = ref(false)

const submitForm = async (formEl: FormInstance | undefined) => {
	// console.log(form);
	if (!formEl) return
	await formEl.validate(async (valid, fields) => {
		if (valid) {
			// console.log(Object.is(form, rowData));

			// if (Object.is(form, rowData)) {
			// 	ElMessage({
			// 		type: 'info',
			// 		message: '数据未发生变动',
			// 		duration: 2000
			// 	})
			// 	return
			// }
			processing.value = true
			const { id, ...formInfo } = form as any
			const res = editType == 1 ?
				await create(form) :
				await update(id, formInfo) as any
			await waitTime(500)
			if (res) {
				ElMessage({
					type: 'success',
					message: `${editTypeName}成功`,
					duration: 2000
				})
				processing.value = false
				closeDialog()
			} else {
				errInfo.value = res.message
				processing.value = false
			}
		} else {
			console.log('error submit!', fields)
			processing.value = false
		}
	})
}

const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
}

const imageUrl = ref(editType == 1 ? worksStore.works[randomNum(0, worksStore.works.length - 1)].img : rowData.img)

const handleAvatarSuccess: UploadProps['onSuccess'] = (
	response,
	uploadFile
) => {
	imageUrl.value = URL.createObjectURL(uploadFile.raw!)
	// form.img = imageUrl.value
}
</script>

<style>
.avatar-uploader .el-upload {
	border: 1px dashed var(--el-border-color);
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
	border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	text-align: center;
}
</style>