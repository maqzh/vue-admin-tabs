<template>
  <aside class="main-sidebar">
  	<!-- sidebar: style can be found in sidebar.less -->
  	<section class="sidebar">
		<!-- Sidebar user panel -->
		<!-- <SidebarUser></SidebarUser> -->
		<!-- search form -->
		<!-- <SidebarSearch></SidebarSearch> -->
		<!-- sidebar menu: : style can be found in sidebar.less -->
		<SidebarMenu></SidebarMenu>
	</section>
  </aside>
</template>

<script>
import SidebarUser from '@/components/partials/sidebar/Sidebar-user'
import SidebarSearch from '@/components/partials/sidebar/Sidebar-search'
import SidebarMenu from '@/components/partials/sidebar/Sidebar-menu'

export default {
  components: { SidebarUser, SidebarSearch, SidebarMenu }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
