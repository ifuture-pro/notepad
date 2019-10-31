<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">Take me home.</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `这里啥也没有啊`,
  `我怎么跑到这里来的?`,
  `That's a Four-Oh-Four.`,
  `这个页面已经没有了`
]

export default {
  computed: {
    noFoundPageByTencent () {
      return this.$themeConfig.noFoundPageByTencent !== false
    }
  },
  mounted () {
  },
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
.content {
  margin 4rem auto 0
  max-width 800px
  padding 0 2rem
}
</style>

