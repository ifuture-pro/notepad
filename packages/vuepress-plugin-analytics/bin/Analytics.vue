<template></template>

<script>
export default {
  name: 'Analytics',
  mounted () {
    const GAID = this.$themeConfig.GAID
    const BAIDUAID = this.$themeConfig.BAIDUAID
    if (GAID) {
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GAID}`

      document.body.append(script)
      script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', `${GAID}`);
      }
    }
    if (BAIDUAID) {

      var _hmt = _hmt || [];
      const script = document.createElement('script')
      script.src = `https://hm.baidu.com/hm.js?${BAIDUAID}`

      document.body.append(script)

    }
  }
}
</script>
