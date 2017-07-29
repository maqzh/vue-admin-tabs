<template>
  <nav class="navbar navbar-static-top">
	<!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
    	<span class="sr-only">Toggle navigation</span>
    </a>
    <!-- Search: -->
    <!-- <SidebarNavSearch></SidebarNavSearch> -->
    <!-- Navbar Right Menu -->
  	<div class="navbar-custom-menu">
    	<ul class="nav navbar-nav">
    		<!-- Messages: style can be found in dropdown.less-->
    		<HeaderNavMessage></HeaderNavMessage>
    		<!-- Notifications: style can be found in dropdown.less -->
    		<HeaderNavNoti></HeaderNavNoti>
    		<!-- Tasks: style can be found in dropdown.less -->
    		<HeaderNavTask></HeaderNavTask>
    		<!-- User Account: style can be found in dropdown.less -->
    		<HeaderNavUser></HeaderNavUser>
    		<!-- Control Sidebar Toggle Button -->
    		<HeaderNavCtrlSidebar></HeaderNavCtrlSidebar>
    	</ul>
    </div>
  </nav>
</template>

<script>
import SidebarNavSearch from '@/components/partials/header/Header-nav-search'
import HeaderNavMessage from '@/components/partials/header/Header-nav-message'
import HeaderNavNoti from '@/components/partials/header/Header-nav-notification'
import HeaderNavTask from '@/components/partials/header/Header-nav-task'
import HeaderNavUser from '@/components/partials/header/Header-nav-user'
import HeaderNavCtrlSidebar from '@/components/partials/header/Header-nav-ctrlsidebar'

export default {
  components: { SidebarNavSearch, HeaderNavMessage, HeaderNavNoti, HeaderNavTask, HeaderNavUser, HeaderNavCtrlSidebar }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
