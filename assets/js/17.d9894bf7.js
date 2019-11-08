(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{366:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),a("h3",{attrs:{id:"系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统"}},[s._v("#")]),s._v(" 系统")]),s._v(" "),a("h4",{attrs:{id:"查看系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看系统"}},[s._v("#")]),s._v(" 查看系统")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/lsb-release "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发行版")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/version\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#内核")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"设置时区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置时区"}},[s._v("#")]),s._v(" 设置时区")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("timedatectl set-timezone Asia/Shanghai\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"编辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑"}},[s._v("#")]),s._v(" 编辑")]),s._v(" "),a("h4",{attrs:{id:"vim中文乱码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim中文乱码"}},[s._v("#")]),s._v(" VIM中文乱码")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/vim/vimrc\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fileencodings")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf-8,ucs-bom,gb18030,gbk,gb2312,cp936\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("termencoding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf-8\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encoding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf-8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"sed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sed"}},[s._v("#")]),s._v(" sed")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s#需要替换的文字#替换后的文字#g'")]),s._v(" config.js\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/需要替换的文字/替换后的文字/g'")]),s._v(" config.js "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同上")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/匹配文字/ a换行后需要添加的文字"')]),s._v(" config.js\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")]),s._v(" Git")]),s._v(" "),a("h3",{attrs:{id:"基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[s._v("#")]),s._v(" 基础")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"# Hello World"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" README.md\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" README.md\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first commit"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USERNAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("REPO-NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"查看所有分支-包括远程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看所有分支-包括远程"}},[s._v("#")]),s._v(" 查看所有分支(包括远程)")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"删除分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[s._v("#")]),s._v(" 删除分支")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除本地分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branchname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除远程分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branchname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"新建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建分支"}},[s._v("#")]),s._v(" 新建分支")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新建分支并切换到指定分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b 本地分支名 origin/远程分支名\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新建本地远程分支，并关联")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch 本地分支名\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin 本地分支名:远程分支名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" Mysql")]),s._v(" "),a("h3",{attrs:{id:"创建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[s._v("#")]),s._v(" 创建数据库")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--创建名称为“testdb”数据库，并设定编码集为utf8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" testdb "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARSET")]),s._v(" utf8 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" utf8_general_ci"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"创建用户并授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建用户并授权"}},[s._v("#")]),s._v(" 创建用户并授权")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--创建了一个名为：test 密码为：1234 的用户")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1234'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--删除用户“test”")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--若创建的用户允许任何电脑登陆，删除用户如下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n修改用户密码\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" test "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1122'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n需要刷新\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v("  mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v("  password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1234'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--授予用户通过任意IP对数据库“testdb”的全部权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1234'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--刷新权限")]),s._v("\nflush "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n查看用户权限\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" grants "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"导入导出数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入导出数据"}},[s._v("#")]),s._v(" 导入导出数据")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导出")]),s._v("\nmysqldump -u dbuser -p 数据库名 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" dbname.sql\nmysqldump -u dbuser -p 数据库名 表名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" dbname_tables.sql\nmysqldump -u dbuser -p -d --add-drop-table dbname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("d:/dbname_db.sql\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-d 没有数据 --add-drop-table 在每个create语句之前增加一个drop table")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入")]),s._v("\nlogin mysql then:\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /home/ubuntu/dbname.sql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),a("p",[s._v("阿里DOCKER镜像加速")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/docker\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n  "registry-mirrors": ["https://slot7tfp.mirror.aliyuncs.com"]\n}\nEOF')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("阿里云私有Docker Registry")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker login --username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15010277240")]),s._v(" registry.cn-hangzhou.aliyuncs.com     //password:123123\ndocker tag "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ImageId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" registry.cn-hangzhou.aliyuncs.com/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("namespaces阿里云中创建"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像版本号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndocker push registry.cn-hangzhou.aliyuncs.com/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("namespaces阿里云中创建"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像版本号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker build -t zzz/docker-mysql .\n\ndocker run -ti --name mysql_test -e MYSQL_ROOT_PASSWORD=123456 -p3306:3306 -idt zzz/docker-mysql:latest\n\ndocker logs -f mysql_test\n\ndocker exec -it mysql_test /bin/bash\n\nmysql -uroot -p123456\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[s._v("#")]),s._v(" Kubernetes")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("//minkube\nminikube docker-env          //查看docker环境变量\nminikube dashboard\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl cluster-info          //查看集群信息\n\nkubectl get nodes            //获取节点\n\n//通过kubectl run 部署一个名为kubernetes-bootcamp的容器 --image指定容器镜像 --port指定对外暴露的端口\n//Deployment可以理解为应用\n//Pod 理解为一组容器的集合，一些息息相关的容器放在一个Pod中，同一个Pod中的容器共享IP和Port空间也就是在同一个命名空间。Pod 在Kubernetes是最小的调度单位，同一Pod中的容器始终被一起调度\nkubectl run kubernetes-bootcamp --image"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("docker.io/jocatalin/kubernetes-bootcamp:v1 --port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n\nkubectl get pods //查看当前pod     --all-namespaces\n\nkubectl describe pod etcd-global-9002d   //查看详细pod\n\n//将容器的8080端口映射到节点端口，随机分配的端口。也是创建服务\nkubectl expose deployment/kubernetes-bootcamp --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("z2 --type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NodePort"')]),s._v(" --port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n\nkubectl get services   //查看创建的服务。可以看到应用被映射到哪个端口\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" localhost:32253 //通过端口号访问应用。32253是刚才查看服务里面找到的对应端口\n\nkubectl get deployments\n\nkubectl scale deployments/kubernetes-bootcamp --replicas"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("   //增加三个副本\n\nkubectl scale deployments/kubernetes-bootcamp --replicas"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("   //删除一个副本\n\n//更新image，将v1版本升级为v2版本\nkubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" image deployments/kubernetes-bootcamp kubernetes-bootcamp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jocatalin/kubernetes-bootcamp:v2\n\nkubectl rollout undo deployments/kubernetes-bootcamp    //回退image\n\n\n//通过kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" 可以直接连接到对应的节点\nkubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" kubernetes-bootcamp-6c5cfd894b-gt6fc -it -- "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -il\nkubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" kubernetes-bootcamp-6c5cfd894b-gt6fc -it -n namespaces /bin/bash\n\n//查看Pod下对应容器的日志， 使用-f可以直接监听文件变化\nkubectl logs -f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("POD_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CONTAINER_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n//Endpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Pod Ip + ContainerPort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nkubectl get endpoints\n\nkubectl get namespace\n\n// -n namespaces -l "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("labelkey")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("labelvalue\nkubectl delete deployment -n zzz -l "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test-ubuntu\n\nkubectl run --generator"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("run-pod/v1 -n zzz -i --tty test-busybox --image"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("busybox\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])]),a("h3",{attrs:{id:"ingress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ingress"}},[s._v("#")]),s._v(" Ingress")]),s._v(" "),a("p",[s._v("k8s 网关，服务暴露")]),s._v(" "),a("ul",[a("li",[s._v("ingress-nginx deploy    "),a("a",{attrs:{href:"https://kubernetes.github.io/ingress-nginx/deploy/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://blog.csdn.net/java_zyq/article/details/82179107",target:"_blank",rel:"noopener noreferrer"}},[s._v("博客"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"微服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务"}},[s._v("#")]),s._v(" 微服务")]),s._v(" "),a("p",[s._v("分别使用Spring cloud Kubernetes微服务的实现组件")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}}),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("Spring Cloud")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("Kubernetes")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("服务发现")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Eureka , Consul")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("kube-dns Services")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("服务通讯")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Ribbon , Feign")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Thrift , grpc")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("配置管理")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Config , Bus")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("ConfigMap")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("负载均衡")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Ribbon RestTemplate")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Services , Ingress")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("网关")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Zuul , Gateway")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("链路跟踪")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Sleuth , Zipkin,Jaeger")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("OpenTracing")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("容错熔断器")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Hystrix, Sentinel")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("安全模块")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Security")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("分布式日志")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("ELK")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("ELK")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("任务管理")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Batch")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Jobs")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("分布式事务")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("seata")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),s._v(" "),a("h4",{attrs:{id:"优秀案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优秀案例"}},[s._v("#")]),s._v(" 优秀案例")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://dzone.com/articles/microservice-architecture-with-spring-cloud-and-do",target:"_blank",rel:"noopener noreferrer"}},[s._v("Microservice Architectures With Spring Cloud and Docker"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/sqshq/PiggyMetrics",target:"_blank",rel:"noopener noreferrer"}},[s._v("Microservice Architecture with Spring Boot, Spring Cloud and Docker "),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);