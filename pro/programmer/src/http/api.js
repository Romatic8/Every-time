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

//首页列表
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


//咨询主讲课程

export function detail(arg){
    return service({
        url:request_ur.detail+arg,
        data:arg, //参数
        method:"get"
    })
}

//主讲课程的详情页面
export function comment(arg){
    return service({
        url:request_ur.comment+arg,
        data:arg, //参数
        method:"get"
    })
}

//点击讲师进去后的主讲课程
export function course(arg){
    return service({
        url:request_ur.course,
        data:arg, //参数
        method:"post"
    })
}

//签到
export function userinfo(arg){
    return service({
        url:request_ur.userinfo,
        data:arg, //参数
        method:"get"
    })
}


//日历
export function sign(arg){
    return service({
        url:request_ur.sign,
        data:arg, //参数
        method:"get"
    })
}
//日历
export function datas(arg){
    return service({
        url:request_ur.datas,
        params:arg, //参数
        method:"get"
    })
}

//签到里面的好课推荐
export function inter(params){
    return service({
        url:request_ur.inter,
        params:params, //参数
        method:"get"
    })
}

//推荐中的详情
export function signDetail(arg){
    return service({
        url:request_ur.signDetail,
        data:arg, //参数
        method:"get"
    })
}


//推荐课程列表
export function sysCourse(arg){
    return service({
        url:request_ur.sysCourse+arg,
        data:arg, //参数
        method:"post"
    })
}

//二级路由的课程列表
export function attrs(arg){
    return service({
        url:request_ur.attrs,
        params:arg, //参数
        method:"get"
    })
}
//回访里面的数据
export function sysList(arg){
    return service({
        url:request_ur.sysList,
        params:arg, //参数
        method:"post"
    })
}

//图书  //tab
export function book(arg){
    return service({
        url:request_ur.book,
        params:arg, //参数
        method:"get"
    })
}
//图书列表
export function books(arg){
    return service({
        url:request_ur.books+arg,
        params:arg, //参数
        method:"get"
    })
}

//设置密码
export function password(arg){
    return service({
        url:request_ur.password,
        data:arg, //参数
        method:"post"
    })
}

//咨询里面的详情
export function inforDetail(arg){
    return service({
        url:request_ur.inforDetail,
        data:arg, //参数
        method:"post"
    })
}