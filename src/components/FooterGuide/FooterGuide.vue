<template>
  <div class="footer-guide">
    <span class="guide-item" @click="goto('/msite')" :class="{on:$route.path==='/msite'}">
      <span><i class="iconfont icon-waimai"></i></span>
      <span>首页</span>
    </span>
    <span class="guide-item" @click="goto('/search')" :class="{on:$route.path==='/search'}">
      <span><i class="iconfont icon-search2"></i></span>
      <span>搜索</span>
    </span>
    <span class="guide-item" @click="goto('/order')" :class="{on:$route.path==='/order'}">
      <span><i class="iconfont icon-dingdan"></i></span>
      <span>订单</span>
    </span>
    <span class="guide-item" @click="goto('/profile')" :class="{on:$route.path==='/profile'}">
      <span><i class="iconfont icon-geren"></i></span>
      <span>个人</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'FooterGuide',
    methods: {
      goto(path){
        // 编程式路由跳转
        this.$router.replace(path)
      }
    },
  }
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixins.styl'
.footer-guide
  top-border-1px(#ccc)
  display flex
  position fixed
  bottom 0
  left 0
  height 50px
  width 100%
  .guide-item
    display flex 
    flex 1
    flex-direction column
    justify-content center
    align-items center
    &.on
      color $green
    span 
      margin-top 5px
      font-size 12px
      i
        font-size 22px
</style>
