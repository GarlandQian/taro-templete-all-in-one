import './index.scss';

import { Button, ConfigProvider, Dialog, TextArea } from '@nutui/nutui-react-taro';
import enUS from '@nutui/nutui-react-taro/dist/locales/en-US';
import zhCN from '@nutui/nutui-react-taro/dist/locales/zh-CN';
import { useState } from 'react';

import { add, asyncAdd, minus } from '@/actions/counter';

function Index() {
  const [locale, setLocale] = useState(zhCN);
  const localeKey = locale === zhCN ? 'zhCN' : 'enUS';
  const [visible, setVisible] = useState(false);
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
  });
  const handleSwitchLocale = () => {
    setLocale(locale === zhCN ? enUS : zhCN);
  };
  const env = useEnv();
  return (
    <ConfigProvider locale={locale}>
      <div className="flex flex-col">
        <div className="text-[16px]">11</div>
        <div className="text-[40px]">222</div>
        <div className="text-[20px]">{env}</div>
      </div>
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
  );
}

export default Index;
