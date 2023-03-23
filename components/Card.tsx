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
    <div className="rounded-xl group relative shadow-card">
      <Image
        className="w-full h-auto object-contain rounded-xl"
        src={props.photo}
        alt={props.prompt}
        width={100}
        height={100}
      />
      <div className=''></div>
    </div>
  )
}

export default Card