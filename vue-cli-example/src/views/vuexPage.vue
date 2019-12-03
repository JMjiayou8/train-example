<template>
  <div>
    <p class="page-title">简易vuex运用</p>
    <div>vuex设置的全局state值：{{globalState}}</div>
    <button @click="setGlobalState(2)">点击自增2</button>
  </div>

</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['globalState'])
  },
  methods: {
    ...mapMutations(['setGlobalState'])
  }

}
</script>