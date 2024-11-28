<template>
	<div class="container pb-5 px-5 box-border bg-white rounded-lg overflow-hidden w-[92%] mx-auto mt-3">
		<div class="operate flex justify-end items-center py-3">
			<el-tag effect="dark" type="info" size="large" class="mr-auto">作品页面列表项管理</el-tag>
			<el-button plain @click="router.replace('/')">返回前台</el-button>
			<div class="searceh w-[200px] mx-3">
				<el-input clearable v-model="search" size="default" placeholder="搜索设计师">
					<!-- <template #append>
						<el-button :icon="Search" />
					</template> -->
				</el-input>
			</div>
			<el-popconfirm width="220" confirm-button-text="确认" cancel-button-text="取消" icon="InfoFilled" icon-color="#626AEF"
				title="重置默认数据" @confirm="hanleReset()">
				<template #reference>
					<el-button type="danger" plain>重置数据</el-button>
				</template>
			</el-popconfirm>
			<el-button type="primary" @click="handleCreate()">新增作品</el-button>
		</div>
		<el-table :data="filterTableData" v-loading="loading" :stripe="true" @selection-change="handleSelectionChange"
			:table-layout="tableLayout" style="width: 100%" :max-height="tableHeight">
			:header-cell-style="{ background: '#eef1f6', color: '#606266' }">
			<!-- <el-table-column type="selection" width="55" /> -->
			<!-- <el-table-column fixed type="index" :index="1" label="序号" width="60" /> -->
			<el-table-column fixed prop="designer" label="设计师" />
			<el-table-column prop="desc" label="作品描述" />
			<el-table-column prop="tag" label="设计图">
				<template #default="scope">
					<div class="img-preview">
						<el-image style="width: 100px; height: 100px" :src="scope.row.img" fit="contain" />
					</div>
				</template>
			</el-table-column>
			<el-table-column prop="tag" label="标签" width="100" />
			<!-- <el-table-column prop="hao" label="号" width="100" /> -->
			<el-table-column fixed="right" label="操作" width="140" header-align="center">
				<template #default="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">
						编辑
					</el-button>
					<el-popconfirm width="220" confirm-button-text="确认" cancel-button-text="取消" icon="InfoFilled"
						icon-color="#626AEF" title="确认删除该作品吗？" @confirm="handleDelete(scope.$index, scope.row)">
						<template #reference>
							<el-button size="small" type="danger">
								删除
							</el-button>
						</template>
					</el-popconfirm>
				</template>
			</el-table-column>
		</el-table>
		<Edit v-if="dialogVisible" :dialogVisible="dialogVisible" :rowData="rowData" @dialogEmit="handleDialog"
			:editType="editType">
		</Edit>
	</div>
</template>

<script lang="ts" setup>
import { ElMessage, type TableInstance } from 'element-plus';
import { Search } from '@element-plus/icons-vue'
import { computed, ref } from 'vue'
import { useWorksStore } from "@/store/works";
import Edit from './operate/Edit.vue';
import { waitTime } from '@/utils/common';
import { useRouter } from 'vue-router';
const router = useRouter()
const worksStore = useWorksStore()
const { remove } = worksStore
const tableLayout = ref<TableInstance['tableLayout']>('auto')
const loading = ref(false)
const getImg = (imgid: string) => {
	return new URL(`../../assets/img/works/item${imgid}.webp`, import.meta.url).href
}

const tableHeight = computed(() => {
	return window.innerHeight - 120
})

//关闭弹窗
const dialogVisible = ref(false)
const handleDialog = (isShow: boolean) => {
	dialogVisible.value = isShow
}
//编辑弹窗数据
const rowData = ref({} as any)
const editType = ref(0)
const hanleReset = async () => {
	await worksStore.resetData()
	loading.value = true
	waitTime(500).then(() => {
		loading.value = false
	})
}
const handleCreate = () => {
	editType.value = 1
	dialogVisible.value = true
}
const search = ref('')
const filterTableData = computed(() =>
	worksStore.works.filter(
		(data: { designer: string; }) =>
			!search.value ||
			data.designer.toLowerCase().includes(search.value.toLowerCase())
	)
)
const handleEdit = (index: number, row: any) => {
	editType.value = 2
	dialogVisible.value = true
	let copyRow = { ...row }
	// console.log(copyRow);
	rowData.value = copyRow
}

const handleDelete = async (index: number, row: any) => {
	const res = await remove(row.id)
	if (res) {
		ElMessage({
			type: 'success',
			message: `设计师 ${row.designer} 的一个作品已被删除`,
			duration: 2000
		})
	}
}

const multipleSelection = ref<any[]>([])
const handleSelectionChange = (val: any[]) => {
	multipleSelection.value = val
}

</script>
<style scoped>
.el-table__header {
	background-color: #8794a6;
}

.img-preview .image-slot {
	font-size: 30px;
}

.img-preview .image-slot .el-icon {
	font-size: 30px;
}

.img-preview .el-image {
	width: 100%;
	height: 200px;
}
</style>
