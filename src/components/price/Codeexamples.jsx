import React from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Codeexamples = () => {
    return (
        <div id="codeexp" className='w-full flex justify-center'>
      <div
        className="text-white text-xs h-auto w-7/12 mt-8 md:w-7/12 mlg:w-11/12 xl:w-7/12 rounded-lg px-4 py-6 md:px-8 md:py-6"
        style={{ 
          backgroundColor: '#1E293B', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          border: '1px solid #334155',
        
        }}
      >
                <h2
                    className="mt-8 text-blue-400 text-xl md:text-xl font-semibold text-center"
                    style={{ color: '#A4B5FC' }}
                >
                    Code Examples
                </h2>

                <div className="mt-6">
                    <h3
                        className="text-blue-400 text-lg md:text-xl font-semibold"
                        style={{ color: '#A4B5FC' }}
                    >
                        Python
                    </h3>
                    <div
                        className="mt-4 border rounded-lg overflow-x-auto"
                        style={{ border: '1px solid #334155' }}
                    >
                        <SyntaxHighlighter
                            language="python"
                            style={docco}
                            customStyle={{
                                backgroundColor: '#1E293B',
                                borderRadius: '4px',
                                padding: '16px',
                                color: '#A4B5FC',
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
                        className="text-blue-400 text-lg md:text-xl font-semibold"
                        style={{ color: '#A4B5FC' }}
                    >
                        JavaScript
                    </h3>
                    <div
                        className="mt-4 border rounded-lg overflow-x-auto"
                        style={{ border: '1px solid #334155' }}
                    >
                        <SyntaxHighlighter
                            language="javascript"
                            style={docco}
                            customStyle={{
                                backgroundColor: '#1E293B',
                                borderRadius: '4px',
                                padding: '16px',
                                color: '#A4B5FC',
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
    )
}

export default Codeexamples
