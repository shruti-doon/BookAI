import React from 'react';

const ApiPricing = ({ val }) => {
  return (
    <div id="api pricing" className='flex justify-center'>
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
          API Pricing
        </h2>
        <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
        <div className={`overflow-hidden rounded-lg border ${val ? 'border-gray-700' : 'border-gray-300'} mt-4`}>
          <table className="w-full border-collapse">
            <thead className={val ? 'bg-gray-700' : 'bg-blue-600'}>
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
          className={`mt-11 text-xl md:text-2xl font-semibold ${val ? 'text-blue-300' : 'text-blue-600'}`}
        >
          Token Estimation
        </h2>
        <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
        <h2 
          className={`mt-11 text-xl md:text-2xl font-semibold ${val ? 'text-blue-300' : 'text-blue-600'}`}
        >
          Billing
        </h2>
        <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
      </div>
    </div>
  );
}

export default ApiPricing;
