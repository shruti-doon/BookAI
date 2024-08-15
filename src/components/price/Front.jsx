import React from 'react';
import Endpoints from './Endpoints.jsx';
import Tutorial from './Tutorial.jsx';
import ApiPricing from './ApiPricing.jsx';
import Codeexamples from './codeexamples.jsx';

const Front = () => {
  return (
    <div className="space-y-8 min-h-screen w-full flex flex-col items-center justify-center bg-[#0F172A]">
      <div
        id="overview"
        className="mt-8 w-full md:w-10/12 lg:w-9/12 xl:w-7/12 p-6 md:p-8 bg-[#1E293B] rounded-lg shadow-md border border-[#334155] space-y-6"
      >
        <h1 className=" text-xl md:text-2xl font-semibold text-[#A4B5FC]">
          Overview
        </h1>
        <p className="text-[#E2E8F0]">
          The Book Generator API allows you to generate books on various topics
          using different language models. This documentation provides details
          on how to use the API, including authentication, available endpoints,
          and code examples.
        </p>
      </div>
      
      <div
        id="auth"
        className="w-full md:w-10/12 lg:w-9/12 xl:w-7/12 p-6 md:p-8 bg-[#1E293B] rounded-lg shadow-md border border-[#334155] space-y-6"
      >
        <h1 className="text-xl md:text-2xl font-semibold text-[#A4B5FC]">
          Authentication
        </h1>
        <p className="text-[#E2E8F0]">
          To use the API, you need to include your API key in the header of each
          request:
        </p>
        <pre className="bg-[#0F172A] text-white rounded-md p-4 overflow-x-auto text-sm md:text-base border border-[#334155]">
          <code>X-API-Key: YOUR_API_KEY</code>
        </pre>
        <p className="text-[#E2E8F0]">
          To generate an API key, use the button below:
        </p>
        <button className="h-10 px-5 text-black font-semibold rounded bg-cyan-500 hover:bg-sky-700 transition-colors duration-200 ease-in-out">
          Generate API Key
        </button>
        <div className="border border-[#334155] mt-3"></div>
      </div>

      <Endpoints />
      <Tutorial />
      <Codeexamples />
      <ApiPricing />
    </div>
  );
};

export default Front;
