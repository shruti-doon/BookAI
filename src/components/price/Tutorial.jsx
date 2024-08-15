import React from 'react'

const Tutorial = () => {
  return (
    <div>
       <div id='tutorials'
      className=" w-full flex flex-col items-center justify-center space-y-8"
      style={{ backgroundColor: '#0F172A' }}
    > 
      <div
        className="space-y-3 h-auto w-11/12 mt-8 md:w-10/12 mlg:w-9/12 xl:w-7/12 rounded-lg px-4 py-6 md:px-8 md:py-6"
        style={{ 
          backgroundColor: '#1E293B', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          border: '1px solid #334155'
        }}
      >
        <h1 
          className="mt-12 text-blue-400 text-xl md:text-2xl items-start font-semibold" 
          style={{ color: '#A4B5FC' }}
        >
          Tutorial
        </h1>
        <p 
          className="flex flex-wrap mt-4 md:mt-6" 
          style={{ color: '#E2E8F0' }}
        >
          <h1 className='font-bold text-xl mt-5 ' style={{color:'#A4B5FC'}}>Step 1: Obtain an API Key </h1>
<p className='text-l'>Generate an API key using the button in the Authentication section above.</p>
<h1 className='font-bold text-xl mt-5' style={{color:'#A4B5FC'}}>Step 2: Make a Request </h1>
<p className='text-l'>Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.</p>
<h1 className='font-bold text-xl mt-5' style={{color:'#A4B5FC'}}>Step 3: Handle the Response </h1>
<p className='text-l'>The API will return a response with a job ID. You can use this ID to check the status of your book generation job.</p>
<h1 className='font-bold text-xl mt-5' style={{color:'#A4B5FC'}}>Step 4: Retrieve the Generated Book </h1>
<p className='text-l'>Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).</p>



        </p>
      </div>
      </div>
    </div>
  )
}

export default Tutorial
