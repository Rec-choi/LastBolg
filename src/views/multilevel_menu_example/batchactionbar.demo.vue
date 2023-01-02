<!--
 * @Author: “Rec-choi” “1820758693@qq.com”
 * @Date: 2023-01-02 21:45:39
 * @LastEditors: “Rec-choi” “1820758693@qq.com”
 * @LastEditTime: 2023-01-02 22:23:05
 * @FilePath: \KAUNGJIA\src\views\multilevel_menu_example\batchactionbar.demo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<route lang="yaml">
meta:
  enabled: false
</route>

<script lang="ts" setup name="ComponentExampleBatchactionbar">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
const tableRef = ref()

const dataList = ref([
  {
    date: '2022-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2022-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  },
  {
    date: '2022-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
  },
  {
    date: '2022-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
  },
])
const selectionDataList = ref([])
</script>

<template>
  <div>
    <page-header title="用户信息操作栏">
      <template #content>
        <p style="margin-bottom: 0;">
          信息读取
        </p>
      </template>
    </page-header>
    <page-main>
      <batch-action-bar :data="dataList" :selection-data="selectionDataList" @check-all="tableRef.toggleAllSelection()" @check-null="tableRef.clearSelection()">
        <el-button-group>
          <el-button size="default">
            删除
          </el-button>
          <el-button size="default">
            提交
          </el-button>
        </el-button-group>
      </batch-action-bar>
      <el-table ref="tableRef" :data="dataList" border stripe highlight-current-row @selection-change="selectionDataList = $event">
        <el-table-column type="selection" width="40" />
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="地址" />
      </el-table>
    </page-main>
  </div>
</template>
