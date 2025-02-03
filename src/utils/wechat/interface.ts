// 定义通用接口
export interface IWechatSDK {
  init(config: WechatConfig): Promise<void>
}

// 配置类型
export type WechatConfig = {
  appId: string
  timestamp: number
  nonceStr: string
  signature: string
  jsApiList?: string[]
}
