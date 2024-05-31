import React from 'react'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starwar from './../assets/Images/starwar.png'
 
import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'
import { Link } from 'react-router-dom';

function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            name:'Disney',
            image:disney,
            video:disneyV
        },
        {
            id:2,
            name:'pixar',
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            name:'Marvel',
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            name:'Starwar',
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            name:'NationalG',
            image:nationalG,
            video:nationalGeographicV
        },

    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
    {productionHouseList.map((item) => (
      <Link  to={`/movies/${item.name.toLowerCase()}`} key={item.id}>
        <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'>
          <video src={item.video} autoPlay loop playsInline muted className='absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50' />
          <img src={item.image} className='w-full z-[1] opacity-100' />
        </div>
      </Link>
    ))}
  </div>
  )
}

export default ProductionHouse