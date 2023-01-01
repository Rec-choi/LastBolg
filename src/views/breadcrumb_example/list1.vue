<!--
 * @Author: “Rec-choi” “1820758693@qq.com”
 * @Date: 2022-12-29 02:15:18
 * @LastEditors: “Rec-choi” “1820758693@qq.com”
 * @LastEditTime: 2022-12-31 20:08:15
 * @FilePath: \KAUNGJIA\src\views\breadcrumb_example\list1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<route lang="yaml">
meta:
  enabled: false
</route>

<template>
  <page-main>
    用户数据显示
    <router-link :to="{ name: 'breadcrumbExampleDetail1' }">
      查看详情页
      <el-link type="primary" disabled>
        删除相关详情页
      </el-link>
    </router-link>
  </page-main>
</template>

<style lang="scss" scoped>
  .el-link {
    margin: 0 10px;
  }

  .router-link {
    margin: 0 10px;
  }
</style>
