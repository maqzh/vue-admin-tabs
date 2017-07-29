<template>
  <!-- <div class="vue-tabs">
    <div class="tabs-list-wrapper">
      <ul class="tabs-list">
        <tab v-for="tab in tabs" :tab-data="tab" @close="close(tab)" @click.native="clickTab(tab)"></tab>
      </ul>
    </div>
    <div class="tabs-content-wrapper" ref="contentWrapEl"></div>
  </div> -->
  <div class="tabs tabs--border-card">
    <div class="tabs__header">
      <div class="tabs__nav-wrap">
        <tab v-for="tab in tabs" :tab-data="tab" @close="close(tab)" @click.native="clickTab(tab)"></tab>
      </div>
    </div>
    <div class="tabs-content-wrapper" ref="contentWrapEl"></div>
  </div>
</template>
<script>
/* eslint-disable */
import {isFunction, isString, isObject, store, consts} from '@/utils/utils'
import Tab from './Tab.vue'
function tabIdGen (tabName, tabKey = '') {
  if (isObject(tabName)) {
    const {name, key = ''} = tabName
    return `${name}/${key}`
  }
  return `${tabName}/${tabKey}`
}
const EVENT_ACTIVE_CHANGE = 'vue-tabs-active-change'
const EVENT_CLOSE = 'vue-tabs-close'
const cached = {}
export default {
  components: {Tab},
  data () {
    return {
      tabs: [],
      active: null
    }
  },
  beforeCreate () {
    this.tabSize = 0
    this.tabMap = {}
  },
  created () {
    this.$taber.vm = this
  },
  mounted () {
    this.$taber.mounted()
  },
  methods: {
    appendContent (tab) {
      let Component = cached[tab.name]
      const _this = this
      let promise
      if (!Component) {
        if (isFunction(tab.meta.component)) {
          const asyncFn = tab.meta.component
          this.$set(tab, 'loading', true)
          promise = new Promise(asyncFn).then((Component) => {
            return (cached[tab.name] = _this.getVue().extend(Component))
          })
        } else {
          promise = Promise.resolve(tab.meta.component).then((Component) => {
            return (cached[tab.name] = _this.getVue().extend(Component))
          })
        }
      } else {
        promise = Promise.resolve(Component)
      }
      promise.then((Component) => {
        newInstance(Component)
      })
      return promise
      function newInstance (Component) {
        const $el = document.createElement('div')
        _this.$refs.contentWrapEl.appendChild($el)
        const instance = new Component({
          el: $el,
          __taber: _this.$taber,
          parent: _this,
          $tab: tab
        })
        tab.content = instance
        instance.$el.classList.add('tabs-content')
      }
    },
    clickTab (tab) {
      if (tab && !tab.active) {
        this.select(tab)
      }
    },
    close (tab) {
      if (!tab) {
        return
      }
      const hooks = [...this.$taber.beforeCloseHooks]
      if (tab.meta.beforeClose && isFunction(tab.meta.beforeClose)) {
        hooks.push(tab.meta.beforeClose)
      }
      hooks.push(_close)
      let i = 0
      const _this = this
      function next (target) {
        if (target == null) {
          hooks[++i].call(_this, tab, next)
        } else if (target === false) {
          return
        }
      }
      hooks[0].call(_this, tab, next)
      function _close () {
        if(tab.content){
          tab.content.$destroy()
          tab.content.$el.remove()
        }
        this.tabMap[tabIdGen(tab)] = null
        const index = this.tabs.indexOf(tab)
        if (index === -1) {
        return
        }
        this.tabs.splice(index, 1)
        if (this.tabs.length > 0 && this.active === tab) {
        if (index < this.tabs.length) {
          this.select(this.tabs[index])
        } else {
          this.select(this.tabs[this.tabs.length - 1])
        }
        } else if (this.tabs.length === 0) {
        this.$emit(EVENT_ACTIVE_CHANGE, null, tab)
        this._saveTabs()
        }
        this.$emit(EVENT_CLOSE, tab)
      }
    },
    create (tab) {
      let hooks = [...this.$taber.beforeCreateHooks]
      if (tab.meta.beforeCreate && isFunction(tab.meta.beforeCreate)) {
        hooks.push(tab.meta.beforeCreate)
      }
      let i = 0
      let _this = this
      let next = function (target) {
        if (target == null) {
          hooks[++i].call(_this, tab, next)
        } else if (target === false) {
          return
        } else {
          if (isString(target) && target === tab.name) {
            hooks[++i].call(_this, tab, next)
          } else if (isObject(target) && target.name === tab.name) {
            hooks[++i].call(_this, tab, next)
          } else {
            _this.$taber.open(target)
          }
        }
      }
      hooks.push(() => {
        this.tabs.push(tab)
        const p = this.appendContent(tab).then(() => {
            this.$set(tab, 'loading', false)
        })
        tab.promise = p
        if (tab.active !== false) {
            this.select(tab)
        } else {
            this._saveTabs()
        }
        const id = tabIdGen(tab.name, tab.key)
        this.tabMap[id] = tab
        next = null
        hooks = null
      })
      hooks[0].call(this, tab, next)
    },
    findOpenTab (name, key) {
        const id = tabIdGen(name, key)
        return this.tabMap[id]
    },
    select (tab) {
        if (!tab) {
            return
        }
        this.$set(tab, 'active', true)
        this.$emit(EVENT_ACTIVE_CHANGE, tab, this.active)
        this.active = tab
        this.tabs.forEach((ftab) => {
            if (tabIdGen(ftab.name, ftab.key) !== tabIdGen(tab.name, tab.key)) {
                this.$set(ftab, 'active', false)
                if (ftab.content && ftab.content.$el) {
                    ftab.content.$el.classList.remove('active')
                }
            }
        })
        this._saveTabs()
        let promise = tab.promise
        if (!promise) {
            promise = Promise.resolve()
        }
        promise.then(() => {
            if (tab.active && tab.content) {
                tab.content.$el.classList.add('active')
                tab.promise = null
            }
        })
    },
    _saveTabs () {
        if (!this.$taber.persist) {
            return
        }
        const toSave = this.tabs.map((v) => {
            return {
                name: v.name,
                key: v.key,
                cls: v.cls,
                closable: v.closable,
                component: v.component,
                params: v.params,
                active: v.active
            }
        })
        store.save(consts.STORE_KEY, toSave)
    }
  }
}
</script>
<style lang="less">
@import './tabs.less';
</style>