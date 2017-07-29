<template>
  <header class="main-header">
    <!-- Logo -->
    <HeaderLogo></HeaderLogo>
    <!-- Header Navbar: style can be found in header.less -->
    <HeaderNav></HeaderNav>
  </header>
</template>

<script>
import HeaderLogo from '@/components/partials/header/Header-logo'
import HeaderNav from '@/components/partials/header/Header-nav'

export default {
  components: { HeaderLogo, HeaderNav }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  
</style>
