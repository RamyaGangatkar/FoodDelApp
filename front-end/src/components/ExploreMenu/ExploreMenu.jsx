import React from 'react'
import {menu_list} from '../../assets/assets'
import './ExploreMenu.css'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu">
        <h1>Explore Our Menu</h1>
        <p  className="explore-menu-text">choose from our wide range of delicilous food</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                    return(
                        <div onClick={()=>{ setCategory(category=>category===item.menu_name?'All':item.menu_name)}} key=      {index}     className="explore-menu-list-item">
                            <img src={item.menu_image} className={category===item.menu_name?'active':''} alt=""/>
                            <p>{item.menu_name}</p>
                            </div>

                    )
                })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu