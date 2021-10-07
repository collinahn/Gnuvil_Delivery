import React from 'react';
import MenuCategory from './MenuCategory';
import {RouteComponentProps} from 'react-router-dom'; 
import Banner from './Banner';

const Baemin1 = ({location}: RouteComponentProps) => {
  const menus = ['1인분', '한식','분식','카페·디저트','돈까스·회·일식',
    '치킨','피자','아시안·양식','중국집','족발·보쌈','야식','찜·탕','도시락',
    '패스트푸드','맛집랭킹'];

  return (
    <div>
      <Banner items={['1','2','3','4','5','6']}/>
      <MenuCategory names={menus} path={location.pathname}/>
    </div>
  );
};

export default Baemin1;