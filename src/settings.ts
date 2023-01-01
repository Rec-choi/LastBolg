/*
 * @Author: “Rec-choi” “1820758693@qq.com”
 * @Date: 2022-12-29 02:15:18
 * @LastEditors: “Rec-choi” “1820758693@qq.com”
 * @LastEditTime: 2022-12-30 01:31:49
 * @FilePath: \KAUNGJIA\src\settings.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Settings } from '#/global'

const globalSettings: Settings.all = {
  app: {
    enableProgress: true,
    enableDynamicTitle: true,
    colorScheme: 'light',
    elementSize: 'default',
    iconifyOfflineUse: false,
    enablePermission: true,
    routeBaseOn: 'frontend',
  },
  home: {
    enable: true,
    title: '主页',
  },
  layout: {
    enableMobileAdaptation: true,
  },
  menu: {
    baseOn: 'frontend',
    menuMode: 'side',
    enableSubMenuCollapseButton: true,
    enableHotkeys: true,
    switchMainMenuAndPageJump: false,
    subMenuUniqueOpened: true,
    subMenuCollapse: false,
  },
  topbar: {
    mode: 'fixed',
  },
  toolbar: {
    enableFullscreen: true,
    enablePageReload: true,
    enableColorScheme: true,
    enableAppSetting: false,
  },
  breadcrumb: {
    enable: true,
  },
  navSearch: {
    enable: false,
    enableHotkeys: true,
  },
  copyright: {
    enable: true,
    dates: '2020-2023',
    company: 'DGPT',
    website: 'https://hooray.gitee.io/fantastic-admin/',
    beian: '',
  },
}

export default globalSettings
