// 全局样式
import './app.scss';

import { useDidHide, useDidShow } from '@tarojs/taro';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import type { PropsWithChildren } from 'react';

import configStore from '@/store';

const store = configStore();

const App = (props: PropsWithChildren) => {
 // 可以使用所有的 React Hooks
 useEffect(() => {});

 // 对应 onShow
 useDidShow(() => {});

 // 对应 onHide
 useDidHide(() => {});

 return <Provider store={store}>{props.children}</Provider>;

}

export default App;
