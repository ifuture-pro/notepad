module.exports = {
  "title": "未来编写者",
  "description": "做好自己",
  //"base": "/notepad/",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "关于",
            "link": "/views/other/about.html",
            "icon": "reco-account"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "valineConfig": {
      appId: 'ye1OoWUwxvVJ0CYfkOeSev7E-gzGzoHsz',
      appKey: 'PNcuKvg9I0fUCdLVWTITSmBQ',
    },
    "logo": "/head.png",
    "GAID": "UA-151103127-1",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "ifuture",
    "record": "For a better yourself",
    "startYear": "2019"
  },
  "markdown": {
    "lineNumbers": true
  }
}
