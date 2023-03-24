import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import preview from '../public/preview.png';
import { getRandomPrompt, BASEURL } from '../utils';
import FormField from "../components/FormField";
import Loader from "../components/Loader";
import Image from "next/image";
import { useRouter } from 'next/router';

type Props = {}

const CreatePost = (props: Props) => {
  const navigate = useRouter();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    console.log('click handleSubmit!');
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);

      try {
        const response = await fetch(`${BASEURL}/api/v1/post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        })

        await response.json();
        navigate.push('/');
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a prompt and generate an image');
    }
  }

  const handleChange = (e: React.ChangeEvent<any>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt })
  }

  const generateImg = async () => {
    console.log('click generateImg!');
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(`${BASEURL}/api/v1/dalle`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: form.prompt }),
          });
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  }

  return (
    <>
      <Header />
      <div className='max-w-7xl mx-auto sm:p-8 px-4 py-8 w-full'>
        <div>
          <h1 className="font-extrabold text-[32px]">Create</h1>
          <p className="mt-2 text-gray-500 text-[14px] max-w-[500px]">Create imaginative and visually stunning images generated through DALL-E AI and share them with the community</p>
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

            <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 foxus:border-blue-500 w-64 p-3h-64 flex justify-center items-center'>
              {form.photo ? (
                <Image
                  className="w-full h-full object-contain"
                  src={form.photo}
                  alt="photo"
                  width={50}
                  height={50}
                />
              ) : (
                <Image
                  className="w-9/12 h-9/12 object-contain opacity-40"
                  src={preview}
                  alt="preview"
                  width={50}
                  height={50}
                />
              )}

              {generatingImg && (
                <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                  <Loader />
                </div>
              )}
            </div>

            <div className='mt-2'>
              <button type="button" onClick={generateImg} className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2 text-center'>
                {generatingImg ? 'Generating...' : 'Generate'}
              </button>
              <p className="text-gray-300 text-[14px] mt-2">This may take a while.</p>
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="mt-3 text-white bg-indigo-500 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                {loading ? 'Sharing...' : 'Share with the Community'}
              </button>
              <p className="text-gray-300 text-[14px] mt-2">Once you have created the image you want, you can share it with others in the community.</p>
            </div>

          </div>
        </form>
      </div>


    </>

  )
}

export default CreatePost