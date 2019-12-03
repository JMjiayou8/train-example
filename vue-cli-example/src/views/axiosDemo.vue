<template>
  <div>
    <p class="page-title">模拟请求数据样例,数据来源于https://www.jianshu.com/p/e6f072839282</p>
    <ul class="music-list">
      <li v-for="item in data"
          :key="item.name" class="music-item">
        <p class="music-title">{{item.name}},共{{item.count}}首</p>
        <img :src="item.pic_s210"
             class="imgWrap"
             alt="">
        <ul class="singer-list">
          <li v-for="(temp,index) in item.content"
              :key="index">
            {{temp.album_title}}-{{temp.title}}-{{temp.author}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { getDemoData } from '@/apis/index'
export default {
  data () {
    return {
      data: []
    }
  },
  created () {
    this.getData();
  },
  methods: {
    async getData () {
      let self = this;
      const res = await getDemoData()
      if (res.code == 200) {
        self.data = res.result || []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.music-list{
  .music-item{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .music-title{
      flex: 1;
      font-weight: bolder;
    }
    .imgWrap {
      max-width: 100px;
      margin: 0 20px;
    }
    .singer-list{
      flex:10;
    }
  }
  li{
    margin-bottom: 5px;
  }
}
</style> 


