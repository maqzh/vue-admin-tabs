<template>
  <div id="control-sidebar-theme-options-tab" class="tab-pane active">
    <div>
      <h4 class="control-sidebar-heading">{{$t('sidebar.lang.text')}}</h4>
      <div class="clearfix" v-for="item in LangItems">
        <p class="pull-left" v-bind:title="item.key"> {{item.value}} </p>
        <div class="pull-right">
          <label class="switch">
            <input type="radio" v-bind:value="item.key" v-model="lang" v-on:click="change_lang(item)">
            <span></span>
          </label>
        </div>
      </div>

      <h4 class="control-sidebar-heading">{{$t('sidebar.layout.text')}}</h4>
      <div class="clearfix" v-for="item in LayoutItems">
        <p class="pull-left" v-bind:title="item.description"> {{$t(item.text)}} </p>
        <div class="pull-right">
          <label class="switch">
            <input type="checkbox" v-model="item.model" v-on:click="change_layout(item)">
            <span></span>
          </label>
        </div>
      </div>

      <h4 class="control-sidebar-heading">{{$t('sidebar.skin.text')}}</h4>
      <ul class="list-unstyled clearfix">
        <li class="col-li" v-for="item in SkinItems">
          <a href="javascript:void(0);" v-bind:dataskin="item.dataskin" v-on:click="chnage_skin(item)" class="clearfix box-shadow-a full-opacity-hover">
            <div>
              <span v-bind:class="item.cls1"></span>
              <span v-bind:class="item.cls2"></span>
            </div>
            <div>
              <span v-bind:class="item.cls3"></span>
              <span v-bind:class="item.cls4"></span>
            </div>
          </a>
          <span v-show="item.dataskin==skin" class="pos-abt m-t-xs">
            <i class="glyphicon glyphicon-ok text-white"/>
          </span>
          <p class="text-center no-margin" style="font-size: 12px;">{{$t(item.text)}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      LangItems: [],
      LayoutItems: [],
      SkinItems: [],
      lang: {},
      skin: {}
    }
  },
  mounted () {
    var _this = this
    _this.lang = window.get('lang') || 'cn'
    this.$i18n.set(this.lang)
    _this.skin = window.get('skin') || 'skin-blue'
    $('body').addClass(_this.skin)
    this.$http.get('static/server/lang.json').then(function (response) {
      _this.LangItems = response.data
      $.each(_this.LangItems, function (i, n) {
        _this.$http.get('static/i18n/' + n.key + '.json').then(function (response) {
          _this.$i18n.add(n.key, response.data)
        })
      })
    })
    this.$http.get('static/server/layout.json').then(function (response) {
      _this.LayoutItems = response.data
      $.each(_this.LayoutItems, function (i, n) {
        n.model = window.get(n.key) === 'undefined' ? n.model : window.get(n.key)
        $('body').removeClass(n.cls)
        n.model = n.model === 'true'
        if (n.model) {
          $('body').addClass(n.cls)
        }
      })
    })
    this.$http.get('static/server/skins.json').then(function (response) {
      _this.SkinItems = response.data
    })
    $("[data-toggle='offcanvas']").click(function () {
      var sc = $('body').hasClass('sidebar-collapse')
      window.store('layout_sidebar', !sc)
    })
  },
  methods: {
    change_lang: function (item) {
      this.lang = item.key
      this.$i18n.set(item.key)
      window.store('lang', item.key)
    },
    change_layout: function (item) {
      if (item.model) {
        $('body').addClass(item.cls)
      } else {
        $('body').removeClass(item.cls)
      }
      // $('body').toggleClass(item.cls)
      window.store(item.key, item.model)
    },
    chnage_skin: function (item) {
      this.skin = item.dataskin
      $.each(this.SkinItems, function (i, n) {
        $('body').removeClass(n.dataskin)
      })
      $('body').addClass(this.skin)
      window.store('skin', this.skin)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .col-li {
   float:left;
   width: 33.33333%;
   padding: 5px;
 }
 .box-shadow-a {
   display: block; 
   box-shadow: 0 0 3px rgba(0,0,0,0.4)
 }
 .span-styled-1 {
   display:block; 
   width: 20%; 
   float: left; 
   height: 7px;
 }
 .span-styled-2 {
   display:block; 
   width: 80%; 
   float: left; 
   height: 7px;
 }
 .span-styled-3 {
   display:block; 
   width: 20%; 
   float: left; 
   height: 20px;
 }
 .span-styled-4 {
   display:block; 
   width: 80%; 
   float: left; 
   height: 20px;
 }
 .bg-367fa9 {
   background: #367fa9;
 }
 .bg-222d32 {
   background: #222d32;
 }
 .bg-222 {
   background: #222;
 }
 .bg-fefefe {
   background: #fefefe;
 }
 .bg-f9fafc { 
   background: #f9fafc;
 }
 .bg-f4f5f7 { 
   background: #f4f5f7;
 }
 .m-t-xs {
   margin-top: -20px;
   margin-left: 25px;
 }
</style>
