import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

type Props = {}

const CreatePost = (props: Props) => {
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Header />
      <div className='sm:p-8 px-4 py-8 w-full h-screen'>CreatePost</div>
    </>

  )
}

export default CreatePost