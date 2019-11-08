module.exports = {
  "title": "未来编写者",
  "description": "未来编写者,做好自己，做更好的自己",
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
      appId: '$valine_appId',
      appKey: '$valine_appKey',
    },
    "logo": "/head.png",
    "GAID": "UA-151103127-1",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "sidebarDepth": 2,
    "lastUpdated": "Last Updated",
    "author": "ifuture",
    "record": "For a better yourself",
    "startYear": "2019"
  },
  "markdown": {
    "lineNumbers": true,
  },
  "plugins": [
    'flowchart',
    [require('../../packages/vuepress-plugin-rss'), {
      type:['atom','rss2','podcast'],
      limit: 20,
      feedOptions : {
        title: '未来编写者',
        description: '未来编写者,做好自己，做更好的自己',
        site_url: 'https://note.ifuture.pro',
        image_url: 'https://note.ifuture.pro/head.png',
        author: '未来编写者',
        managingEditor: '未来编写者',
        webMaster: '未来编写者',
        copyright: '未来编写者',
        language: 'zh'
      }
    }]
  ]
}
