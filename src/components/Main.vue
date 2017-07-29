<template>
  <div class="wrapper">
    <MyHeader></MyHeader>
    <!-- Left side column. contains the logo and sidebar -->
    <MySidebar></MySidebar>
    <!-- content-wrapper -->
    <div class="content-wrapper">
      <vue-tabs></vue-tabs>
    </div>
    <!-- Footer -->
    <MyFooter></MyFooter>
    <!-- Control Sidebar -->
    <MySidebarControl></MySidebarControl>
  </div>
</template>

<script>
import MyHeader from '@/components/partials/Header'
import MySidebar from '@/components/partials/Sidebar'
// import MyDashboard from '@/components/partials/Dashboard'
import MyFooter from '@/components/partials/Footer'
import MySidebarControl from '@/components/partials/sidebar/Sidebar-control'

export default {
  data () { // 数据
    return {
      //
    }
  },
  components: { // 组件
    MyHeader,
    MySidebar,
    // MyDashboard,
    MyFooter,
    MySidebarControl
  },
  computed: { // 数据变化时触发
    options () {
      // return this.$store.state.options
    }
  },
  methods: { // 方法
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
