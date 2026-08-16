"use client"
import { generateTextAction } from '@/app/actions/aiAction';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Home() {

  const [prompt, setPrompt] = useState<string>("")
  const [output, setOutput] = useState<string>("")

  const handleSendPrompt = async () => {
    const response = await generateTextAction(prompt)
    setOutput(response);
  }
  return (
    <main className="flex w-screen h-screen flex-col items-center overflow-auto px-24 py-6 pb-32">

      {
        output && (
          <div className='w-full max-w-4xl pb-20'>
            <h1 className='text-2xl font-bold mb-4'>AI Response : </h1>
            <ReactMarkdown>{output}</ReactMarkdown>
          </div>
        )
      }

      <div className="fixed bottom-0 left-0 px-24 py-4 flex items-center justify-between w-full bg-black">
        <input
          className="border p-2 rounded-md w-[80%] outline-none"
          placeholder="Type here...."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)} />
       
        <button className="cursor-pointer bg-neutral-700 text-white p-2 rounded-md ml-4 w-[18%]" onClick={handleSendPrompt}>Send</button>
      </div>

    </main>
  );
}
