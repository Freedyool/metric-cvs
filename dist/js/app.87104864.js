(function(t){function e(e){for(var l,s,o=e[0],i=e[1],c=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],l=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(l=!1)}l&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var l={},r={app:0},n=[];function s(e){if(l[e])return l[e].exports;var a=l[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=l,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)s.d(a,l,function(e){return t[e]}.bind(null,l));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=i;n.push(["56d7","chunk-vendors"]),a()})({"034f":function(t,e,a){"use strict";a("85ec")},"0eb2":function(t,e,a){},1465:function(t,e,a){},"1aa4":function(t,e,a){},"321f":function(t,e,a){},3714:function(t,e,a){"use strict";a("1aa4")},"4fc2":function(t,e,a){"use strict";a("afcb")},"53e8":function(t,e,a){"use strict";a("7bc3")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var l=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",[a("router-view")],1)])},n=[],s=(a("034f"),a("2877")),o={},i=Object(s["a"])(o,r,n,!1,null,null,null),c=i.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"home"},[l("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),l("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],v={name:"HelloWorld",props:{msg:String}},b=v,h=(a("7def"),Object(s["a"])(b,m,f,!1,null,"1935ec24",null)),_=h.exports,g={name:"Home",components:{HelloWorld:_}},y=g,x=Object(s["a"])(y,d,p,!1,null,null,null),k=(x.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-row",{attrs:{gutter:35,type:"flex",justify:"center"}},[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content bg-purple",attrs:{id:"cvs-editor"}},[a("h3",[t._v("cvs-editor")]),a("el-card",{attrs:{shadow:"always"}},[a(t.activate,{tag:"components",attrs:{dat:t.dat}})],1)],1)]),a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content bg-purple-light",attrs:{id:"cvs-previewer"}},[a("h3",[t._v("cvs-previewer")]),a("div",{style:{height:t.previeweHeight+"px","overflow-y":"scroll"},on:{scroll:function(e){return t.scroll(e)}}},[a("div",{staticClass:"editor-selector",attrs:{id:"base-info"}},[a("el-card",{attrs:{shadow:"always"}},t._l(t.baseInfo,(function(e){return a("div",{on:{click:function(a){return t.editorSwitch("BaseInfoEditor",e)}}},[a("BaseInfo",{attrs:{dat:e}})],1)})),0)],1),a("div",{staticClass:"editor-selector",attrs:{id:"education-level"}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"subtitle"},[t._v("教育经历")]),a("hr"),t._l(t.educationLevel,(function(e){return a("div",{on:{click:function(a){return t.editorSwitch("EducationLevelEditor",e)}}},[a("EducationLevel",{attrs:{dat:e}})],1)}))],2)],1),a("div",{staticClass:"editor-selector",attrs:{id:"intership-exper"}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"subtitle"},[t._v("实习经历")]),a("hr"),t._l(t.intershipExper,(function(e){return a("div",{on:{click:function(a){return t.editorSwitch("InternshipExperEditor",e)}}},[a("InternshipExper",{attrs:{dat:e}})],1)}))],2)],1),a("div",{staticClass:"editor-selector",attrs:{id:"club-org-exper"}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"subtitle"},[t._v("社团和组织经历")]),a("hr"),t._l(t.clubOrgExper,(function(e){return a("div",{on:{click:function(a){return t.editorSwitch("ClubOrgExperEditor",e)}}},[a("ClubOrgExper",{attrs:{dat:e}})],1)}))],2)],1),a("div",{staticClass:"editor-selector",attrs:{id:"skill-cert-other"}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{staticClass:"subtitle"},[t._v("技能/证书及其他")]),a("hr"),t._l(t.skillsCertOther,(function(e){return a("div",{on:{click:function(a){return t.editorSwitch("SkillsCertOtherEditor",e)}}},[a("SkillsCertOther",{attrs:{dat:e}})],1)}))],2)],1)]),t._v(" "+t._s(t.pos)+" ")])])],1)],1)}),w=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{id:"info-name"}},[t._v(" "+t._s(t.dat.name)+" ")]),a("div",[t._v(" "+t._s(t.dat.tel)+" | "+t._s(t.dat.email)+" | "+t._s(t.dat.livingCity)+" ")]),a("div",[t._v(" "+t._s(t.dat.gender)+" | "+t._s(t.dat.politicsStatus)+" ")]),a("div",[t._v(" "+t._s(t.dat.jobIntention)+" | "+t._s(t.dat.expectedSalary)+" ")])])},E=[],$={name:"BaseInfo",props:{dat:{}}},j=$,O=(a("3714"),Object(s["a"])(j,C,E,!1,null,null,null)),T=O.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-main"},[a("center",[t._v(" BaseInfoEditor ")]),a("el-row",{attrs:{gutter:30,type:"flex",justify:"center"}},[a("el-col",[a("div",{staticClass:"content-tag"},[t._v("姓名:")]),a("el-input",{attrs:{placeholder:"姓名"},model:{value:t.dat.name,callback:function(e){t.$set(t.dat,"name",e)},expression:"dat.name"}})],1),a("el-col",[a("div",{staticClass:"content-tag"},[t._v("电话:")]),a("el-input",{attrs:{placeholder:"电话"},model:{value:t.dat.tel,callback:function(e){t.$set(t.dat,"tel",e)},expression:"dat.tel"}})],1)],1),a("el-row",[a("el-col",[a("div",{staticClass:"content-tag"},[t._v("邮箱:")]),a("el-input",{attrs:{placeholder:"邮箱"},model:{value:t.dat.email,callback:function(e){t.$set(t.dat,"email",e)},expression:"dat.email"}})],1)],1),a("el-row",{attrs:{gutter:30,type:"flex",justify:"center"}},[a("el-col",[a("div",{staticClass:"content-tag"},[t._v("政治面貌:")]),a("el-input",{attrs:{placeholder:"性别"},model:{value:t.dat.politicsStatus,callback:function(e){t.$set(t.dat,"politicsStatus",e)},expression:"dat.politicsStatus"}})],1),a("el-col",[a("div",{staticClass:"content-tag"},[t._v("性别:")]),a("el-input",{attrs:{placeholder:"政治面貌"},model:{value:t.dat.gender,callback:function(e){t.$set(t.dat,"gender",e)},expression:"dat.gender"}})],1)],1),a("el-row",[a("el-col",[a("div",{staticClass:"content-tag"},[t._v("现居城市:")]),a("el-input",{attrs:{placeholder:"现居城市"},model:{value:t.dat.livingCity,callback:function(e){t.$set(t.dat,"livingCity",e)},expression:"dat.livingCity"}})],1)],1),a("el-row",[a("el-col",[a("div",{staticClass:"content-tag"},[t._v("求职意向:")]),a("el-input",{attrs:{placeholder:"求职意向"},model:{value:t.dat.jobIntention,callback:function(e){t.$set(t.dat,"jobIntention",e)},expression:"dat.jobIntention"}})],1)],1),a("el-row",[a("el-col",[a("div",{staticClass:"content-tag"},[t._v("期望薪资:")]),a("el-input",{attrs:{placeholder:"期望薪资"},model:{value:t.dat.expectedSalary,callback:function(e){t.$set(t.dat,"expectedSalary",e)},expression:"dat.expectedSalary"}})],1)],1)],1)},I=[],D={name:"BaseInfoEditor",props:["dat"]},L=D,N=(a("4fc2"),Object(s["a"])(L,S,I,!1,null,null,null)),M=N.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{attrs:{shadow:"hover"}},[a("el-row",[a("el-col",{staticClass:"content-left",attrs:{span:18}},[t._v(" "+t._s(t.dat.orgActName)+" ")]),a("el-col",{staticClass:"content-right",attrs:{span:6}},[t._v(" "+t._s(t.dat.startTime)+" - "+t._s(t.dat.endTime)+" ")])],1),a("el-row",[a("el-col",{staticClass:"content-left",attrs:{span:18}},[t._v(" "+t._s(t.dat.yourRole)+" "+t._s(t.dat.department)+" ")]),a("el-col",{staticClass:"content-right",attrs:{span:6}},[t._v(" "+t._s(t.dat.city)+" ")])],1),a("el-row",[a("el-col",{staticClass:"content-left",attrs:{span:24}},[t._v(" "+t._s(t.dat.experDescription)+" ")])],1)],1)},P=[],B={name:"ClubOrgExper",props:["dat"]},H=B,F=Object(s["a"])(H,A,P,!1,null,null,null),R=F.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-main"},[a("el-form",{attrs:{model:t.dat,"label-position":"right","label-width":"80px","label-suffix":":"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"组织名称"}},[a("el-input",{model:{value:t.dat.orgActName,callback:function(e){t.$set(t.dat,"orgActName",e)},expression:"dat.orgActName"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"你的角色"}},[a("el-input",{model:{value:t.dat.yourRole,callback:function(e){t.$set(t.dat,"yourRole",e)},expression:"dat.yourRole"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所在部门"}},[a("el-input",{model:{value:t.dat.department,callback:function(e){t.$set(t.dat,"department",e)},expression:"dat.department"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所在城市"}},[a("el-input",{model:{value:t.dat.city,callback:function(e){t.$set(t.dat,"city",e)},expression:"dat.city"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"起始时间"}},[a("el-date-picker",{attrs:{clearable:!1,type:"month",placeholder:"选择月","value-format":"yyyy.M"},model:{value:t.dat.startTime,callback:function(e){t.$set(t.dat,"startTime",e)},expression:"dat.startTime"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"终止时间"}},[a("el-date-picker",{attrs:{clearable:!1,type:"month",placeholder:"选择月","value-format":"yyyy.M"},model:{value:t.dat.endTime,callback:function(e){t.$set(t.dat,"endTime",e)},expression:"dat.endTime"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"经历描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.dat.experDescription,callback:function(e){t.$set(t.dat,"experDescription",e)},expression:"dat.experDescription"}})],1)],1)],1)],1)},J=[],W={name:"ClubOrgExperEditor",props:["dat"]},q=W,z=(a("53e8"),Object(s["a"])(q,V,J,!1,null,null,null)),Q=z.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{attrs:{shadow:"hover"}},[a("el-row",[a("el-col",{staticClass:"content-left",attrs:{span:18}},[t._v(" "+t._s(t.dat.school)+" ")]),a("el-col",{staticClass:"content-right",attrs:{span:6}},[t._v(" "+t._s(t.dat.admissionTime)+" - "+t._s(t.dat.graduationTime)+" ")])],1),a("el-row",[a("el-col",{staticClass:"content-left",attrs:{span:18}},[t._v(" "+t._s(t.dat.profession)+" "+t._s(t.dat.college)+" "+t._s(t.dat.education)+" ")]),a("el-col",{staticClass:"content-right",attrs:{span:6}},[t._v(" "+t._s(t.dat.city)+" ")])],1),a("el-row",[a("el-col",{staticClass:"content-left",attrs:{span:24}},[t._v(" "+t._s(t.dat.experDescription)+" ")])],1)],1)},G=[],K={name:"EducationLevel",props:["dat"]},U=K,X=(a("86f2"),Object(s["a"])(U,Y,G,!1,null,null,null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-main"},[a("el-form",{attrs:{model:t.dat,"label-position":"right","label-width":"80px","label-suffix":":"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学校"}},[a("el-input",{model:{value:t.dat.school,callback:function(e){t.$set(t.dat,"school",e)},expression:"dat.school"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"专业"}},[a("el-input",{model:{value:t.dat.profession,callback:function(e){t.$set(t.dat,"profession",e)},expression:"dat.profession"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学位"}},[a("el-select",{attrs:{placeholder:"请选择已取得的学位"},model:{value:t.dat.education,callback:function(e){t.$set(t.dat,"education",e)},expression:"dat.education"}},[a("el-option",{attrs:{label:"本科",value:"本科"}}),a("el-option",{attrs:{label:"硕士",value:"硕士"}}),a("el-option",{attrs:{label:"MBA",value:"MBA"}})],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学制"}},[a("el-select",{attrs:{placeholder:"请选择相应的学制"},model:{value:t.dat.educationSys,callback:function(e){t.$set(t.dat,"educationSys",e)},expression:"dat.educationSys"}},[a("el-option",{attrs:{label:"全日制",value:"全日制"}}),a("el-option",{attrs:{label:"非全日制",value:"非全日制"}}),a("el-option",{attrs:{label:"交流/交换",value:"交流/交换"}})],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学院"}},[a("el-input",{model:{value:t.dat.college,callback:function(e){t.$set(t.dat,"college",e)},expression:"dat.college"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所在城市"}},[a("el-input",{model:{value:t.dat.city,callback:function(e){t.$set(t.dat,"city",e)},expression:"dat.city"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"入学时间"}},[a("el-date-picker",{attrs:{clearable:!1,type:"month",placeholder:"选择月","value-format":"yyyy.M"},model:{value:t.dat.admissionTime,callback:function(e){t.$set(t.dat,"admissionTime",e)},expression:"dat.admissionTime"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"毕业时间"}},[a("el-date-picker",{attrs:{clearable:!1,type:"month",placeholder:"选择月","value-format":"yyyy.M"},model:{value:t.dat.graduationTime,callback:function(e){t.$set(t.dat,"graduationTime",e)},expression:"dat.graduationTime"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"经历描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.dat.experDescription,callback:function(e){t.$set(t.dat,"experDescription",e)},expression:"dat.experDescription"}})],1)],1)],1)],1)},et=[],at={name:"EducationLevelEditor",props:["dat"]},lt=at,rt=(a("bbf2"),Object(s["a"])(lt,tt,et,!1,null,null,null)),nt=rt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{attrs:{shadow:"hover"}},[a("el-row",[a("el-col",{staticClass:"content-left",attrs:{span:18}},[t._v(" "+t._s(t.dat.companyName)+" ")]),a("el-col",{staticClass:"content-right",attrs:{span:6}},[t._v(" "+t._s(t.dat.startTime)+" - "+t._s(t.dat.endTime)+" ")])],1),a("el-row",[a("el-col",{staticClass:"content-left",attrs:{span:18}},[t._v(" "+t._s(t.dat.jobTitle)+" "+t._s(t.dat.department)+" ")]),a("el-col",{staticClass:"content-right",attrs:{span:6}},[t._v(" "+t._s(t.dat.city)+" ")])],1),a("el-row",[a("el-col",{staticClass:"content-left",attrs:{span:24}},[t._v(" "+t._s(t.dat.experDescription)+" ")])],1)],1)},ot=[],it={name:"InternshipExper",props:["dat"]},ct=it,ut=(a("7642"),Object(s["a"])(ct,st,ot,!1,null,null,null)),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-main"},[a("el-form",{attrs:{model:t.dat,"label-position":"right","label-width":"80px","label-suffix":":"}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"公司名称"}},[a("el-input",{model:{value:t.dat.companyName,callback:function(e){t.$set(t.dat,"companyName",e)},expression:"dat.companyName"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"职位名称"}},[a("el-input",{model:{value:t.dat.jobTitle,callback:function(e){t.$set(t.dat,"jobTitle",e)},expression:"dat.jobTitle"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所在部门"}},[a("el-input",{model:{value:t.dat.department,callback:function(e){t.$set(t.dat,"department",e)},expression:"dat.department"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所在城市"}},[a("el-input",{model:{value:t.dat.city,callback:function(e){t.$set(t.dat,"city",e)},expression:"dat.city"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"入职时间"}},[a("el-date-picker",{attrs:{clearable:!1,type:"month",placeholder:"选择月","value-format":"yyyy.M"},model:{value:t.dat.startTime,callback:function(e){t.$set(t.dat,"startTime",e)},expression:"dat.startTime"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"离职时间"}},[a("el-date-picker",{attrs:{clearable:!1,type:"month",placeholder:"选择月","value-format":"yyyy.M"},model:{value:t.dat.endTime,callback:function(e){t.$set(t.dat,"endTime",e)},expression:"dat.endTime"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"经历描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.dat.experDescription,callback:function(e){t.$set(t.dat,"experDescription",e)},expression:"dat.experDescription"}})],1)],1)],1)],1)},mt=[],ft={name:"InternshipExperEditor",props:["dat"]},vt=ft,bt=(a("97fc"),Object(s["a"])(vt,pt,mt,!1,null,null,null)),ht=bt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{attrs:{shadow:"hover"}},[t._l(t.dat,(function(e,l){return a("el-row",{staticClass:"content-left"},[a("b",[t._v("⚪ "+t._s(l)+":")]),t._l(e,(function(e){return a("span",[t._v(" "+t._s(e)+", ")])}))],2)})),a("el-row"),a("el-row")],2)},gt=[],yt={name:"SkillsCertOther",props:["dat"]},xt=yt,kt=(a("5d18"),Object(s["a"])(xt,_t,gt,!1,null,null,null)),wt=kt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-main"},[a("el-form",{attrs:{model:t.dat,"label-position":"right","label-width":"80px","label-suffix":":"}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"技能"}},[a("el-input",{model:{value:t.dat.skill,callback:function(e){t.$set(t.dat,"skill",e)},expression:"dat.skill"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"证书/执照"}},[a("el-input",{model:{value:t.dat.certificateLicense,callback:function(e){t.$set(t.dat,"certificateLicense",e)},expression:"dat.certificateLicense"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"语言"}},[a("el-input",{model:{value:t.dat.language,callback:function(e){t.$set(t.dat,"language",e)},expression:"dat.language"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"兴趣爱好"}},[a("el-input",{model:{value:t.dat.hobby,callback:function(e){t.$set(t.dat,"hobby",e)},expression:"dat.hobby"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"活动"}},[a("el-input",{model:{value:t.dat.activity,callback:function(e){t.$set(t.dat,"activity",e)},expression:"dat.activity"}})],1)],1)],1)],1)},Et=[],$t={name:"SkillsCertOtherEditor",props:["dat"]},jt=$t,Ot=(a("f7c2"),Object(s["a"])(jt,Ct,Et,!1,null,null,null)),Tt=Ot.exports,St={name:"MetricCVS",components:{BaseInfo:T,BaseInfoEditor:M,ClubOrgExper:R,ClubOrgExperEditor:Q,EducationLevel:Z,EducationLevelEditor:nt,InternshipExper:dt,InternshipExperEditor:ht,SkillsCertOther:wt,SkillsCertOtherEditor:Tt},data:function(){return{pos:0,activate:"",dat:{},baseInfo:[{name:"徐卓",age:"21",tel:"19825068163",email:"miracle_ccc@outlook.com",livingCity:"南京",gender:"男",jobIntention:"JAVA开发",politicsStatus:"中共预备党员",expectedSalary:"10k"}],educationLevel:[{school:"南京信息工程大学",profession:"计算机科学与技术",education:"本科",college:"计算机与软件学院",city:"南京",admissionTime:"2018.9",graduationTime:"2022.6",experDescription:"just so so"}],intershipExper:[{companyName:"南京格物文创公司",jobTitle:"初级开发工程师",department:"技术研发部门",city:"南京",startTime:"2020.10",endTime:"2021.10",experDescription:"enjoy a lot"},{companyName:"南京瞎捣鼓科技公司",jobTitle:"初级开发工程师",department:"技术研发部门",city:"南京",startTime:"2020.10",endTime:"2021.10",experDescription:"enjoy a lot"}],clubOrgExper:[{orgActName:"南信大自行车协会",yourRole:"管理员",department:"技术部",city:"南京",startTime:"2019.12",endTime:"2022.6",experDescription:"explore my sight"}],skillsCertOther:[{skill:["Java","Python","R","Office","SQL","Visio"],certificateLicense:["驾驶证"],language:["CET-6"],hobby:["篮球🏀","自行车🚲"],activity:["服务器运维"]}]}},methods:{editorSwitch:function(t,e){this.activate=t,this.dat=e},scroll:function(t){this.pos=t.target.scrollTop,console.log("scroll",t.target.scrollTop)}},computed:{editorHeight:function(){return.2*document.documentElement.clientHeight},previeweHeight:function(){return.75*document.documentElement.clientHeight}}},It=St,Dt=(a("e2d1"),Object(s["a"])(It,k,w,!1,null,null,null)),Lt=Dt.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{gutter:35,type:"flex",justify:"center"}},[a("el-col",{attrs:{span:8}},[a("div",{staticStyle:{"background-color":"#A0CFFF",height:"400px"}},[a("h5",[t._v("router view")]),a("router-view")],1)]),a("el-col",{attrs:{span:8}},[a("div",{staticStyle:{"background-color":"#99A9BF",height:"400px"}},[a("h5",[t._v("test component")]),t._v(" msg:"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{type:"text"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),a("br"),t._v(" name:"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.baseInfo.name,expression:"baseInfo.name"}],attrs:{type:"text"},domProps:{value:t.baseInfo.name},on:{input:function(e){e.target.composing||t.$set(t.baseInfo,"name",e.target.value)}}}),a("br"),a("button",{on:{click:function(e){return t.mySwitch("/testEd",t.baseInfo)}}},[t._v("打开编辑")]),a("test",{attrs:{message:t.msg,dat:t.baseInfo}})],1)])],1)],1)},Mt=[],At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h6",[t._v("this is test.vue from components")]),t._v(" "+t._s(t.message)+" "),a("br"),t._v(" "+t._s(t.dat)+" "),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dat.name,expression:"dat.name"}],attrs:{type:"text"},domProps:{value:t.dat.name},on:{input:function(e){e.target.composing||t.$set(t.dat,"name",e.target.value)}}}),a("br")])},Pt=[],Bt={name:"test",props:["message","dat"]},Ht=Bt,Ft=Object(s["a"])(Ht,At,Pt,!1,null,null,null),Rt=Ft.exports,Vt={name:"testInd",components:{test:Rt},data:function(){return{msg:"msg in testIndex.vue",baseInfo:{name:"xz",age:21}}},methods:{mySwitch:function(t,e){this.$router.push({path:t,query:{dat:e}})}}},Jt=Vt,Wt=Object(s["a"])(Jt,Nt,Mt,!1,null,null,null),qt=Wt.exports,zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" this is testEditor form views "),a("br"),t._v(" "+t._s(t.dat)+" ")])},Qt=[],Yt={name:"testEd",computed:{dat:function(){return this.$route.query.dat}}},Gt=Yt,Kt=Object(s["a"])(Gt,zt,Qt,!1,null,null,null),Ut=Kt.exports;l["default"].use(u["a"]);var Xt=u["a"].prototype.push;u["a"].prototype.push=function(t){return Xt.call(this,t).catch((function(t){return t}))};var Zt=[{path:"*",redirect:"/metric-cvs"},{path:"/metric-cvs",name:"简历生成器",component:Lt},{path:"/test",name:"测试页",component:qt,children:[{path:"/testEd",name:"测试页子页",component:Ut}]}],te=new u["a"]({mode:"history",base:"/dist/",routes:Zt}),ee=te,ae=a("2f62");l["default"].use(ae["a"]);var le=new ae["a"].Store({state:{},mutations:{},actions:{},modules:{}}),re=a("5c96"),ne=a.n(re);a("0fae");l["default"].use(ne.a),l["default"].config.productionTip=!1,new l["default"]({router:ee,store:le,render:function(t){return t(c)}}).$mount("#app")},"5d18":function(t,e,a){"use strict";a("1465")},7642:function(t,e,a){"use strict";a("9b47")},"7bc3":function(t,e,a){},"7def":function(t,e,a){"use strict";a("8e33")},"85ec":function(t,e,a){},"86f2":function(t,e,a){"use strict";a("e738")},"8e33":function(t,e,a){},"97fc":function(t,e,a){"use strict";a("eb0a")},"99b1":function(t,e,a){},"9b47":function(t,e,a){},afcb:function(t,e,a){},bbf2:function(t,e,a){"use strict";a("0eb2")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},e2d1:function(t,e,a){"use strict";a("321f")},e738:function(t,e,a){},eb0a:function(t,e,a){},f7c2:function(t,e,a){"use strict";a("99b1")}});
//# sourceMappingURL=app.87104864.js.map