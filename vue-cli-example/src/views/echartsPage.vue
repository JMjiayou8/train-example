<template>
  <div>
    <div id="part2Chart"
         style="width: 525px;height:230px;background:#333;"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      part2Data: [
        {
          title: '兰州', num: 9826
        },
        {
          title: '嘉峪关', num: 8240
        },
        {
          title: '张掖', num: 8006
        },
        {
          title: '白银', num: 7845
        },
        {
          title: '天水', num: 7017
        }
      ],
    }
  },
  // created () {
  //   let self=this;
  //   self.$nextTick(()=>{
  //     self.drawPart2Chart();
  //   })
  // },
  mounted(){
    //一般依赖dom节点的操作，放在mounted函数内
    this.drawPart2Chart();
  },
  methods: {
    drawPart2Chart () {
      let myChart = this.$echarts.init(document.getElementById('part2Chart'))
      let xAxisData = this.part2Data.map(item => item.title);
      let yAxisData = this.part2Data.map(item => item.num);
      let option = {
        grid: {
          left: 80,
          top: 25,
          bottom: 40
        },
        xAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 18,
            color: '#fff'
          },
          data: xAxisData,
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
          },
          axisLabel: {
            fontSize: 18,
            color: '#fff'
          }
        },
        series: [{
          data: yAxisData,
          type: 'bar',
          barWidth: 34,

          label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 16
          }
        }]
      };
      myChart.setOption(option);
    },
  }
}
</script>
<style lang="scss" scoped>
</style>