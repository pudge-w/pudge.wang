<template>
  <div class="button-grounp">
    <div class="g-left" @click="changeOutSearch">
      <span class="iconfont icon-fangdajing" v-if="!searchOutShow"></span>
      <span class="iconfont icon-guanbi" v-else></span>
    </div>
    <div class="g-right" :class="{rightActive: outListShow}" @click="changeNav">
      <span class="iconfont icon-liebiao" v-if="!outListShow"></span>
      <span class="iconfont icon-guanbi" v-else></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    searchOutShow() {
      return this.$store.state.header.searchOutShow;
    },
    outListShow() {
      return this.$store.state.header.navOutShow;
    }
  },
  methods: {
    changeOutSearch() {
      if (this.searchOutShow) {
        this.$store.commit('header/change', false)
      } else {
        this.$store.commit('header/change', true)
      }
    },
    changeNav() {
      if (this.outListShow) {
        this.$store.commit('header/showNavOut', false)
      } else {
        this.$store.commit('header/showNavOut', true)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../assets/css/header/search-s.less';
</style>