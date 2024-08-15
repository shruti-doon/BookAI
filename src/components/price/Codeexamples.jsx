import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Codeexamples = ({ val }) => {
  return (
    <div id="code examples" className='w-full flex justify-center'>
      <div
        className={`text-${val ? 'gray-300' : 'black'} h-auto w-11/12 mt-8 md:w-10/12 lg:w-9/12 xl:w-9/12 rounded-lg px-4 py-6 md:px-8 md:py-6 ${val ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
        style={{ 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          border: '1px solid'
        }}
      >
        <h2
          className={`mt-8 text-3xl md:text-xl font-semibold text-start ${val ? 'text-blue-300' : 'text-blue-600'}`}
        >
          Code Examples
        </h2>

        <div className="mt-6">
          <h3
            className={`text-lg md:text-xl font-semibold ${val ? 'text-blue-300' : 'text-blue-600'}`}
          >
            Python
          </h3>
          <div
            className={`mt-4 border rounded-lg overflow-x-auto ${val ? 'border-gray-700' : 'border-gray-300'}`}
          >
            <SyntaxHighlighter
              language="python"
              style={docco}
              customStyle={{
                backgroundColor: val ? '#1E293B' : '#f5f5f5',
                borderRadius: '4px',
                padding: '16px',
                color: val ? '#A4B5FC' : '#333',
              }}
            >
              {`import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")`}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="mt-8">
          <h3
            className={`text-lg md:text-xl font-semibold ${val ? 'text-blue-300' : 'text-blue-600'}`}
          >
            JavaScript
          </h3>
          <div
            className={`mt-4 border rounded-lg overflow-x-auto ${val ? 'border-gray-700' : 'border-gray-300'}`}
          >
            <SyntaxHighlighter
              language="javascript"
              style={docco}
              customStyle={{
                backgroundColor: val ? '#1E293B' : '#f5f5f5',
                borderRadius: '4px',
                padding: '16px',
                color: val ? '#A4B5FC' : '#333',
              }}
            >
              {`const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Codeexamples;
