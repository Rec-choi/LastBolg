<route lang="yaml">
meta:
  enabled: false
  </route>

<script lang="ts" setup name="ComponentExampleUpload">
import type { UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'

const image = ref('https://picsum.photos/750/450')
const images = ref([
  'https://picsum.photos/400',
  'https://picsum.photos/600',
  'https://picsum.photos/500',
])
const files = ref([
  {
    name: '测试文件.zip',
    url: 'http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip',
  },
])

const handleSuccess1: UploadProps['onSuccess'] = (res) => {
  if (res.error === '') {
    image.value = res.data.path
  }
  else {
    ElMessage.warning(res.error)
  }
}
const handleSuccess2: UploadProps['onSuccess'] = (res) => {
  if (res.error === '') {
    images.value.push(res.data.path)
  }
  else {
    ElMessage.warning(res.error)
  }
}
const handleSuccess3: UploadProps['onSuccess'] = (res, file, fileList) => {
  if (res.error === '') {
    files.value.push({
      name: file.name,
      url: res.error === '' ? res.data.path : '',
    })
  }
  else {
    fileList.pop()
    ElMessage.warning(res.error)
  }
}

const tableData = [
  {
    image: 'https://picsum.photos/750/450',
    images: [
      'https://picsum.photos/400',
      'https://picsum.photos/600',
      'https://picsum.photos/500',
    ],
  },
  {
    image: 'https://picsum.photos/750/450',
    images: [
      'https://picsum.photos/400',
      'https://picsum.photos/600',
      'https://picsum.photos/500',
    ],
  },
  {
    image: 'https://picsum.photos/750/450',
    images: [
      'https://picsum.photos/400',
      'https://picsum.photos/600',
      'https://picsum.photos/500',
    ],
  },
  {
    image: 'https://picsum.photos/750/450',
    images: [
      'https://picsum.photos/400',
      'https://picsum.photos/600',
      'https://picsum.photos/500',
    ],
  },
]
</script>

<template>
  <div>
    <page-header title="文件上传支持拖拽！！！" />
    <page-header title="上传" content="PageHeader">
      <template #content>
        <p>ImageUpload / ImagesUpload / FileUpload</p>
        <p style="margin-bottom: 0;">
          请在本地运行并查看演示
        </p>
      </template>
    </page-header>
    <page-main title="单图上传">
      <image-upload v-model:url="image" action="https://console-mock.apipost.cn/app/mock/project/1f50f1da-5189-4282-d3c7-c133a514c5a8/upload/image" name="image" :width="250" :height="150" @on-success="handleSuccess1" />
    </page-main>
    <page-main title="多图上传（默认最多3张）">
      <images-upload v-model:url="images" action="https://console-mock.apipost.cn/app/mock/project/1f50f1da-5189-4282-d3c7-c133a514c5a8/upload/image" name="image" @on-success="handleSuccess2" />
    </page-main>
    <page-main title="文件上传（默认最多3个）">
      <file-upload :files="files" action="https://console-mock.apipost.cn/app/mock/project/1f50f1da-5189-4282-d3c7-c133a514c5a8/upload/file" @on-success="handleSuccess3" />
    </page-main>
  </div>
</template>
