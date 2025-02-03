import wx from 'weixin-js-sdk'

import { IWechatSDK, WechatConfig } from './interface'

// 微信公众号实现
export class WebBaseWechat implements IWechatSDK {
  async init(config: WechatConfig) {
    await new Promise<void>((resolve, reject) => {
      wx.config({
        ...config,
        debug: process.env.NODE_ENV !== 'production',
        jsApiList: (config.jsApiList || [
          'updateAppMessageShareData',
          'updateTimelineShareData',
        ]) as any[],
      })

      wx.ready(() => resolve())
      wx.error((err) => reject(err))
    })
  }
}

// 微信小程序实现
export class MiniBaseProgramWechat implements IWechatSDK {
  async init() {
    // 小程序不需要初始化JS-SDK
    return Promise.resolve()
  }
}
