<template>
  <div>
    <p class="page-title">引入elemet-ui</p>
    <p class="page-title">官方例子</p>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>

    </el-row>
    <p class="page-title">自封装查询区域组件样例</p>
    <SearchForm :queryParam="pageQueryParam"
                :config="pageQueryParamConfig"
                @getTableData="changePage"
                :searchTitle="'报文查询'"></SearchForm>
    <p>绑定的form数据:<br>{{parseData}}</p>
  </div>

</template>
<script>
import SearchForm from "@/components/SearchForm";
export default {
  components: { SearchForm },
  data () {
    return {
      pageQueryParam: {
        demandCode: "",
        demandName: "",
        demandDate: "",
        demandType: '',
        page: 1,
        pageSize: 100
      },
      pageQueryParamConfig: [
        {
          key: "demandCode",
          title: "需求编码"
        },
        {
          key: "demandName",
          title: "需求名称"
        },
        {
          key: "demandType",
          type: 'select',
          title: "需求类型",
          options: [
            {
              title: '类型一',
              value: 1,
            },
            {
              title: '类型二',
              value: 2,
            }
          ]
        },
        {
          key: "demandDate",
          title: "时间",
          type: "date"
        }
      ],
    }
  },
  computed: {
    parseData () {
      return JSON.stringify(this.pageQueryParam)
    }
  },
  methods: {
    changePage (data) {
      this.pageQueryParam = data;
      //todo 查询事件
    }
  }
}
</script>