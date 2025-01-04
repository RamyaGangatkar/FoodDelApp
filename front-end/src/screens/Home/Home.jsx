//Home.jsx
import React from 'react'
import './Home.css'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import Header from '../../Components/Header/Header'
import {useState} from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import FoodItemCard from '../../Components/FoodItemCard/FoodItemCard';

const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div className='home'>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home