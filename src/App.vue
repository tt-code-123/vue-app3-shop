<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from '@components/FooterGuide/FooterGuide'
export default {
  name: "App",
  data(){
    return {
      
    }
  },
  
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" scoped>
@import './common/stylus/mixins.styl'

</style>
