/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/46853eba2c8d7e298a8bf70a74b4d557", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  var stream=__weex_require__('@weex-module/stream');
	  var modal = __weex_require__('@weex-module/modal');
	  var navigator = __weex_require__('@weex-module/navigator');

	//var utils=require('../src/util/util.js');

	__weex_module__.exports={
	     data:function () {return {
	        name:'',
	        address:'',
	        tel:'',
	        sex:'女',
	        female:'default',
	        male:'default'
	     }},
	     created:function(){
	         var userId=this.getUrlParam('userId');
	         //console.log(userId);
	         //请求数据,渲染个人信息
	         if(userId){
	            this.name='张雅思';
	            this.tel='15677889900';
	            this.address='河北省邯郸市邱县';
	            if(this.sex==='男'){
	                this.male='active';
	                this.female='default';
	            }else{
	                this.female='active';
	                this.male='default';
	            }

	         }
	     },
	     methods:{
	          //获取url传来的参数
	          getUrlParam:function(key) {
	               var reg = new RegExp('[?|&]' + key + '=([^&]+)');
	               var match = location.search.match(reg);
	               return match && match[1];
	          },
	          validate:function(value){
	              return (value===""||value===null||value===undefined)?false:true;
	          },
	          saveData:function(){
	              //判断信息是否为空
	              if(this.validate(this.name)&&this.validate(this.address)&&this.validate(this.tel)&&this.validate(this.sex)){
	                    //点击保存后,请求存储数据
	                    stream.fetch({
	                        method:'GET',
	                        url:'',
	                        type:'jsonp',
	                        header:'',
	                        body:''
	                    },function(result){

	                    },function(error){

	                    });
	                    //保存成功后,返回上一页
	                    var params={
	                        url:'index.html?page=dist/publishTask.js',
	                        animated:'true'
	                    };
	                    navigator.push(params,function(){});

	              }else{
	                    modal.toast({'message': '信息不能为空!', 'duration': 1});
	              }
	          },
	          selectMale:function(){
	             this.male="active";
	             this.female="default";
	             this.sex='男';
	          },
	          selectFemale:function(){
	            this.female="active";
	            this.male="default";
	            this.sex='女';
	          },
	          getUserName:function(event){
	                 this.name=event.value;
	                 console.log(this.name);
	          },
	          getUserAddress:function(event){
	                 this.address=event.value;
	                 console.log(this.address);
	          },
	          getUserTel:function(event){
	                 this.tel=event.value;
	                 console.log(this.tel);
	          }
	     }

	};


	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "self-image"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": "https://img.alicdn.com/tps/i3/TB1DGkJJFXXXXaZXFXX07tlTXXX-200-200.png"
	          },
	          "classList": [
	            "upload-image"
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "reminder"
	          ],
	          "attr": {
	            "value": "上传头像"
	          }
	        }
	      ]
	    },
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "row"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "https://img.alicdn.com/tps/i3/TB1DGkJJFXXXXaZXFXX07tlTXXX-200-200.png"
	              },
	              "classList": [
	                "icon"
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "input-area",
	                "no-button"
	              ],
	              "children": [
	                {
	                  "type": "input",
	                  "attr": {
	                    "type": "text",
	                    "placeholder": "姓名限5个字内",
	                    "value": function () {return this.name}
	                  },
	                  "classList": [
	                    "input-text"
	                  ],
	                  "events": {
	                    "input": "getUserName",
	                    "change": "getUserName"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "row"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "https://img.alicdn.com/tps/i3/TB1DGkJJFXXXXaZXFXX07tlTXXX-200-200.png"
	              },
	              "classList": [
	                "icon"
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "input-area",
	                "has-btn"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": function () {return ['btn-sex', 'mr', 'btn-sex-' + (this.male)]},
	                  "events": {
	                    "click": "selectMale"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": function () {return ['btn-sex-text', 'text-' + (this.male)]},
	                      "attr": {
	                        "value": "男生"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": function () {return ['btn-sex', 'btn-sex-' + (this.female)]},
	                  "events": {
	                    "click": "selectFemale"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": function () {return ['btn-sex-text', 'text-' + (this.female)]},
	                      "attr": {
	                        "value": "女生"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "row"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "https://img.alicdn.com/tps/i3/TB1DGkJJFXXXXaZXFXX07tlTXXX-200-200.png"
	              },
	              "classList": [
	                "icon"
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "input-area",
	                "no-button"
	              ],
	              "children": [
	                {
	                  "type": "input",
	                  "attr": {
	                    "type": "text",
	                    "placeholder": "宿舍楼或寝室号等",
	                    "value": function () {return this.address}
	                  },
	                  "classList": [
	                    "input-text"
	                  ],
	                  "events": {
	                    "input": "getUserAddress",
	                    "change": "getUserAddress"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "row"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "https://img.alicdn.com/tps/i3/TB1DGkJJFXXXXaZXFXX07tlTXXX-200-200.png"
	              },
	              "classList": [
	                "icon"
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "input-area",
	                "no-button"
	              ],
	              "children": [
	                {
	                  "type": "input",
	                  "attr": {
	                    "type": "text",
	                    "placeholder": "手机号码",
	                    "value": function () {return this.tel}
	                  },
	                  "classList": [
	                    "input-text"
	                  ],
	                  "events": {
	                    "input": "getUserTel",
	                    "change": "getUserTel"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "btn-save"
	      ],
	      "events": {
	        "click": "saveData"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "btn-text"
	          ],
	          "attr": {
	            "value": "保存"
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "self-image": {
	    "height": 300,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "upload-image": {
	    "height": 100,
	    "width": 100,
	    "borderRadius": 50
	  },
	  "reminder": {
	    "fontSize": 28,
	    "color": "#4A4A4A",
	    "marginTop": 20
	  },
	  "row": {
	    "height": 120,
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "icon": {
	    "width": 30,
	    "height": 30,
	    "marginLeft": 40
	  },
	  "input-area": {
	    "width": 610,
	    "height": 120,
	    "marginLeft": 30,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#CCCCCC"
	  },
	  "no-button": {
	    "justifyContent": "center"
	  },
	  "input-text": {
	    "fontSize": 28,
	    "color": "#4A4A4A",
	    "placeholderColor": "#999999",
	    "border": "none",
	    "outline": "none"
	  },
	  "btn-save": {
	    "position": "absolute",
	    "bottom": 30,
	    "left": 30,
	    "width": 690,
	    "height": 90,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#FFFFFF",
	    "backgroundColor": "#FF9800",
	    "borderRadius": 6
	  },
	  "btn-text": {
	    "fontSize": 36
	  },
	  "has-btn": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "btn-sex": {
	    "width": 110,
	    "height": 50,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": 100
	  },
	  "btn-sex-default": {
	    "backgroundColor": "#FFFFFF",
	    "borderWidth": 1,
	    "borderColor": "#DDDDDD"
	  },
	  "btn-sex-active": {
	    "backgroundColor": "#FF9800"
	  },
	  "btn-sex-text": {
	    "fontSize": 26
	  },
	  "text-default": {
	    "color": "#999999"
	  },
	  "text-active": {
	    "color": "#FFFFFF"
	  },
	  "mr": {
	    "marginRight": 30
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/46853eba2c8d7e298a8bf70a74b4d557", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);