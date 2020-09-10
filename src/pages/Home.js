import React from "react";

export default function Home() {
  return (
    <>
      <div className='flex'>
        <div className='w-1/4'>
          <button className='px-1 py-1 rounded border border-black bg-white'>
            Light
          </button>
        </div>
        <div className='w-1/4'>
          <button className='px-1 py-1 rounded border border-black bg-black text white'>
            Dark
          </button>
        </div>
      </div>
    </>
  );
}
