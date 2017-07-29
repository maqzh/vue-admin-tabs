<template>
  <ul class="sidebar-menu">
    <!-- <li class="header">{{$t('menu.header')}}</li> -->
    <li v-bind:class="item.cls" v-for="item in menuItems">
      <a href="javascript:void(0)" @click="clickMenuItem(item)">
        <i v-bind:class="item.icls"></i>
        <span>{{item.text}}</span>
        <span v-bind:class="item.scls">
          <i v-if="item.sicls&&item.sicls!=''" v-bind:class="item.sicls"></i>
          <span v-if="item.sscls&&item.sscls!=''" v-bind:class="item.sscls">{{item.sstext}}</span>
          <small v-if="item.smcls&&item.smcls!=''" v-bind:class="item.smcls">{{item.smtext}}</small>
        </span>
      </a>
      <ul v-if="item.sub&&item.sub!=null" v-bind:class="item.ulcls" v-for="sub in item.sub">
        <li>
          <a href="javascript:void(0)" @click="clickMenuItem(sub)">
            <i v-bind:class="sub.icls"></i>
            {{sub.text}}
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      menuItems: []
    }
  },
  mounted () {
    var that = this
    this.$http.get('static/server/menu.json').then(function (data) {
      that.menuItems = JSON.parse(data.bodyText)
    })
  },
  created () {
    this.$taber.$on('vue-tabs-active-change', (tab) => {
      if (tab) {
        this.selected = tab.meta.title
      } else {
        this.selected = null
      }
    })
  },
  methods: {
    clickMenuItem: function (item) {
      if (!item.component) {
        return
      }
      this.selected = item.text
      this.$taber.$add(item.name, item.text, item.component, item.tcls, item.closable)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
