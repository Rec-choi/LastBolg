<!--
 * @Author: “Rec-choi” “1820758693@qq.com”
 * @Date: 2023-01-02 23:47:47
 * @LastEditors: “Rec-choi” “1820758693@qq.com”
 * @LastEditTime: 2023-01-02 23:48:00
 * @FilePath: \KAUNGJIA\src\components\MyEcharts.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script>
import * as echarts from 'echarts'

const idGen = () => {
  return new Date().getTime()
}

export default {

  props: {

    height: {
      type: String,
      default: '400px',
    },
    width: {
      type: String,
      default: '600px',
    },

    options: {
      type: Object,
      default: null,
    },

  },

  data() {
    return {
      uuid: null,
      myChart: null,
    }
  },

  computed: {

    style() {
      return {
        height: this.height,
        width: this.width,
      }
    },

  },

  watch: {

    width(a, b) {
      if (this.myChart) {
        setTimeout(() => {
          this.myChart.resize({
            animation: {
              duration: 300,
            },
          })
        }, 0)
      }
    },

    options() {
      if (this.myChart) {
        this.myChart.setOption(this.options, {
          notMerge: true,
        })
      }
    },
  },

  created() {
    this.uuid = idGen()
  },

  mounted() {
    // 准备实例
    this.myChart = echarts.init(document.getElementById(this.uuid))

    // 应用配置项
    this.myChart.setOption(this.options)
  },
}
</script>

<template>
  <div :id="uuid" :style="style" />
</template>
