<template>
  <aside class="control-sidebar control-sidebar-dark">
  	<!-- Create the tabs -->
  	<ul class="nav nav-tabs nav-justified control-sidebar-tabs">
  	  <SidebarCtrlHeaderOptions></SidebarCtrlHeaderOptions>
      <SidebarCtrlHeaderHome></SidebarCtrlHeaderHome>
      <SidebarCtrlHeaderSettings></SidebarCtrlHeaderSettings>
  	</ul>
  	<!-- Tab panes -->
  	<div class="tab-content">
  		<SidebarCtrlContentOptions></SidebarCtrlContentOptions>
      <SidebarCtrlContentHome></SidebarCtrlContentHome>
      <SidebarCtrlContentSettings></SidebarCtrlContentSettings>
  	</div>
  </aside>
</template>

<script>
import SidebarCtrlHeaderOptions from '@/components/partials/sidebar/Sidebar-control-header-options'
import SidebarCtrlContentOptions from '@/components/partials/sidebar/Sidebar-control-content-options'
import SidebarCtrlHeaderHome from '@/components/partials/sidebar/Sidebar-control-header-home'
import SidebarCtrlContentHome from '@/components/partials/sidebar/Sidebar-control-content-home'
import SidebarCtrlHeaderSettings from '@/components/partials/sidebar/Sidebar-control-header-settings'
import SidebarCtrlContentSettings from '@/components/partials/sidebar/Sidebar-control-content-settings'

export default {
  components: {
    SidebarCtrlHeaderOptions,
    SidebarCtrlContentOptions,
    SidebarCtrlHeaderHome,
    SidebarCtrlContentHome,
    SidebarCtrlHeaderSettings,
    SidebarCtrlContentSettings
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
