import React from 'react';
import Endpoints from './Endpoints.jsx';
import Tutorial from './Tutorial.jsx';
import ApiPricing from './ApiPricing.jsx';
import Codeexamples from './Codeexamples.jsx';

const Front = ({ val }) => {
  console.log("dark", val);

  return (
    <div className={`text-${val ? 'white' : 'black'} space-y-8 min-h-screen w-full flex flex-col items-center justify-center ${val ? 'bg-gray-900' : 'bg-white'}`}>
      <div
        id="overview"
        className={`mt-8 w-11/12 md:w-10/12 lg:w-9/12 xl:w-9/12 p-6 md:p-8 ${val ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'} rounded-lg shadow-md border space-y-6`}
      >
        <h1 className={`text-xl md:text-2xl font-semibold ${val ? 'text-blue-300' : 'text-blue-600'}`}>
          Overview
        </h1>
        <p className={`${val ? 'text-gray-300' : 'text-gray-900'}`}>
          The Book Generator API allows you to generate books on various topics
          using different language models. This documentation provides details
          on how to use the API, including authentication, available endpoints,
          and code examples.
        </p>
      </div>
      
      <div
        id="auth"
        className={`w-11/12 md:w-10/12 lg:w-9/12 xl:w-9/12 p-6 md:p-8 ${val ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'} rounded-lg shadow-md border space-y-6`}
      >
        <h1 className={`text-xl md:text-2xl font-semibold ${val ? 'text-blue-300' : 'text-blue-600'}`}>
          Authentication
        </h1>
        <p className={`${val ? 'text-gray-300' : 'text-gray-900'}`}>
          To use the API, you need to include your API key in the header of each
          request:
        </p>
        <pre className={`bg-gray-800 text-white rounded-md p-4 overflow-x-auto text-sm md:text-base border ${val ? 'border-gray-700' : 'border-gray-300'}`}>
          <code>X-API-Key: YOUR_API_KEY</code>
        </pre>
        <p className={`${val ? 'text-gray-300' : 'text-gray-900'}`}>
          To generate an API key, use the button below:
        </p>
        <button className={`h-10 px-5 font-semibold rounded transition-colors duration-200 ease-in-out ${val ? 'bg-cyan-500 text-black hover:bg-cyan-400' : 'bg-cyan-500 text-white hover:bg-sky-700'}`}>
          Generate API Key
        </button>
        <div className={`border mt-3 ${val ? 'border-gray-700' : 'border-gray-300'}`}></div>
      </div>

      <Endpoints val={val} />
      <Tutorial val={val}/>
      <Codeexamples val={val} />
      <ApiPricing val={val} />
    </div>
  );
};

export default Front;
