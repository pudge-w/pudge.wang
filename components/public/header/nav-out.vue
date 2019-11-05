<template>
  <nav v-if="show" class="nav-out">
    <li v-for="(item, index) in navList" :key="index">
      <span class="iconfont" :class="item.iconName"></span>
      <p>{{ item.title }}</p>
    </li>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          className: 'li1',
          iconName: 'icon-html5',
          title: 'HTML、CSS',
          suffix: 'css'
        },
        {
          className: 'li2',
          iconName: 'icon-js-square',
          title: 'JavaScript',
          suffix: 'js'
        },
        {
          className: 'li3',
          iconName: 'icon-vuejs',
          title: 'VUE',
          suffix: 'vue'
        },
        {
          className: 'li4',
          iconName: 'icon-react',
          title: 'React',
          suffix: 'react'
        },
        {
          className: 'li5',
          iconName: 'icon-node',
          title: 'node、其他',
          suffix: 'node'
        },
        {
          className: 'li6',
          iconName: 'icon-shiti-tianchong',
          title: '面试',
          suffix: 'interview'
        }
      ]
    }
  },
  computed: {
    show() {
      return this.$store.state.header.navOutShow;
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../../assets/css/header/nav-out.less";
</style>