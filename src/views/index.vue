<route lang="yaml">
name: home
meta:
  title: 主页
</route>

<script lang="ts" setup>
function open(url: string) {
  window.open(url, '_blank')
}

const fantasticStartkitInfo = ref({
  feature: [
    '支持 TypeScript',
    '默认集成 vue-router 和 pinia',
    '全局 SCSS 资源引入',
    '全局组件自动注册',
    '支持 SVG 图标，CSS 精灵图自动合成',
    '支持 mock 数据，可摆脱后端束缚独立开发',
    '支持 gzip / brotli 优化项目体积，提高加载速度',
    '结合 IDE 插件、ESlint 、stylelint 、Git 钩子，轻松实现团队代码规范',
  ],
})

const fantasticAdminInfo = ref({
  imageVisible: false,
  index: 0,
  data: [
    'https://hooray.gitee.io/fantastic-admin/preview1.png',
    'https://hooray.gitee.io/fantastic-admin/preview2.png',
    'https://hooray.gitee.io/fantastic-admin/preview3.png',
    'https://hooray.gitee.io/fantastic-admin/preview4.png',
    'https://hooray.gitee.io/fantastic-admin/preview5.png',
    'https://hooray.gitee.io/fantastic-admin/preview6.png',
  ],
})

const oneStepAdminInfo = ref({
  imageVisible: false,
  index: 0,
  data: [
    'https://hooray.gitee.io/one-step-admin/preview1.png',
    'https://hooray.gitee.io/one-step-admin/preview2.png',
    'https://hooray.gitee.io/one-step-admin/preview3.png',
    'https://hooray.gitee.io/one-step-admin/preview4.png',
    'https://hooray.gitee.io/one-step-admin/preview5.png',
    'https://hooray.gitee.io/one-step-admin/preview6.png',
  ],
})
</script>

<template>
  <div>
    <page-header title="欢迎使用 Fantastic-admin（基础版）">
      <template #content>
        <div>
          <div style="margin-bottom: 5px;">
            这是一款<b class="text-emphasis">开箱即用</b>的中后台框架，同时它也经历过数十个真实项目的技术沉淀，确保框架在开发中可落地、可使用、可维护
          </div>
          <div>注：在作者就职的公司，本框架已在电商、直播、OA、ERP等多个不同领域的中后台系统中应用并稳定运行</div>
        </div>
      </template>
      <el-button-group>
        <el-button type="success" size="large" plain @click="open('https://hooray.gitee.io/fantastic-admin/')">
          开发文档
        </el-button>
        <el-dropdown>
          <el-button type="primary" size="large">
            代码仓库
            <el-icon class="el-icon--right">
              <svg-icon name="ep:arrow-down" />
            </el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="open('https://gitee.com/hooray/fantastic-admin')">
                Gitee
              </el-dropdown-item>
              <el-dropdown-item @click="open('https://github.com/hooray/fantastic-admin')">
                Github
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-button-group>
    </page-header>
    <el-row :gutter="20" style="margin: 0 10px;">
      <el-col :lg="8">
        <page-main style="margin: 0;">
          <div class="ecology vue">
            <div class="main">
              <img src="https://cn.vuejs.org/logo.svg" style="width: 30%;">
              <h1>Fantastic-startkit</h1>
              <h2>一款开箱即用的 Vue 项目启动套件</h2>
              <div>
                <el-button type="primary" plain @click="open('https://hooray.gitee.io/fantastic-startkit/')">
                  <template #icon>
                    <el-icon>
                      <svg-icon name="ep:link" />
                    </el-icon>
                  </template>
                  访问官网
                </el-button>
                <el-button plain @click="open('https://hooray.github.io/fantastic-startkit/')">
                  <template #icon>
                    <el-icon>
                      <svg-icon name="ep:link" />
                    </el-icon>
                  </template>
                  备用地址
                </el-button>
              </div>
            </div>
            <el-divider border-style="dashed" />
            <ul>
              <li v-for="item in fantasticStartkitInfo.feature" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </page-main>
      </el-col>
      <el-col :lg="8">
        <page-main style="margin: 0;">
          <div class="ecology fa">
            <div class="main">
              <img src="https://hooray.gitee.io/fantastic-admin/logo.png" style="width: 30%;">
              <h1>Fantastic-admin</h1>
              <h2>一款开箱即用的 Vue 中后台管理系统框架</h2>
              <div>
                <el-button type="primary" plain @click="open('https://hooray.gitee.io/fantastic-admin/')">
                  <template #icon>
                    <el-icon>
                      <svg-icon name="ep:link" />
                    </el-icon>
                  </template>
                  访问官网
                </el-button>
                <el-button plain @click="open('https://hooray.github.io/fantastic-admin/')">
                  <template #icon>
                    <el-icon>
                      <svg-icon name="ep:link" />
                    </el-icon>
                  </template>
                  备用地址
                </el-button>
              </div>
            </div>
            <el-divider border-style="dashed" />
            <el-carousel trigger="click" indicator-position="none" :interval="5000" height="250px">
              <el-carousel-item v-for="(item, index) in fantasticAdminInfo.data" :key="item">
                <el-image :src="item" fit="cover" style="cursor: pointer; width: 100%; height: 250px; margin: auto;" @click="fantasticAdminInfo.imageVisible = true; fantasticAdminInfo.index = index" />
              </el-carousel-item>
            </el-carousel>
            <el-image-viewer v-if="fantasticAdminInfo.imageVisible" :url-list="fantasticAdminInfo.data" :initial-index="fantasticAdminInfo.index" @close="fantasticAdminInfo.imageVisible = false" />
          </div>
        </page-main>
      </el-col>
      <el-col :lg="8">
        <page-main style="margin: 0;">
          <div class="ecology osa">
            <div class="main">
              <img src="https://hooray.gitee.io/one-step-admin/logo.png" style="width: 30%;">
              <h1>One-step-admin</h1>
              <h2>一款干啥都快人一步的 Vue 中后台系统框架</h2>
              <div>
                <el-button type="primary" plain @click="open('https://hooray.gitee.io/one-step-admin/')">
                  <template #icon>
                    <el-icon>
                      <svg-icon name="ep:link" />
                    </el-icon>
                  </template>
                  访问官网
                </el-button>
                <el-button plain @click="open('https://hooray.github.io/one-step-admin/')">
                  <template #icon>
                    <el-icon>
                      <svg-icon name="ep:link" />
                    </el-icon>
                  </template>
                  备用地址
                </el-button>
              </div>
            </div>
            <el-divider border-style="dashed" />
            <el-carousel trigger="click" indicator-position="none" :interval="5000" height="250px">
              <el-carousel-item v-for="(item, index) in oneStepAdminInfo.data" :key="item">
                <el-image :src="item" fit="cover" style="cursor: pointer; width: 100%; height: 250px; margin: auto;" @click="oneStepAdminInfo.imageVisible = true; oneStepAdminInfo.index = index" />
              </el-carousel-item>
            </el-carousel>
            <el-image-viewer v-if="oneStepAdminInfo.imageVisible" :url-list="oneStepAdminInfo.data" :initial-index="oneStepAdminInfo.index" @close="oneStepAdminInfo.imageVisible = false" />
          </div>
        </page-main>
      </el-col>
    </el-row>
    <page-main title="应用场景">
      <div class="question">
        <ol class="answer">
          <li><span>没有前端开发人员的小型公司。</span>据了解，有些小型公司没有前端开发人员，而这些公司在开发中后台系统的时候，直接要求后端开发人员来进行开发工作。所以借助 Vue 的易学习易上手特性，再加上本框架的加持，可以让后端开发人员能在短时间内转型成为全栈开发。</li>
          <li><span>前端开发人员不足的中小型公司。</span>根据招聘网站统计，几乎所有公司都缺前端，其中有很大一部分中小型公司标配只有1-2名前端开发人员，而这些公司在开发中后台系统的时候，如果能有一套现成的中后台框架系统，不仅能提高项目开发效率，同时还大大减轻前端开发人员工作压力。</li>
          <li><span>项目型公司。</span>特点为项目多，周期短，甲方对页面布局和主题风格有绝对话语权，而通过专业版提供的布局和主题风格，可应对绝大部分甲方需求，并且可自定义扩展主题风格的样式，实现高度定制化。</li>
          <li><span>产品型公司。</span>产品型公司最担心的就是产品开发中代码不可控的因素，本框架除了提供完善的开发文档和代码注释外，作者还提供一对一的技术支持，确保开发人员尽可能理解整套框架源码的方方面面，为产品保驾护航。</li>
          <li><span>个人开发者。</span>手里有一套可高度定制化的中后台框架，什么项目都不用担心啦~</li>
        </ol>
      </div>
    </page-main>
  </div>
</template>

<style lang="scss" scoped>
.text-emphasis {
  text-emphasis-style: "❤";
}

.ecology {
  padding: 10px 0 0;

  &.vue {
    h1 {
      color: #41b883;
    }
  }

  &.fa {
    h1 {
      color: #e60000;
    }
  }

  &.osa {
    h1 {
      color: #67c23a;
    }
  }

  .main {
    text-align: center;

    img {
      display: block;
      margin: 0 auto;
    }

    h1 {
      margin: 10px auto 0;
      text-align: center;
    }

    h2 {
      font-size: 16px;
      font-weight: normal;
      color: var(--el-text-color-secondary);
      text-align: center;
    }
  }

  .el-carousel {
    box-shadow: var(--el-box-shadow-light);
    transition: var(--el-transition-box-shadow);
  }

  ul li {
    line-height: 28px;
  }
}

.question {
  .answer {
    margin: 20px 0 0;
    padding-left: 20px;
    font-size: 16px;
    color: var(--el-text-color-secondary);

    li {
      margin-bottom: 10px;
      line-height: 1.5;

      &:last-child {
        margin-bottom: 0;
      }
    }

    span {
      color: var(--el-text-color-primary);
      font-weight: bold;
    }
  }
}
</style>
