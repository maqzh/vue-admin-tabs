<template>
	<!--<li :class="{'active': tabData.active, 'loading': tabData.loading}">{{tabData.meta.title}}<span class="btn-close" @click.stop="close">&times;</span></li>-->
	<div :class="{'is-active': tabData.active, 'loading': tabData.loading, 'is-closable': tabData.closable}" class="tabs__item">
		<i v-if="tabData.cls" :class="tabData.cls" class="item-icon"></i>{{tabData.meta.title}}
		<span v-if="tabData.closable" class="tab-icon icon-close" @click.stop="close"></span>
	</div>
</template>
<script>
export default {
  props: {
    tabData: Object
  },
  methods: {
    close () {
      this.$emit('close', this.tabData)
    }
  }
}
</script>
