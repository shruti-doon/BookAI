import React from 'react';

const Endpoints = () => {
  return (
    <div id="endpoints" className='w-full flex justify-center'>
    <div
      className="text-white h-auto w-11/12 mt-8 md:w-10/12 mlg:w-9/12 xl:w-9/12 rounded-lg px-4 py-6 md:px-8 md:py-6"
      style={{ 
        backgroundColor: '#1E293B', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        border: '1px solid #334155',
      
      }}
    >
      <h2 
        className="mt-11 text-blue-400 text-xl md:text-2xl font-semibold" 
        style={{ color:'#A4B5FC' }}
      >
        Endpoints
      </h2>
        <div className='mt-11'>
          <h1 className="text-l md:text-xl font-semibold" style={{ color:'#A4B5FC' }}>Generate book</h1>
          <button className='mt-5 bg-sky-500 text-black p-2 rounded-lg'>POST</button>
          <button className='ml-3 p-2 rounded-lg' style={{backgroundColor:'#6366F1'}}>/api/generate-book</button>
          <h2 className='mt-12 font-semibold' style={{ color:'#A4B5FC' }}>Request Body</h2>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#334155] mt-4">
          <table className="w-full border-collapse">
            <thead style={{ backgroundColor:'#6366F1' }}>
              <tr>
                <th className="p-2 text-left" style={{ borderBottom: '1px solid #334155', borderTopLeftRadius: '8px' }}>Parameter</th>
                <th className="p-2 text-left" style={{ borderBottom: '1px solid #334155' }}>Type</th>
                <th className="p-2 text-left" style={{ borderBottom: '1px solid #334155', borderTopRightRadius: '8px' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold p-2" style={{ color:'#22D3EE', borderBottom: '1px solid #334155' }}>api</td>
                <td className="p-2" style={{ borderBottom: '1px solid #334155' }}>string</td>
                <td className="p-2" style={{ borderBottom: '1px solid #334155' }}>The API provider to use. Options: "openai" or "together"</td>
              </tr>
              <tr>
                <td className="font-semibold p-2" style={{ color:'#22D3EE', borderBottom: '1px solid #334155' }}>model</td>
                <td className="p-2" style={{ borderBottom: '1px solid #334155' }}>string</td>
                <td className="p-2" style={{ borderBottom: '1px solid #334155' }}>The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")</td>
              </tr>
              <tr>
                <td className="font-semibold p-2" style={{ color:'#22D3EE', borderBottom: '1px solid #334155' }}>topic</td>
                <td className="p-2" style={{ borderBottom: '1px solid #334155' }}>string</td>
                <td className="p-2" style={{ borderBottom: '1px solid #334155' }}>The main topic or theme of the book</td>
              </tr>
              <tr>
                <td className="font-semibold p-2" style={{ color:'#22D3EE', borderBottom: '1px solid #334155' }}>language</td>
                <td className="p-2" style={{ borderBottom: '1px solid #334155' }}>string</td>
                <td className="p-2" style={{ borderBottom: '1px solid #334155' }}>The language in which the book should be generated</td>
              </tr>
              <tr>
                <td className="font-semibold p-2" style={{ color:'#22D3EE', borderBottom: '1px solid #334155' }}>word_count</td>
                <td className="p-2" style={{ borderBottom: '1px solid #334155' }}>integer</td>
                <td className="p-2" style={{ borderBottom: '1px solid #334155' }}>The approximate number of words for the generated book</td>
              </tr>
            </tbody>
          </table>
        </div>
      <div>
        <h1 className='mt-5 font-semibold rounded-lg' style={{color:'#A4B5FC'}}>Response</h1>
        <div className='mt-4 h-[100px] rounded-lg' style={{border: '1px solid #334155' }}> </div>
      </div>
    </div>
      </div>
  );
};

export default Endpoints;
