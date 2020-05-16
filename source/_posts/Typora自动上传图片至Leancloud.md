---
title: Typora自动上传图片至Leancloud
date: 2020-05-16 22:58
tags: [技术杂项]
categories: 技术
index_img: 'https://i.loli.net/2020/03/19/9CTQWYksxq7migH.png'
---

Typora 一个非常好用的轻巧的 Markdown 编辑工具

Leancloud 良心企业，提供开发者版本，有一定的免费资源空间可以使用

Typora [官方文档](https://support.typora.io/Upload-Image/#custom)中清楚的介绍了怎么自定义使用图片上传工具

> You could config a custom command to upload images, using tools that is not listed in above options, or event write your own tools / scripts. Typora will append all images that needs to be uploaded after the custom command you filled.  
Then, Typora will fetch image urls from the last N lines of the standard output of your custom command. (N is the number of images to upload).  
For example, if you write a tool upload-image.sh, then you can input [some path]/upload-image.sh in the command filed. Typora will call [some path]/upload-image.sh "image-path-1" "image-path-2" to upload two images located in image-path-1 and image-path-2. Then the command may return something like:  
Upload Success:  
http://remote-image-1.png  
http://remote-image-2.png  
Then Typora will get the two remote image url from the output, and replace the original local images used in the Markdown document.    
> You could click the “Test Uploader” button to verify your custom commands.

![image-20200516230921709](http://lc-3ocf2Sod.cn-n1.lcfile.com/RrWsvp2AvraaECN2aHbXCmoMYVuNaBjKdwWiNxR0.png)
效果：
![](https://support.typora.io/media/image-upload/upload.gif)

upload.sh
```shell
#!/bin/bash

base_url="apiurl/1.1/files/"
lc_id="api-id"
lc_key="api-key"

i=0
for file in "$@"
do
result[((i++))]=$(curl -X POST \
  -H "X-LC-Id: $lc_id" \
  -H "X-LC-Key: $lc_key" \
  -H "Content-Type: image/${file##*.}" \
  --data-binary "@$1"  \
  $base_url${file##*/})

done

parse_json(){
        value=`echo $1 | sed 's/.*"url":\([^,}]*\).*/\1/'`
        echo $value | sed 's/\"//g'
}

echo "Upload Success:"
for url in "${result[@]}"
do
        output=$(parse_json $url "url")
        echo $output | sed 's/\\//g'
done
```
