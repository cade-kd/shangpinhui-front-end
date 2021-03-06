// API 统一管理

import requests from "./request";
import mockReuests from "./mockRequest";

/*
 * 三级联动接口
 * api/product/getBaseCategoryList
 * method: get
 * params: 无
 * 返回： axios请求返回结果，Promise对象
 */
export const reqCategoryList = () =>
  requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });

/**
 * 获取banner(Home首页轮播图)
 */
export const reqBannerList = () => mockReuests.get("/banner");
/**
 * 获取Floor数据
 */
export const reqFloorList = () => mockReuests.get("/floor");
/**
 * 获取搜索模块数据，请求方式post
 * 参数：全都是可选参数
 * category1Id,category2Id,category3Id
 * categoryName
 * keyword
 * pageNo
 * pageSize
 * props:[],
 * trademark
 */
export const reqSearchInfo = (params) =>
  requests({
    url: "/list",
    method: "post",
    data: params,
  });

// 获取产品详情的接口
export const reqGetGoodInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });

// 将产品添加到购物车中，或者更新某一个产品的个数
export const reqAddorUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });

// 获取验证码
export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });

//用户注册
export const reqUserRegister = (data) =>
  requests({ url: "/user/passport/register", data, method: "post" });

//登录
export const reqUserLogin = (data) =>
  requests({ url: "/user/passport/login", data, method: "post" });

// 带着token向服务器获取用户信息
export const reqUserInfo = () =>
  requests({ url: "/user/passport/auth/getUserInfo", method: "get" });

// 退出登录
export const reqUserLogout = () =>
  requests({ url: "/user/passport/logout", method: "get" });

// 获取购物车数据
export const reqCartList = () =>
  requests({ url: "/cart/cartList ", method: "get" });

// 删除购物车产品
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });

// 商品选中状态
export const reqUpdateCheckedById = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, Method: "get" });

// 获取用户地址信息
export const reqAddressInfo = () =>
  requests({
    url: "/user/userAddress/auth/findUserAddressList",
    method: "get",
  });

// 获取交易页面商品清单
export const reqOrderInfo = () =>
  requests({ url: "/order/auth/trade", method: "get" });

// 提交订单
export const reqSubmitOrder = (tradeNo, data) =>
  requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: "post",
  });

//获取支付信息
export const reqPayInfo = (orderId) =>
  requests({ url: `/payment/weixin/createNative/${orderId}`, method: "get" });

//获取支付订单状态
export const reqPayStatus = (orderId) =>
  requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: "get" });

//获取个人中心的数据
//api/order/auth/{page}/{limit}  get
export const reqMyOrderList = (page, limit) =>
  requests({ url: `/order/auth/${page}/${limit}`, method: "get" });
