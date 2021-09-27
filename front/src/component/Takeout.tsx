import React from 'react';
import MenuTabs from './MenuTabs';

const Takeout = () => {
  const menus = ['한식','분식','카페·디저트','돈까스·회·일식', '치킨','피자',
  '아시안·양식','중국집','족발·보쌈','야식','찜·탕','도시락', '패스트푸드','맛집랭킹'];
  return (
    <div>
      <h1>포장</h1>
      <p>포장 탭</p>
      <MenuTabs names={menus}/>
    </div>
  );
};

export default Takeout;