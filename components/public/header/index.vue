<template>
  <el-row :gutter="0">
    <el-col :xs="8" :sm="6" :lg="6">
      <Logo />
    </el-col>
    <el-col :xs="8" :sm="15" :lg="11">
      <Nav class="hidden-xs-only"/>
    </el-col>
    <el-col :xs="8" :sm="3" :lg="7">
      <Search />
      <Search-m />
      <Search-s />
    </el-col>
    <el-col :xs="24" :sm="24" :lg="24">
      <SearchOut class="hidden-lg-and-up"/>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="24">
      <NavOut class="hidden-sm-and-up"/>
    </el-col>
  </el-row>
</template>

<script>
import Logo from './logo';
import Nav from './nav';
import NavOut from './nav-out';
import Search from './search';
import SearchM from './search-m';
import SearchS from './search-s';
import SearchOut from './search-out';

export default {
  components: {
    Logo,
    Nav,
    NavOut,
    Search,
    SearchM,
    SearchS,
    SearchOut
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/header/index.less";

</style>