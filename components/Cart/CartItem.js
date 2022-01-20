import React,{useState} from 'react';
import Image from 'next/image';



export default function CartItem({img, title, }) {

    const [count, setCount] = useState(1)

  return <div className='w-full h-8 px-2' >
      <section className='w-1/3' >
          <Image src={img} alt='' />
      </section>
      <section className='w-1/3' >
          <h2>{title}</h2>
      </section>
      <section className='w-1/3' >
          <button>-</button>
          {count}
          <button>+</button>
      </section>
  </div>;
}
