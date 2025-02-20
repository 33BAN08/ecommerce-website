import React from 'react'

export default function Form() {
  return (
    <div
    className="flex justify-center mt-10
  shadow-md mx-4 md:mx-56 lg:mx-72 p-5 rounded-md"
  >
    {loader?<div className='absolute'>
        <Loader/>
    </div>:null}
    <form onSubmit={handleSubmit}>
      <h2
        className="text-[30px]
    font-extrabold text-blue-500"
      >
        ADD PROJECT
      </h2>
      <h2 className="mb-6">Create New Project and Explore with Community</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
      
        className="w-full mb-4 border-[1px] p-2 rounded-md"
      />
      <textarea
        name="desc"
        className="w-full mb-4 
      outline-blue-400 border-[1px] 
      p-2 rounded-md"
        required
        onChange={handleChange}
        placeholder="Write Description here"
      />
      <h2 className="mb-3 font-bold">Select Technology</h2>
      <div className="grid grid-cols-2 mb-4 md:grid-cols-3  ">
      </div>
      <input
        type="text"
        name="app-demo-url"
        placeholder="App Demo Url"
        onChange={handleChange}
        className="w-full mb-4 border-[1px] p-2 rounded-md"
      />
      <input
        type="text"
        name="ui-ux-design-url"
        onChange={handleChange}
        placeholder="UI/UX Design Url(Figma)"
        className="w-full mb-4 border-[1px] p-2 rounded-md"
      />
      <input
        type="text"
        name="yt-url"
        onChange={handleChange}
        placeholder="Youtube Tutorial Url"
        className="w-full mb-4 border-[1px] p-2 rounded-md"
      />
      <input
        type="text"
        name="github-url"
        onChange={handleChange}
        placeholder="Github Source Code Url"
        className="w-full mb-4 border-[1px] p-2 rounded-md"
      />

      <input
        type="text"
        onChange={handleChange}
        name="instagram"
        placeholder="Instagram Profile"
        className="w-full mb-4 border-[1px] p-2 rounded-md"
      />
        <input
          type="file"
          onChange={(e)=>setFile(e.target.files[0])}
          accept="image/gif, image/jpeg, image/png"
          className="mb-5 border-[1px] w-full"
        />
       <button
        type="submit"
        className="bg-blue-500 w-full p-1 
rounded-md text-white"
      >
        Submit
      </button>
    </form>
    
  </div>
  )
}
