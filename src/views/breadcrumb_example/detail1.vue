<!--
 * @Author: “Rec-choi” “1820758693@qq.com”
 * @Date: 2022-12-29 02:15:18
 * @LastEditors: “Rec-choi” “1820758693@qq.com”
 * @LastEditTime: 2023-01-03 01:57:08
 * @FilePath: \KAUNGJIA\src\views\breadcrumb_example\detail1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<route lang="yaml">
meta:
  enabled: false
</route>

<script lang="ts" setup name="ComponentExampleEditor">
import Alert from './components/alert.vue'
const content = ref('<h1>Blog</h1>')
</script>

<template>
  <div>
    <page-header title="文章文本内容上传">
      <template #content>
        <p style="margin-bottom: 0;">
          基于 TinyMCE 并做了简单封装
        </p>
        <div>
          <el-button type="primary">
            上传
            <el-icon class="el-icon--right">
              <svg-icon name="ep:upload" />
            </el-icon>
          </el-button>
        </div>
      </template>
    </page-header>
    <page-main title="富文本编辑器">
      <editor v-model="content" />
      <div class="preview" v-html="content" />
    </page-main>
  </div>
</template>

<style lang="scss" scoped>
.preview {
  margin-top: 10px;

  &::before {
    content: "预览：";
    display: block;
  }
}
</style>
