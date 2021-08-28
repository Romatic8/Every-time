//先引入axios
import service from "./service";
import request_ur from "./request_ur";

//封装请求方法   arg 表示参数
//获取验证码
export function smsCode(arg){
    return service({
        url:request_ur.smsCode,
        data:arg, //参数
        method:"post"
    })
}

//登录
export function login(arg){
    return service({
        url:request_ur.login,
        data:arg, //参数
        method:"post"
    })
}

//tabbar
export function tabbar(arg){
    return service({
        url:request_ur.tabbar,
        data:arg, //参数
        method:"get"
    })
}

//轮播图
export function banner(arg){
    return service({
        url:request_ur.banner,
        data:arg, //参数
        method:"get"
    })
}

//九宫格
export function nav(arg){
    return service({
        url:request_ur.nav,
        data:arg, //参数
        method:"get"
    })
}

//首页详情
export function appIndex(arg){
    return service({
        url:request_ur.appIndex,
        data:arg, //参数
        method:"get"
    })
}

//news咨询全部内容的接口
export function infor(arg){
    return service({
        url:request_ur.infor,
        data:arg, //参数
        method:"post"
    })
}

//news咨询 tab
export function infoClassfiy(arg){
    return service({
        url:request_ur.infoClassfiy,
        data:arg, //参数
        method:"get"
    })
}