//封装所有路径  便于后面的维护
module.exports={
    smsCode:"/app/smsCode", //短信验证
    login:"/app/login",  //登录
    banner:"/app/banner",//首页轮播图
    appIndex:"/app/recommend/appIndex",//首页数据
    tabbar:"/app/nav/bottom",  //tabbar
    nav:"/app/nav", //九宫格,
    infor:"/app/information/index",//咨询全部内容的接口
    infoClassfiy:"/app/information/classify?",//咨询里面的tab字段
    comment:"/app/courseInfo/basis_id=",//主讲课程的详情页面
    detail:"/app/teacher/",
    course:"/app/teacher/mainCourse",//主讲课程
    book:"/app/book/classify?",//图书,
    sign:"/app/user/integral/isSign", //签到惊喜
    inter:"/integral/shop/index",//签到中的列表数据
    // signDetail:"/integral/goods/index",  //签到里面的详情
}