import React from 'react';

const ApiPricing = () => {
  return (
    <div id="apipricing" className='flex justify-center'>
      <div
        className="text-white h-auto w-11/12 mt-8 md:w-10/12 mlg:w-9/12 xl:w-7/12 rounded-lg px-4 py-6 md:px-8 md:py-6"
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
          API Pricing
        </h2>
        <p >Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
        <div className="overflow-hidden rounded-lg border border-[#334155] mt-4">
          <table className="w-full border-collapse">
            <thead style={{ backgroundColor:'#6366F1' }}>
              <tr>
                <th className="p-2 text-center" style={{ borderBottom: '1px solid #334155', borderTopLeftRadius: '8px' }}>API</th>
                <th className="p-2 text-center" style={{ borderBottom: '1px solid #334155' }}>Model</th>
                <th className="p-2 text-center" style={{ borderBottom: '1px solid #334155', borderTopRightRadius: '8px' }}>Price per 1K tokens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold p-2 text-center" style={{ color:'#22D3EE', borderBottom: '1px solid #334155' }}>OpenAI</td>
                <td className="p-2 text-center" style={{ borderBottom: '1px solid #334155' }}>GPT-3.5</td>
                <td className="p-2 text-center" style={{ borderBottom: '1px solid #334155' }}>$0.002</td>
              </tr>
              <tr>
                <td className="font-semibold p-2 text-center" style={{ color:'#22D3EE', borderBottom: '1px solid #334155' }}>OpenAI</td>
                <td className="p-2 text-center" style={{ borderBottom: '1px solid #334155' }}>GPT-4</td>
                <td className="p-2 text-center" style={{ borderBottom: '1px solid #334155' }}>$0.03</td>
              </tr>
              <tr>
                <td className="font-semibold p-2 text-center" style={{ color:'#22D3EE', borderBottom: '1px solid #334155' }}>Together AI</td>
                <td className="p-2 text-center" style={{ borderBottom: '1px solid #334155' }}>Llama-2-70b</td>
                <td className="p-2 text-center" style={{ borderBottom: '1px solid #334155' }}>$0.0008</td>
              </tr>
              <tr>
                <td className="font-semibold p-2 text-center" style={{ color:'#22D3EE', borderBottom: '1px solid #334155' }}>Together AI</td>
                <td className="p-2 text-center" style={{ borderBottom: '1px solid #334155' }}>Llama-2-13b</td>
                <td className="p-2 text-center" style={{ borderBottom: '1px solid #334155' }}>$0.0006</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 
          className="mt-11 text-blue-400 text-xl md:text-2xl font-semibold" 
          style={{ color:'#A4B5FC' }}
        >
          Token Estimation
        </h2>
        <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
        <h2 
          className="mt-11 text-blue-400 text-xl md:text-2xl font-semibold" 
          style={{ color:'#A4B5FC' }}
        >
          Billing
        </h2>
        <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
      </div>
    </div>
  );
}

export default ApiPricing;
