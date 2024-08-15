import React from 'react';

const Tutorial = ({ val }) => {
  console.lo
  return (
    <div
      id='tutorials'
      className={`w-full flex flex-col items-center justify-center space-y-8 ${val ? 'bg-gray-900' : 'bg-gray-100'}`}
    > 
      <div
        className={`space-y-3 h-auto w-11/12 mt-8 md:w-10/12 lg:w-9/12 xl:w-9/12 rounded-lg px-4 py-6 md:px-8 md:py-6 ${val ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
        style={{ 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          border: '1px solid'
        }}
      >
        <h1 
          className={`mt-12 text-xl md:text-2xl items-start font-semibold ${val ? 'text-blue-300' : 'text-blue-600'}`}
        >
          Tutorial
        </h1>
        <div className="flex-wrap mt-4 md:mt-6">
          <h1 className={`font-bold text-xl mt-5 ${val ? 'text-blue-300' : 'text-blue-600'}`}>Step 1: Obtain an API Key</h1>
          <p className='items-start'>
            Generate an API key using the button in the Authentication section above.
          </p>
          <h1 className={`font-bold text-xl mt-5 ${val ? 'text-blue-300' : 'text-blue-600'}`}>Step 2: Make a Request</h1>
          <p className='text-l'>
            Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.
          </p>
          <h1 className={`font-bold text-xl mt-5 ${val ? 'text-blue-300' : 'text-blue-600'}`}>Step 3: Handle the Response</h1>
          <p className='text-l'>
            The API will return a response with a job ID. You can use this ID to check the status of your book generation job.
          </p>
          <h1 className={`font-bold text-xl mt-5 ${val ? 'text-blue-300' : 'text-blue-600'}`}>Step 4: Retrieve the Generated Book</h1>
          <p className='text-l'>
            Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
