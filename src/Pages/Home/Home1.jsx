import React, {useState} from 'react';
import './Home.css'
import Header from '../../Components/Header/Header';
import ExploreMenu1 from '../../Components/ExploreMenu/ExploreMenu1';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../Components/AppDownloade/AppDownload';

const Home = () => {

  const [category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu1 category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
}

export default Home;
