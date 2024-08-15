import React from 'react';

const Endpoints = ({ val }) => {
  return (
    <div id="endpoints" className='w-full flex justify-center'>
      <div
        className={`text-${val ? 'gray-300' : 'black'} h-auto w-11/12 mt-8 md:w-10/12 lg:w-9/12 xl:w-9/12 rounded-lg px-4 py-6 md:px-8 md:py-6 ${val ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
        style={{ 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          border: '1px solid'
        }}
      >
        <h2 
          className={`mt-11 text-xl md:text-2xl font-semibold ${val ? 'text-blue-300' : 'text-blue-600'}`}
        >
          Endpoints
        </h2>
        <div className='mt-11'>
          <h1 className={`text-lg md:text-xl font-semibold ${val ? 'text-blue-300' : 'text-blue-600'}`}>Generate book</h1>
          <button className={`mt-5 p-2 rounded-lg ${val ? 'bg-sky-400 text-gray-900' : 'bg-sky-500 text-black'}`}>POST</button>
          <button className={`ml-3 p-2 rounded-lg ${val ? 'bg-blue-500' : 'bg-blue-700'}`}>/api/generate-book</button>
          <h2 className={`mt-12 font-semibold ${val ? 'text-blue-300' : 'text-blue-600'}`}>Request Body</h2>
        </div>
        <div className={`overflow-hidden rounded-lg border ${val ? 'border-gray-700' : 'border-gray-300'} mt-4`}>
          <table className="w-full border-collapse">
            <thead style={{ backgroundColor: val ? '#6366F1' : '#e2e8f0' }}>
              <tr>
                <th className={`p-2 text-left ${val ? 'border-gray-700' : 'border-gray-300'} rounded-tl-lg`} style={{ borderBottom: '1px solid' }}>Parameter</th>
                <th className={`p-2 text-left ${val ? 'border-gray-700' : 'border-gray-300'}`} style={{ borderBottom: '1px solid' }}>Type</th>
                <th className={`p-2 text-left ${val ? 'border-gray-700' : 'border-gray-300'} rounded-tr-lg`} style={{ borderBottom: '1px solid' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`font-semibold p-2 ${val ? 'text-blue-400' : 'text-blue-600'}`} style={{ borderBottom: '1px solid' }}>api</td>
                <td className={`p-2 ${val ? 'text-gray-300' : 'text-gray-900'}`} style={{ borderBottom: '1px solid' }}>string</td>
                <td className={`p-2 ${val ? 'text-gray-300' : 'text-gray-900'}`} style={{ borderBottom: '1px solid' }}>The API provider to use. Options: "openai" or "together"</td>
              </tr>
              <tr>
                <td className={`font-semibold p-2 ${val ? 'text-blue-400' : 'text-blue-600'}`} style={{ borderBottom: '1px solid' }}>model</td>
                <td className={`p-2 ${val ? 'text-gray-300' : 'text-gray-900'}`} style={{ borderBottom: '1px solid' }}>string</td>
                <td className={`p-2 ${val ? 'text-gray-300' : 'text-gray-900'}`} style={{ borderBottom: '1px solid' }}>The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")</td>
              </tr>
              <tr>
                <td className={`font-semibold p-2 ${val ? 'text-blue-400' : 'text-blue-600'}`} style={{ borderBottom: '1px solid' }}>topic</td>
                <td className={`p-2 ${val ? 'text-gray-300' : 'text-gray-900'}`} style={{ borderBottom: '1px solid' }}>string</td>
                <td className={`p-2 ${val ? 'text-gray-300' : 'text-gray-900'}`} style={{ borderBottom: '1px solid' }}>The main topic or theme of the book</td>
              </tr>
              <tr>
                <td className={`font-semibold p-2 ${val ? 'text-blue-400' : 'text-blue-600'}`} style={{ borderBottom: '1px solid' }}>language</td>
                <td className={`p-2 ${val ? 'text-gray-300' : 'text-gray-900'}`} style={{ borderBottom: '1px solid' }}>string</td>
                <td className={`p-2 ${val ? 'text-gray-300' : 'text-gray-900'}`} style={{ borderBottom: '1px solid' }}>The language in which the book should be generated</td>
              </tr>
              <tr>
                <td className={`font-semibold p-2 ${val ? 'text-blue-400' : 'text-blue-600'}`} style={{ borderBottom: '1px solid' }}>word_count</td>
                <td className={`p-2 ${val ? 'text-gray-300' : 'text-gray-900'}`} style={{ borderBottom: '1px solid' }}>integer</td>
                <td className={`p-2 ${val ? 'text-gray-300' : 'text-gray-900'}`} style={{ borderBottom: '1px solid' }}>The approximate number of words for the generated book</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h1 className={`mt-5 font-semibold rounded-lg ${val ? 'text-blue-300' : 'text-blue-600'}`}>Response</h1>
          <div className={`mt-4 h-[100px] rounded-lg ${val ? 'border-gray-700' : 'border-gray-300'}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Endpoints;
