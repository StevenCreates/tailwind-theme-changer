import React from "react";

export default function Home() {
  return (
    <>
      <div className='text-center w-full text-2xl '>
        React - Tailwind CSS - Theme Changer
      </div>
      <div className='flex text-center mt-8'>
        <div className='w-1/4'>
          <button className='px-1 py-1 rounded border border-black bg-white'>
            Light
          </button>
        </div>
        <div className='w-1/4'>
          <button className='px-1 py-1 rounded border border-black bg-black text-white'>
            Dark
          </button>
        </div>
        <div className='w-1/4'>
          <button className='px-1 py-1 rounded border border-green-300 bg-green-300 text-white'>
            Pastel
          </button>
        </div>
        <div className='w-1/4'>
          <button className='px-1 py-1 rounded border border-pink-500 bg-pink-500 text-white'>
            Neon
          </button>
        </div>
      </div>
    </>
  );
}
