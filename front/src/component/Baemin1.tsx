import React from 'react';
import MenuCategory from './MenuCategory';

const Baemin1 = () => {
  const menus = ['1인분', '한식','분식','카페·디저트','돈까스·회·일식',
    '치킨','피자','아시안·양식','중국집','족발·보쌈','야식','찜·탕','도시락',
    '패스트푸드','맛집랭킹'];
  return (
    <div>
      <h1>배민1</h1>
      <p>광고란</p>
      <MenuCategory names={menus}/>
    </div>
  );
};

export default Baemin1;