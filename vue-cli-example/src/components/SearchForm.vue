<template>
  <div class="searchWrap">
    <p class="searchTitle">{{searchTitle}}</p>
    <el-form :inline="true"
             :model="queryData"
             size="mini">
      <el-row :gutter="20">
        <el-col :lg="8"
                :md="8"
                :sm="12"
                :xs="24"
                v-for="item in config"
                :key="item.key">
          <el-form-item :label="item.title"
                        :label-width="pageConfig.labelWidth">
            <el-select v-if="item.type === 'select'"
                       v-model="queryData[item.key]"
                       :placeholder="`请选择${item.title}`"
                       clearable>
              <el-option value="-1"
                         :label="`请选择${item.title}`"></el-option>
              <el-option v-for="option in selectOption[item.cKey]"
                         :key="option.PARAM_VALUE"
                         :value="option.PARAM_VALUE"
                         :label="option.PARAM_NAME"></el-option>
            </el-select>
            <el-date-picker v-else-if="item.type === 'date'"
                            v-model="queryData[item.key]"
                            type="date"
                            :placeholder="`请选择${item.title}`">
            </el-date-picker>
            <el-date-picker v-else-if="item.type === 'daterange'"
                            v-model="queryData[item.key]"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
            <el-input v-else
                      v-model="queryData[item.key]"
                      :placeholder="`请输入${item.title}`"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="searchBtn"
               :style="'padding-left:'+(pageConfig.labelWidth)">
            <el-button type="save"
                       @click="search">查询</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    queryParam: Object,
    config: Array,
    searchTitle: String,
    selectOption: Object,
    pageConfig: {
      type: Object,
      default: () => {
        return {
          labelWidth: "90px"
        };
      }
    }
  },

  computed:{
    queryData:function(){
      console.log(JSON.parse(JSON.stringify(this.queryParam)))
      return this.queryParam;
      // return JSON.parse(JSON.stringify(this.queryParam))
    }
  },
  methods: {
    search () {
      this.$emit("getTableData", this.queryData);
    }
  }
};
</script>
