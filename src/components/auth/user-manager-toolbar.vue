<template>
	<div class="toolbar">
		<i class="glyphicon glyphicon-plus" @click="addUser"></i>
		<i class="glyphicon glyphicon-save" @click="editUser"></i>
		<i class="glyphicon glyphicon-remove" @click="deleteUser"></i>
	</div>
</template>
<script>
import { mapState, mapActions } from 'Vuex'
export default {
  computed: {
    ...mapState({
      activeUser: state => state.activeUser
    })
  },
  methods: {
    ...mapActions({
      addUser: 'addUser',
      editUser: 'editUser',
      deleteUser: 'deleteUser'
    })
  }
}
</script>
