import { FC } from 'react';
import Introduce from '../components/Introduce';

const Home: FC = () => {
  return (
    <Introduce
      name='ゆめきち'
      body='専門学校生です。\n主にインフラを勉強しています。'
      links={[
        { name: 'Twitter', path: 'https://twitter.com/yumekiti1204', img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png' },
        { name: 'GitHub', path: 'https://github.com/yumekiti', img: 'https://img.icons8.com/ios-filled/50/000000/github.png' }
      ]}
    />
  );
}

export default Home;