<template>
	<!--<li :class="{'active': tabData.active, 'loading': tabData.loading}">{{tabData.meta.title}}<span class="btn-close" @click.stop="close">&times;</span></li>-->
	<div :class="{'is-active': tabData.active, 'loading': tabData.loading, 'is-closable': tabData.closable}" class="tabs__item">
		<i :class="tabData.cls"></i>{{tabData.meta.title}}
		<span :class="{'tab-icon icon-close': tabData.closable}"></span>
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
