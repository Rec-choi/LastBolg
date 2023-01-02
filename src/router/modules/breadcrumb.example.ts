/*
 * @Author: “Rec-choi” “1820758693@qq.com”
 * @Date: 2022-12-29 02:15:18
 * @LastEditors: “Rec-choi” “1820758693@qq.com”
 * @LastEditTime: 2023-01-03 02:00:07
 * @FilePath: \KAUNGJIA\src\router\modules\breadcrumb.example.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layouts/index.vue')

const routes: RouteRecordRaw = {
  path: '/breadcrumb_example',
  component: Layout,
  redirect: '/breadcrumb_example/list1',
  name: 'breadcrumbExample',
  meta: {
    title: '博客相关内容',
    icon: 'sidebar-breadcrumb',
  },
  children: [
    {
      path: 'list1',
      name: 'breadcrumbExampleList1',
      component: () => import('@/views/breadcrumb_example/list1.vue'),
      meta: {
        title: '文本内容编辑',
      },
    },
    {
      path: 'detail1',
      name: 'breadcrumbExampleDetail1',
      component: () => import('@/views/breadcrumb_example/detail1.vue'),
      meta: {
        title: '文本内容',
        sidebar: false,
        activeMenu: '/breadcrumb_example/list1',
      },
    },

  ],
}

export default routes
