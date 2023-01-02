<route lang="yaml">
name: home
meta:
  title: 主页
</route>

<script lang="ts" setup>
function open(url: string) {
  window.open(url, '_blank')
}

const fantasticAdminInfo = ref({
  imageVisible: false,
  index: 0,
  data: [
    'https://img1.imgtp.com/2023/01/03/28jAFyWE.png',
    'https://img1.imgtp.com/2023/01/03/Ru7Cpijx.png',
    'https://img1.imgtp.com/2023/01/03/AWZNEmxU.png',
    'https://img1.imgtp.com/2023/01/03/O0D9LxP6.png',
  ],
})

const oneStepAdminInfo = ref({
  imageVisible: false,
  index: 0,
  data: [
    'https://img1.imgtp.com/2023/01/03/Ru7Cpijx.png',
    'https://img1.imgtp.com/2023/01/03/pJZ4qSd8.png',
    'https://img1.imgtp.com/2023/01/03/nR1W7iOr.png',
    'https://img1.imgtp.com/2023/01/03/AdXCvGCY.png',
  ],
})
</script>

<template>
  <div>
    <page-header title="欢迎使用 REC的个人博客后台管理系统">
      <template #content>
        <div>
          <div style="margin-bottom: 5px;">
            是一款<b class="text-emphasis">中后台管理系统</b>，作为前端部分参与博客的管理
          </div>
        </div>
      </template>
    </page-header>
    <el-row :gutter="20" style="margin: 0 10px;">
      <el-col :lg="8">
        <page-main style="margin: 0;">
          <div class="ecology fa">
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
    <page-main title="Tips">
      <div class="question">
        <ol class="answer">
          <li><span>开发环境</span>需要在本地依次安装好 Node.js, pnpm, Git 和 Visual Studio Code。</li>
          <li><span>建议安装以下扩展</span>（1）EditorConfig for VS Code （2）DotENV（3）ESLint（4）stylelint（5）Vue Language Features（6）TypeScript Vue Plugin</li>
          <li><span>以下是作者建议安装的扩展，安装它们将在一定程度上提升开发效率。</span>（1）Chinese (Simplified) Language Pack for Visual Studio Code（2）Color Highlight（3）Highlight Matching Tag（4）Image preview</li>
          <li><span>技术栈</span>#Vite #Vue 3 #Vue Router 4 #Pinia #Element Plus</li>
          <li>
            # 安装依赖# 注意，必须使用 pnpm 安装依赖，请勿使用 npm 或 yarn 安装依赖
            <span>pnpm install</span># 运行<span>pnpm run dev</span>
          </li>
        </ol>
      </div>
    </page-main>
  </div>
</template>

<style lang="scss" scoped>
.ecology {
  padding: 10px 0 0;

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
