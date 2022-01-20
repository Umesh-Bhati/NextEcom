import Image from 'next/image';
import React from 'react';

export default function FeatureIcon({img, title, des}) {
  return(
      <div className='flex justify-center items-center' >
          <div className="p-5 m-2 " >
          <Image height={30} width={30} src={img} alt='feature icon' />
          </div>
          <div className=' m-0 ' >
              <h2 className='text-xl font-bold' >{title}</h2>
              <p className='text-gray-600 font-semibold' >{des}</p>
          </div>
      </div>
  )
}
