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
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/4a8f1591a61deb51f03a8cec51ee77c6", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);

	;
	    var dom = __weex_require__('@weex-module/dom');
	    var stream = __weex_require__('@weex-module/stream');
	    var navigator = __weex_require__('@weex-module/navigator');
	    var modal = __weex_require__('@weex-module/modal');

	    //mock
	    var mock = {
	        "picurl": 'https://gw.alicdn.com/tps/TB1mYDWLXXXXXc7XXXXXXXXXXXX-265-265.png',
	        "name": "小马",
	        "mobile": "15677889900",
	        "address": "5号宿舍A座1203室",
	        "sex": 'female'
	    };

	    __weex_module__.exports = {
	        data: function () {return {
	            hasInfo: false,
	            female: false,
	            picurl: '',
	            uname: '',
	            utel: '',
	            uaddress: '',
	            tags: [
	                {btnId: 'btnOne', state: 'default', btnValue: '尽量中午', isSelected: false},
	                {btnId: 'btnTwo', state: 'default', btnValue: '尽量晚上', isSelected: false},
	                {btnId: 'btnThree', state: 'default', btnValue: '明天送', isSelected: false},
	                {btnId: 'btnFour', state: 'default', btnValue: '包裹很大', isSelected: false}
	            ],
	            goods: [
	                {
	                    picId: 'picOne',
	                    src: 'https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png',
	                    width: 110,
	                    height: 110,
	                    price: 2,
	                    showColor: 'gray',
	                    selected: false
	                },
	                {
	                    picId: 'picTwo',
	                    src: 'https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png',
	                    width: 50,
	                    height: 110,
	                    price: 4,
	                    showColor: 'gray',
	                    selected: false
	                },
	                {
	                    picId: 'picThree',
	                    src: 'https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png',
	                    width: 60,
	                    height: 120,
	                    price: 6,
	                    showColor: 'gray',
	                    selected: false
	                }
	            ],
	            selectTag: '', //前面三个Tag
	            otherInfo: '',//最后一个tag
	            finalTags: '',//tags最后选中的项
	            inputMessage: '',//输入框信息
	            tip: 2,//跑腿费
	            goodfees: 0,//商品费用
	            baseURL:''

	        }},
	        computed: {
	            totalfees: function () {//总费用
	                return this.tip + this.goodfees;
	            }
	        },
	        created: function () {//在实例创建之后同步调用
	            this.$getConfig(function (config) {
	                var env = config.env;
	                if (env.platform == 'iOS') {
	                    var scale = env.scale;
	                    var deviceWidth = env.deviceWidth / scale;
	                    this.navBarHeight = 64.0 * 750.0 / deviceWidth;
	                }
	            }.bind(this));

	            //debugger;
	            var bundleUrl = this.$getConfig().bundleUrl;//http://localhost:63342/publishTask/index.html?page=dist/taskDetail.js
	            bundleUrl = new String(bundleUrl);
	            //console.log('hit', bundleUrl);
	            var nativeBase;
	            var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

	            var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	            if (isAndroidAssets) {
	                nativeBase = 'file://assets/';
	            }
	            else if (isiOSAssets) {
	                // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	                // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	                nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	            }
	            else {
	                var host = 'localhost:12580';
	                var matches = /\/\/([^\/]+?)\//.exec(this.$getConfig().bundleUrl);
	                if (matches && matches.length >= 2) {
	                    host = matches[1];
	                }
	                nativeBase = 'http://' + host + '/';
	            }
	            var h5Base = './index.html?page=';
	            // in Native
	            var base = nativeBase;
	            if (typeof window === 'object') {
	                // in Browser or WebView
	                base = h5Base;
	            }
	            this.baseURL = base;

	            //发送请求,渲染用户信息
	            if (mock) {
	                this.hasInfo = true;
	                this.picurl = mock.picurl
	                this.uname = mock.name;
	                this.utel = mock.mobile;
	                this.uaddress = mock.address;
	                this.female = (mock.sex === "female" ? true : false);
	            } else {
	                this.hasInfo = false;
	            }

	            //发送请求,渲染顺便带商品
	            stream.fetch({
	                method: 'GET',
	                url: "http://jsfiddle.net/echo/jsonp/?callback=anything&result=content_in_response",
	                type: 'jsonp'
	            }, function (data) {
	                console.log("success:" + data);//返回值data必须是object
	            }, function (error) {
	                console.log("fail:" + error);
	            });
	        },
	        ready: function () {//在编译结束和$el第一次插入文档之后调用
	            this.ctHeight = this.$getConfig().env.deviceHeight;
	            var btnNode = this.$el('btnThree');//获取元素
	            //更新第三个btn-tag的样式
	            dom.updateStyle(btnNode, {marginRight: 0});
	        },
	        methods: {
	            addSelfInfo: function () {
	                //跳转到另外一个页面
	                var params = {
	                    'url': this.baseURL+'dist/selfInfo.js?userId=1',
	                    'animated': 'true',
	                };
	                navigator.push(params, function (e) {
	                    //callback
	                    // alert('ok');
	                });
	                //填写玩信息后,返回

	            },
	            selectTag: function (event) {
	                //获取选中button的文本,并存储于数组
	                //debugger;
	                var self = this,
	                        target = event.target,
	                        id = target.attr.dataId,
	                        index = target.attr.dataIndex,
	                        parentNode = this.$(id),
	                        curTag = self.tags[index],
	                        len = self.tags.length - 1;
	                if (curTag.isSelected) {
	                    curTag.state = 'default';
	                    curTag.isSelected = false;
	                    if (index === len) {
	                        self.otherInfo = '';
	                    } else {
	                        self.selectTag = '';
	                    }
	                } else {
	                    curTag.state = 'active';
	                    curTag.isSelected = true;
	                    if (index === len) {
	                        self.otherInfo = parentNode.value;
	                    } else {
	                        self.selectTag = parentNode.value;
	                        //其他二个tag不在选中
	                        this.tags.forEach(function (items, curIndex) {
	                            if (curIndex !== index && curIndex !== len) {
	                                self.tags[curIndex].state = 'default';
	                                self.tags[curIndex].isSelected = false;
	                            }
	                        });
	                    }
	                }

	                this.finalTags = this.selectTag + ";" + this.otherInfo;
	            },
	            inputText: function (event) {
	                //获取输入框的内容,并存储
	                this.inputMessage = event.value;
	                //console.log(this.inputMessage);

	            },
	            selectGoods: function (e) {
	                //debugger;
	                //选择顺便带的商品,并存储
	                var id = e.target.attr.dataId,
	                        parentNode = this.$(id),
	                        price = parentNode.money;
	                if (parentNode.selected) {
	                    parentNode.color = 'gray';
	                    parentNode.selected = false;
	                    this.goodfees -= price;
	                } else {
	                    parentNode.color = 'orange';
	                    parentNode.selected = true;
	                    this.goodfees += price;

	                }

	            },
	            publishTask: function () {
	                //提交请求发布跑腿任务

	                //提交成功,跳转到任务详情页

	                if (this.inputMessage !== '') {
	                    modal.toast({'message': '发布成功!', 'duration': 1});
	                    var params={
	                        'url':this.baseURL+'dist/taskDetail.js',
	                        'animated':'true'
	                    }
	                    navigator.push(params,function () {

	                    });
	                }else{
	                    modal.toast({'message': '备注信息不能为空!', 'duration': 1});
	                }

	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "xm-header",
	      "attr": {
	        "hasinfo": function () {return this.hasInfo},
	        "female": function () {return this.female},
	        "picurl": function () {return this.picurl},
	        "uname": function () {return this.uname},
	        "utel": function () {return this.utel},
	        "uaddress": function () {return this.uaddress}
	      },
	      "events": {
	        "click": "addSelfInfo"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "gap"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "panel"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title-name"
	              ],
	              "attr": {
	                "value": "捎句话"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "btn-container"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "repeat": function () {return this.tags},
	              "attr": {
	                "dataId": function () {return this.btnId},
	                "dataIndex": function () {return this.$index}
	              },
	              "events": {
	                "click": "selectTag"
	              },
	              "children": [
	                {
	                  "type": "xm-button",
	                  "id": function () {return this.btnId},
	                  "attr": {
	                    "default": function () {return this.state},
	                    "value": function () {return this.btnValue}
	                  },
	                  "classList": [
	                    "btn-tag"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "input",
	              "attr": {
	                "type": "text",
	                "placeholder": "时间/地点/内容，填写清楚哦~限100字",
	                "value": function () {return this.inputMessage}
	              },
	              "classList": [
	                "input-container"
	              ],
	              "events": {
	                "input": "inputText",
	                "change": "inputText"
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "btn-package"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "btn-content"
	                  ],
	                  "attr": {
	                    "value": "@我的包裹侠"
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
	        "panel"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title-name"
	              ],
	              "attr": {
	                "value": "顺便带"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "goods"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {
	                "dataId": function () {return this.picId}
	              },
	              "repeat": function () {return this.goods},
	              "events": {
	                "click": "selectGoods"
	              },
	              "children": [
	                {
	                  "type": "xm-image",
	                  "id": function () {return this.picId},
	                  "attr": {
	                    "picurl": function () {return this.src},
	                    "imgwidth": function () {return this.width},
	                    "imgheight": function () {return this.height},
	                    "money": function () {return this.price},
	                    "color": function () {return this.showColor},
	                    "selected": function () {return this.selected}
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
	        "panel"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title-name"
	              ],
	              "attr": {
	                "value": "感谢红包"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "total-money"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "money-value"
	              ],
	              "attr": {
	                "value": function () {return this.totalfees}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "money-unit"
	              ],
	              "attr": {
	                "value": "元"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "money-detail"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "details"
	              ],
	              "attr": {
	                "value": function () {return '（含跑腿费' + (this.tip) + '元，商品费' + (this.goodfees) + '元）'}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "btn-call"
	      ],
	      "events": {
	        "click": "publishTask"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "call-text"
	          ],
	          "attr": {
	            "value": "召唤包裹侠"
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "gap": {
	    "height": 20,
	    "backgroundColor": "#F6F6F6"
	  },
	  "panel": {
	    "paddingTop": 40,
	    "paddingLeft": 30,
	    "paddingRight": 30
	  },
	  "title-name": {
	    "fontSize": 30,
	    "color": "#2B3B53"
	  },
	  "btn-container": {
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "marginTop": 30
	  },
	  "btn-tag": {
	    "marginRight": 20,
	    "marginBottom": 20
	  },
	  "btn-call": {
	    "position": "fixed",
	    "bottom": 30,
	    "left": 30,
	    "width": 690,
	    "height": 90,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "backgroundColor": "#FF9800",
	    "borderRadius": 6
	  },
	  "call-text": {
	    "fontSize": 36,
	    "color": "#FFFFFF"
	  },
	  "input-container": {
	    "width": 690,
	    "height": 180,
	    "fontSize": 28,
	    "placeholderColor": "#A5A5A5",
	    "color": "#2B3B53",
	    "border": "none",
	    "backgroundColor": "#F6F6F6",
	    "borderRadius": 6
	  },
	  "btn-package": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 20,
	    "width": 180,
	    "height": 60,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "backgroundColor": "#FF9800",
	    "borderRadius": 6
	  },
	  "btn-content": {
	    "color": "#FFFFFF",
	    "fontSize": 26
	  },
	  "goods": {
	    "flexDirection": "row",
	    "flexWrap": "wrap"
	  },
	  "total-money": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#444444",
	    "marginTop": 50
	  },
	  "money-value": {
	    "fontSize": 100,
	    "marginRight": 16
	  },
	  "money-unit": {
	    "fontSize": 28
	  },
	  "money-detail": {
	    "marginTop": 30,
	    "paddingBottom": 200,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "details": {
	    "fontSize": 24,
	    "color": "#999999"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/4a8f1591a61deb51f03a8cec51ee77c6", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/xm-header", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            hasInfo: true,
	            female: true,
	            picurl: 'https://gw.alicdn.com/tps/TB1mYDWLXXXXXc7XXXXXXXXXXXX-265-265.png',
	            uname: '小马',
	            utel: '15677889900',
	            uaddress: '昆明理工大学恬园7-312'
	        }}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "list"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.picurl}
	          },
	          "classList": [
	            "self-icon"
	          ]
	        },
	        {
	          "type": "image",
	          "attr": {
	            "src": "https://gw.alicdn.com/tps/TB1J7YDLXXXXXXHXpXXXXXXXXXX-48-48.png"
	          },
	          "classList": [
	            "self-sex"
	          ],
	          "shown": function () {return this.female}
	        },
	        {
	          "type": "image",
	          "attr": {
	            "src": "https://gw.alicdn.com/tps/TB1renfLXXXXXblaXXXXXXXXXXX-48-48.png"
	          },
	          "classList": [
	            "self-sex"
	          ],
	          "shown": function () {return !this.female}
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "self-info"
	      ],
	      "shown": function () {return this.hasInfo},
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "contact-container"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "self-name"
	              ],
	              "attr": {
	                "value": function () {return this.uname}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "self-tel"
	              ],
	              "attr": {
	                "value": function () {return this.utel}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "address-container"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "self-address"
	              ],
	              "attr": {
	                "value": function () {return this.uaddress}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "no-self-info"
	      ],
	      "shown": function () {return !this.hasInfo},
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "no-reminder"
	          ],
	          "attr": {
	            "value": "请填写个人信息"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "arr-right"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": "https://gw.alicdn.com/tps/TB18riSMVXXXXa2apXXXXXXXXXX-17-31.png"
	          },
	          "classList": [
	            "arr-r"
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "list": {
	    "height": 180,
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "self-sex": {
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "width": 32,
	    "height": 32
	  },
	  "self-icon": {
	    "width": 98,
	    "height": 100,
	    "borderRadius": 50,
	    "marginLeft": 30
	  },
	  "self-info": {
	    "flexDirection": "column",
	    "marginLeft": 33
	  },
	  "contact-container": {
	    "height": 32,
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "self-name": {
	    "fontSize": 32,
	    "color": "#444444"
	  },
	  "self-tel": {
	    "fontSize": 28,
	    "color": "#999999",
	    "marginLeft": 30
	  },
	  "address-container": {
	    "marginTop": 20
	  },
	  "self-address": {
	    "fontSize": 28,
	    "color": "#999999"
	  },
	  "no-self-info": {
	    "marginLeft": 33
	  },
	  "no-reminder": {
	    "fontSize": 32,
	    "color": "#CCCCCC"
	  },
	  "arr-right": {
	    "position": "absolute",
	    "right": 30,
	    "bottom": 75
	  },
	  "arr-r": {
	    "width": 15,
	    "height": 29
	  }
	})
	})

/***/ },
/* 2 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/xm-button", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	__weex_module__.exports={
	data:function () {return {
	    default:'default',
	    value:'尽量晚上'
	}}
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.default)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-text', 'text-' + (this.default)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "btn": {
	    "width": 210,
	    "height": 50,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": 100
	  },
	  "btn-default": {
	    "backgroundColor": "#FFFFFF",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#DDDDDD"
	  },
	  "btn-active": {
	    "backgroundColor": "#FF9800"
	  },
	  "btn-text": {
	    "fontSize": 26
	  },
	  "text-default": {
	    "color": "#999999"
	  },
	  "text-active": {
	    "color": "#FFFFFF"
	  }
	})
	})

/***/ },
/* 3 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/xm-image", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	__weex_module__.exports={
	    data:function () {return {
	    picUrl:'https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png',
	    imgwidth:110,
	    imgheight:110,
	    money:2,
	    color:'orange',
	    selected:true
	    }}
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": function () {return ['imageShow', 'border-' + (this.color)]},
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.picUrl}
	          },
	          "style": {
	            "width": function () {return this.imgwidth},
	            "height": function () {return this.imgheight}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "triangle"
	          ],
	          "shown": function () {return this.selected},
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "https://gw.alicdn.com/tps/TB1Zz1UMVXXXXXVaFXXXXXXXXXX-18-13.png"
	              },
	              "classList": [
	                "right-icon"
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['imageTitle', 'money-' + (this.color)]},
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "icon"
	          ],
	          "attr": {
	            "value": "¥"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "money"
	          ],
	          "attr": {
	            "value": function () {return this.money}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "width": 150,
	    "marginTop": 30,
	    "marginRight": 30
	  },
	  "imageShow": {
	    "width": 150,
	    "height": 150,
	    "borderRadius": 6,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "border-gray": {
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#DDDDDD"
	  },
	  "border-orange": {
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#FF9800",
	    "overflow": "hidden"
	  },
	  "imageTitle": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "flex-end",
	    "marginTop": 15
	  },
	  "money-gray": {
	    "color": "#444444"
	  },
	  "money-orange": {
	    "color": "#FF9800"
	  },
	  "icon": {
	    "fontSize": 24
	  },
	  "money": {
	    "fontSize": 30,
	    "marginLeft": 4
	  },
	  "triangle": {
	    "position": "absolute",
	    "bottom": 0,
	    "right": 0,
	    "width": 0,
	    "height": 0,
	    "borderWidth": 20,
	    "borderStyle": "solid",
	    "borderRightColor": "#FF9800",
	    "borderBottomColor": "#FF9800",
	    "borderLeftColor": "rgba(0,0,0,0)",
	    "borderTopColor": "rgba(0,0,0,0)"
	  },
	  "right-icon": {
	    "position": "absolute",
	    "bottom": -15,
	    "width": 16,
	    "height": 11
	  }
	})
	})

/***/ }
/******/ ]);