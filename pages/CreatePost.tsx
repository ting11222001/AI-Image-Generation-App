import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { preview } from '../public/preview.png';
import { getRandomPrompt } from '../utils';
import FormField from "@/components/FormField";
import Loader from "@/components/Loader";

type Props = {}

const CreatePost = (props: Props) => {
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => { }
  const handleChange = () => { }
  const handleSurpriseMe = () => { }

  return (
    <>
      <Header />
      <div className='max-w-7xl mx-auto sm:p-8 px-4 py-8 w-full'>
        <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
          <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Create imaginative and visually stunning images generated through DALL-E AI and share them with the community</p>
        </div>

        <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <FormField
              labelName="Your Name"
              type="text"
              name="name"
              placeholder="Ex., john doe"
              value={form.name}
              handleChange={handleChange}
            />
            <FormField
              labelName="Prompt"
              type="text"
              name="prompt"
              placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />

            <div></div>
          </div>
        </form>
      </div>


    </>

  )
}

export default CreatePost