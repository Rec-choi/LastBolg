<!--
 * @Author: “Rec-choi” “1820758693@qq.com”
 * @Date: 2022-12-29 02:15:18
 * @LastEditors: “Rec-choi” “1820758693@qq.com”
 * @LastEditTime: 2023-01-01 00:12:37
 * @FilePath: \KAUNGJIA\src\views\multilevel_menu_example\page.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<route lang="yaml">
meta:
  title: 信息提交
</route>

<script setup lang="ts" name="baseform">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const options = [
  {
    value: 'guangdong',
    label: '广东省',
    children: [
      {
        value: 'guangzhou',
        label: '广州市',
        children: [
          {
            value: 'tianhe',
            label: '天河区',
          },
          {
            value: 'haizhu',
            label: '海珠区',
          },
        ],
      },
      {
        value: 'dongguan',
        label: '东莞市',
        children: [
          {
            value: 'changan',
            label: '长安镇',
          },
          {
            value: 'humen',
            label: '虎门镇',
          },
        ],
      },
    ],
  },
  {
    value: 'hunan',
    label: '湖南省',
    children: [
      {
        value: 'changsha',
        label: '长沙市',
        children: [
          {
            value: 'yuelu',
            label: '岳麓区',
          },
        ],
      },
    ],
  },
]
const rules: FormRules = {
  name: [{ required: true, message: '请输入表单名称', trigger: 'blur' }],
}
const formRef = ref<FormInstance>()
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: true,
  type: ['小明'],
  resource: '小红',
  desc: '',
  options: [],
})

const value2 = ref<any>([
  new Date(2000, 10, 10, 10, 10),
  new Date(2000, 10, 11, 10, 10),
])

// 提交
const onSubmit = (formEl: FormInstance | undefined) => {
  // 表单校验
  // eslint-disable-next-line max-statements-per-line
  if (!formEl) { return }
  formEl.validate((valid) => {
    if (valid) {
      // eslint-disable-next-line no-console
      console.log(form)
      ElMessage.success('提交成功！')
    }
    else {
      return false
    }
  })
}
// 重置
const onReset = (formEl: FormInstance | undefined) => {
  // eslint-disable-next-line max-statements-per-line
  if (!formEl) { return }
  formEl.resetFields()
}
</script>

<template>
  <div class="container">
    <page-header title="信息表单" content="PageHeader">
      <template #content>
        <p style="margin-bottom: 0;">
          请填写表单内信息内容
        </p>
      </template>
    </page-header>
    <div class="form-box">
      <el-form ref="formRef" :rules="rules" :model="form" label-width="100px">
        <el-form-item label="表单名称" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="身份选择器" prop="region">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option key="小明" label="小明" value="小明" />
            <el-option key="小红" label="小红" value="小红" />
            <el-option key="小白" label="小白" value="小白" />
          </el-select>
        </el-form-item>
        <el-form-item label="日期时间">
          <el-date-picker v-model="value2" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
        </el-form-item>
        <el-form-item label="城市级联" prop="options">
          <el-cascader v-model="form.options" :options="options" />
        </el-form-item>
        <el-form-item label="选择开关" prop="delivery">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="多选框" prop="type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="小明" name="type" />
            <el-checkbox label="小红" name="type" />
            <el-checkbox label="小白" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="单选框" prop="resource">
          <el-radio-group v-model="form.resource">
            <el-radio label="小明" />
            <el-radio label="小红" />
            <el-radio label="小白" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文本框" prop="desc">
          <el-input v-model="form.desc" type="textarea" rows="5" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(formRef)">
            表单提交
          </el-button>
          <el-button @click="onReset(formRef)">
            重置表单
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
