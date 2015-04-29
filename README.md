# wechat-node-sdk
=================
微信公众平台SDK for NodeJs

## 使用详解
使用前需先打开微信帐号的开发模式，详细步骤请查看微信公众平台接口使用说明：  
微信公众平台： http://mp.weixin.qq.com/wiki/
微信企业平台： http://qydev.weixin.qq.com/wiki/

微信支付接入文档：
https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/course2_tmpl&lang=zh_CN

微信多客服：http://dkf.qq.com


##	微信公众平台Node-SDK, 官方API部分
###  @author  Kelvin <4DKelvin@gmail.com>
###  @link https://github.com/Ximyar/wechat-node-sdk
###  @version 1.0.0
###  usage:

```
    $options = {
 			'token':'tokenaccesskey', //填写你设定的key
 			'encodingaeskey':'encodingaeskey', //填写加密用的EncodingAESKey
 			'appid':'wxdk1234567890', //填写高级调用功能的app id
 			'appsecret':'xxxxxxxxxxxxxxxxxxx' //填写高级调用功能的密钥
 		};
 	  $wechat = require('wechat')
 	  $weObj = new $wechat($options);
    $weObj.valid();
    $type = $weObj.getRev().getRevType();
    switch($type) {
    		case $weObj.MSGTYPE_TEXT:
    			$weObj.text("hello, I'm wechat").reply();
    			exit;
    			break;
    		case $weObj.MSGTYPE_EVENT:
    			....
    			break;
    		case $weObj.MSGTYPE_IMAGE:
    			...
    			break;
    		default:
    			$weObj.text("help info").reply();
    }
 
    //获取菜单操作:
    $menu = $weObj.getMenu();
    //设置菜单
    $new_menu = {
    		"button":[
    				{'type':'click','name':'最新消息','key':'MENU_KEY_NEWS'},
    				{'type':'view','name':'我要搜索','url':'http://www.baidu.com'},
    		]
   	  };
    $result = $weObj.createMenu($new_menu);
 ```