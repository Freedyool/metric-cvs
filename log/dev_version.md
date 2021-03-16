# metric cvs 简历生成工具 --dev

## version 1.0

1. 组件结构重构
2. 添加了png导出和pdf导出的功能

### 组件结构重构

MetricCVS(views)
	- CVSPreviewer
		- BaseInfo
		- EducationLevel
		- InternshipExpr
		- ClubOrgExper
		- SkillsCertOther
	- CVSEditor(动态组件)
		- BaseInfoEditor
		- EducationLevelEditor
		- InternshipExprEditor
		- ClubOrgExperEditor
		- SkillsCertOtherEditor

页面内容：
- MetricCVS：组件框架大小控制、背景颜色控制
- CVSPreviewer：v-for依赖dat数组进行渲染(!!如果没有渲染内容如何处理!!)
- CVSEditor：动态组件执行渲染 依赖当前的编辑状态

功能清单：
- MetricCVS：预览模式-编辑模式切换 pdf生成
- CVSPreviewer：emit点击事件监听交由MetricCVS切换编辑模式、emit数据添加事件
- CVSEditor：emit数据添加事件、处理数据编辑数据响应

数据内容：
- MetricCVS：dat status activate()
- CVSPreviewer：dat -> [{},{}]
	- item: {}
- CVSEditor：dat -> [{},{}]
	- itemEditor: {}

?? 数据添加逻辑选择：
1. 在previewer中点击button添加，同时调用点击事件进入编辑界面
2. 在editor中点击button添加，重新加载编辑界面，同时修改的数据会被渲染到预览界面

### 添加了pdf导出功能

实现思路：html->canvas->png->pdf

使用到的js库：html2canvas.js pdf.js可自行访问官网下载使用

详情见csdn_blog链接.[]
