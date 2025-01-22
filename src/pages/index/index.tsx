import './index.scss'

import { Button, ConfigProvider, Dialog, TextArea } from '@nutui/nutui-react-taro'
import enUS from '@nutui/nutui-react-taro/dist/locales/en-US'
import zhCN from '@nutui/nutui-react-taro/dist/locales/zh-CN'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'
import { decrement, increment } from '@/store/reducers/counter'

function Index() {
  const [locale, setLocale] = useState(zhCN)
  const localeKey = locale === zhCN ? 'zhCN' : 'enUS'
  const [visible, setVisible] = useState(false)
  const [translated] = useState({
    zhCN: {
      welcome: '欢迎使用 NutUI React 开发 Taro 多端项目。',
      button: '使用英文',
      open: '点击打开',
    },
    enUS: {
      welcome: 'Welcome to use NutUI React to develop Taro multi-terminal projects.',
      button: 'Use Chinese',
      open: 'Click Me',
    },
  })
  const handleSwitchLocale = () => {
    setLocale(locale === zhCN ? enUS : zhCN)
  }
  const env = useEnv()

  const count = useSelector((state: RootState) => state.counter.count) // 获取状态
  const dispatch = useDispatch() // 获取 dispatch 函数

  return (
    <ConfigProvider locale={locale}>
      <div className="flex flex-col">
        <div className="text-[16px]">111</div>
        <div className="text-[40px]">222</div>
        <div className="text-[20px]">{env}</div>
      </div>
      <div>
        <span>Count: {count}</span>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
      <Button onClick={() => Taro.navigateTo({ url: 'sub-package/pages/index/index' })}></Button>
      <div className="nutui-react-demo">
        <div>{translated[localeKey].welcome}</div>
        <div>
          <Button type="primary" onClick={handleSwitchLocale}>
            {translated[localeKey].button}
          </Button>
          <Button type="success" onClick={() => setVisible(true)}>
            {translated[localeKey].open}
          </Button>
          <Dialog
            visible={visible}
            onConfirm={() => setVisible(false)}
            onCancel={() => setVisible(false)}
          >
            {translated[localeKey].welcome}
          </Dialog>
          <TextArea disabled showCount maxLength={20} />
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Index
