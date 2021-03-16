# metrc cvs 简历生成工具

基于Vue2.x和element ui的SPA

version 0.1

### VUE-Cli项目搭建

组件依赖：vue2.x、vue-cli3、vue-router、vuex、element-ui

开发工具：HBuilderX、Vue-devtools（浏览器插件）

开发流程：vue-cli创建->IDE->vue-router配置路由（index.js）->vue+el页面开发->npm install->npm run serve本地热部署

测试部署流程：修改生产环境配置vue.config.js（**重要且复杂**）->npm run build（生成dist项目子目录）->移动dist到tomcat服务器中（webapps）->通过localhost本地测试访问

生产部署流程：ftp将dist文件夹传输至云服务器->登录服务器 移动dist文件夹至tomcat服务器根目录下->通过域名yool.ltd:8080/app_name访问

### 参考资料：

- 微信读书APP：SpringBoot+VUE全站开发实战 对应github微人事开源项目 （https://github.com/lenve/vhr）
- Vue.js官方文档
- bilibili：4小时学会SpringBoot+Vue前后端分离开发
- Gitee开源项目
	- Best-Resume-Ever开源项目（https://github.com/salomonelli/best-resume-ever）
	- me个人简历开源项目 纯html+css+js实现的简历生成 （https://gitee.com/showto/me?_from=gitee_search）
- 编程狮APP：vue2.x中文文档、vue-cli中文文档
- element-ui官方文档
- 博客
	- vue-BOM对象
		- 滚动条 @scroll事件（https://blog.csdn.net/qq_33737087/article/details/88390059）
		- window对象、js内置对象常用方法整理 （https://blog.csdn.net/qq_41303423/article/details/79696485）
	- VueJs监听窗口变化
		- 基于window.onresize方法的监听 （https://blog.csdn.net/u013253924/article/details/103395697）
		- 基于window.onresize方法的监听 （https://segmentfault.com/a/1190000016512967）
		- VUE获取屏幕浏览器窗口的宽度与高度 （http://www.duanlonglong.com/qdjy/1171.html）
	- 项目部署配置文件
		- vue.config.js配置信息 （https://blog.csdn.net/qq_41303423/article/details/79696485）

### 暂时吃灰的资料：

- 开源项目学习
	- brilliant个人网站开源项目 在线简历 （https://gitee.com/liuge1988/brilliant?_from=gitee_search）
	- vue-element-admin-formCreate 基于vue-el-admin的简历填写生成 （https://gitee.com/wenqieqiu/vue-element-admin-formCreate）
	- vue2-happyfri 配合Vue.js实战的小应用（https://gitee.com/liuyuantao/vue2-happyfri）
- 博客
	- 前端js生成pdf
		- jspdf实现（https://zhuanlan.zhihu.com/p/117557509）
		- 三种方法汇总（https://www.cnblogs.com/marszhw/p/5985235.html）
		- html2canvas GitHub deemo （https://linwalker.github.io/render-html-to-pdf/demo1.html）
		- jspdf实现（https://www.jianshu.com/p/570c84ee2e8d）
	- 网站优化
		- 优化方案（https://www.cnblogs.com/zyulike/p/11190012.html）
		- cdn的使用（https://blog.csdn.net/fzsdchenbigui/article/details/107725178）
		- cdn的使用 （https://blog.csdn.net/weixin_43817709/article/details/99207972?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control&dist_request_id=1328602.71231.16152808457774755&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control）
		- vue-cli+webpack优化首页加载速度慢的问题 （https://blog.csdn.net/weixin_33716264/article/details/80228203）
- 微信读书
	- Vue.js高性能Web
	- Vue.js实战
	- Web前端学习笔记
	- JavaScript高级程序设计
	- web全栈工程师的自我修养
	- 大型网站性能优化实战
- 其它
	- vuex数据存储 + axios前后端数据交互 + 跨域/代理
	- uni-app学习
	- linux运维

### 产品阶段性评价：PC端网页支持情况还行、移动端体验较差 

### todo：pdf导出功能 工具的重新架构（uni-app） 响应式
