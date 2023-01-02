/*
 * @Author: “Rec-choi” “1820758693@qq.com”
 * @Date: 2022-12-29 02:15:18
 * @LastEditors: “Rec-choi” “1820758693@qq.com”
 * @LastEditTime: 2023-01-03 04:19:15
 * @FilePath: \KAUNGJIA\src\router\modules\multilevel.menu.example.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layouts/index.vue')

const routes: RouteRecordRaw = {
  path: '/multilevel_menu_example',
  component: Layout,
  redirect: '/multilevel_menu_example/page',
  name: 'multilevelMenuExample',
  meta: {
    title: '信息',
    icon: 'sidebar-menu',
  },
  children: [
    {
      path: 'page',
      name: 'multilevelMenuExample1',
      component: () => import('@/views/multilevel_menu_example/page.vue'),
      meta: {
        title: '信息提交',
      },
    },
    {
      path: 'page2',
      name: 'mbatchactionbar',
      component: () => import('@/views/multilevel_menu_example/batchactionbar.demo.vue'),
      meta: {
        title: '用户信息',
      },
    },
    {
      path: 'page3',
      name: 'dataLast',
      component: () => import('@/views/multilevel_menu_example/dataLast.vue'),
      meta: {
        title: '后台数据',
      },
    },
    {
      path: 'level2',
      name: 'multilevelMenuExample2',
      redirect: '/multilevel_menu_example/level2/page',
      meta: {
        title: '文件变更',
      },
      children: [
        {
          path: 'page',
          name: 'multilevelMenuExample2-1',
          component: () => import('@/views/multilevel_menu_example/level2/page.vue'),
          meta: {
            title: '内容上传',
          },
        },
      ],
    },
  ],
}

export default routes
