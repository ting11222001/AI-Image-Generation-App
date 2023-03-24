import React from 'react';
import download from '../public/download.png';
import { downloadImage } from '../utils';
import Image from "next/image";

type Props = {
  _id: string;
  name: string;
  prompt: string;
  photo: string;
}

const Card = (props: Props) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <Image
        className="w-full h-auto object-contain rounded-xl"
        src={props.photo}
        alt={props.prompt}
        width={100}
        height={100}
      />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-black m-2 p-4 rounded-md'>
        <p className='text-white text-md overflow-y-auto prompt'>{props.prompt}</p>
        <div className='mt-5 flex justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 rounded-full bg-green-700 flex justify-center items-center object-cover 
            text-white text-xs font-bold
            '>
              {props.name[0]}
            </div>
            <p className='text-white text-sm'>{props.name}</p>
          </div>
          <button type='button' onClick={() => downloadImage(props._id, props.photo)}
            className='outline-line bg-transparent border-none'>
            <Image
              className='w-6 h-6 object-contain invert'
              src={download}
              alt='download'
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card