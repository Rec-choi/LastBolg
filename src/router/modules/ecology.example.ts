/*
 * @Author: “Rec-choi” “1820758693@qq.com”
 * @Date: 2023-01-01 00:33:16
 * @LastEditors: “Rec-choi” “1820758693@qq.com”
 * @LastEditTime: 2023-01-03 02:02:52
 * @FilePath: \KAUNGJIA\src\router\modules\ecology.example.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layouts/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/official',
    redirect: '/official/fantastic-startkit',
    meta: {
      title: '官方周边',
      icon: 'ep:grid',
    },
    children: [
      {
        path: 'fantastic-startkit',
        redirect: '',
        name: 'officialFantasticStartkit',
        meta: {
          title: 'Fantastic-startkit 项目启动套件',
          link: 'https://hooray.gitee.io/fantastic-startkit/',
        },
      },
      {
        path: 'one-step-admin',
        redirect: '',
        name: 'officialOneStepAdmin',
        meta: {
          title: 'One-step-admin 干啥都快人一步的中后台框架',
          link: 'https://hooray.gitee.io/one-step-admin/',
        },
      },
    ],
  },
  {
    path: '/video/coming/soon',
    component: Layout,
    meta: {
      title: '相关视频',
      icon: 'sidebar-videos',
    },
    children: [
      {
        path: '',
        name: 'videosComingSoon',
        component: () => import('@/views/videos_example/coming.soon.vue'),
        meta: {
          title: '相关视频',
          sidebar: false,
          breadcrumb: false,
        },
      },
    ],
  },
]

export default routes
