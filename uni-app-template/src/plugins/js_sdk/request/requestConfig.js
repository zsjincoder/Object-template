import request from "./request";
import config from '@/config'
import store from "@/store";

// 全局配置的请求域名
let baseUrl =  process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
//可以new多个request来支持多个域名请求
let $http = new request({
	//接口请求地址
	baseUrl: baseUrl,
	//设置请求头（如果使用报错跨域问题，可能是content-type请求类型和后台那边设置的不一致）
	header: {
		'content-type': 'application/json;charset=UTF-8'
	},
	// 请求超时时间（默认6000）
	timeout: 3000000,
	// 默认配置（可不写）
	config: {
		// 是否自动提示错误
		isPrompt: true,
		// 是否显示加载动画
		load: true,
		// 是否使用数据工厂
		isFactory: true
	}
});

//当前接口请求数
let requestNum = 0;
//请求开始拦截器
$http.requestStart = function(options) {
	/*if (options.load) {
		if (requestNum <= 0) {
			//打开加载动画
			uni.showLoading({
				title: '加载中',
				mask: true
			});
		}
		requestNum += 1;
	}*/
    //请求前加入token
    options.header['token'] = '1123';
	return options; // return false 表示请求拦截，不会继续请求
}
//请求结束
$http.requestEnd = function(options) {
	//判断当前接口是否需要加载动画
	if (options.load) {
		requestNum = requestNum - 1;
		if (requestNum <= 0) {
			uni.hideLoading();
		}
	}
}
//登录弹窗次数
let loginPopupNum = 0;
//所有接口数据处理（可在接口里设置不调用此方法）
//此方法需要开发者根据各自的接口返回类型修改，以下只是模板
$http.dataFactory = async function(res) {
	config.httpLog &&  console.log("接口请求数据", {
		url: res.url,
		resolve: res.response,
		header: res.header,
		data: res.data,
		method: res.method,
	});
	if (res.response.statusCode && res.response.statusCode === 200) {
		let httpData = res.response.data;
		if (typeof (httpData) == "string") {
			httpData = JSON.parse(httpData);
		}
		/*********以下只是模板(及共参考)，需要开发者根据各自的接口返回类型修改*********/
		config.httpLog && console.log('接口返回结果：', JSON.stringify(httpData))
		//判断数据是否请求成功
		if (httpData.code == 0) {
			return Promise.resolve(httpData);
		} else {
            let err = {
                code: httpData.code,
                message: httpData.data,
                api: res.url,
                params: res.data,
                date: new Date()
            }
            console.log(JSON.stringify(err));
			return Promise.reject(err);
		}

		/*********以上只是模板(及共参考)，需要开发者根据各自的接口返回类型修改*********/

	} else {
        console.log('发生错误：',JSON.stringify(res.response.data));
        // 返回错误的结果(catch接受数据)
		return Promise.reject({
			statusCode: res.response.statusCode,
			errMsg: JSON.stringify(res.response.data)
		});
	}
};
// 错误回调
$http.requestError = function (e) {
	// console.log(e);
	// e.statusCode === 0 是参数效验错误抛出的
	// if (e.statusCode === 0) {
	// 	throw e;
	// } else {
	// 	uni.showToast({
	// 		title: "网络错误，请检查一下网络",
	// 		icon: "none"
	// 	});
	// }
}
export default $http;
