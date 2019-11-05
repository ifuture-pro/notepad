<template>
  <div>
    <i
      class="iconfont reco-account"
      v-if="pageInfo.frontmatter.author || $themeConfig.author || $site.title">
      <span>{{ pageInfo.frontmatter.author || $themeConfig.author || $site.title }}</span>
    </i>
    <i
      v-if="pageInfo.frontmatter.date"
      class="iconfont reco-date">
      <span>{{ pageInfo.frontmatter.date | formatDate }}</span>
    </i>
    <i
      v-if="$themeConfig.commentsSolution === 'valine' && (pageInfo.frontmatter.visits !== false || hideAccessNumber !== true)"
      class="iconfont reco-eye">
      <AccessNumber
        :idVal="pageInfo.path"
        :numStyle="numStyle" />
    </i>
    <i
      v-if="pageInfo.frontmatter.tags"
      class="iconfont reco-tag tags">
      <span
        v-for="(subItem, subIndex) in pageInfo.frontmatter.tags"
        :key="subIndex"
        class="tag-item"
        :class="{ 'active': currentTag == subItem }"
        @click="goTags(subItem)">
        {{subItem}}
      </span>
    </i>
  </div>
</template>

<script>
// 引入时间格式化js文件
import { fromatDateTime } from '@theme/util/formatDate.js'

export default {
  // props: ['pageInfo', 'currentTag'],
  props: {
    pageInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    currentTag: {
      type: String,
      default: ''
    },
    hideAccessNumber: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      numStyle: {
        fontSize: '.9rem',
        fontWeight: 'normal',
        color: '#999'
      }
    }
  },
  filters: {
    formatDate: function (value) {
      if (!value) return null
      return fromatDateTime(value)
    }
  },
  methods: {
    goTags (tag) {
      console.log(this.pageInfo)
      const base = this.$site.base
      window.location.href = `${base}tag/?tag=${tag}`
    }
  }
}
</script>

<style lang="stylus" scoped>
.iconfont
  display inline-block
  line-height 1.5rem
  &:not(:last-child)
    margin-right 1rem
  span
    margin-left 0.5rem
.tags
  .tag-item
    cursor pointer
    font-family Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
    &.active
      color $accentColor
    &:hover
      color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-left 0 !important
</style>
