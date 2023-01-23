import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

const initialState =
  `
Hello

# Heading
## Heading 2
**This is bolded**

> Block Quotes !

- list item 1
- list item 2
- list item 3 

[Visit my github](https://github.com/nabilfikrisp)

Inline code \`<div></div>\`

Block of code
\`\`\`
let x = 1;
let y = 2;
let z = x + y;
\`\`\`

![freeCodeCamp](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [rawText, setRawText] = useState(initialState);

  const handleChange = (event) => {
    setRawText(event.target.value);
  }

  // const processedText = marked.parse(rawText);

  return (
    <div className="App font-roboto">
      <div className='min-h-screen'>
        <div className='container min-h-screen mx-auto flex flex-col '>
          <div id='header' className='flex justify-between items-center px-8 bg-violet-700 flex-none'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-markdown align-middle mr-4 text-white w-12" viewBox="0 0 16 16"> <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" /> <path fill-rule="evenodd" d="M9.146 8.146a.5.5 0 0 1 .708 0L11.5 9.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708z" /> <path fill-rule="evenodd" d="M11.5 5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z" /> <path d="M3.56 11V7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z" />
            </svg>
            <h1 className='text-3xl pt-4 mb-4 text-white text-center'>Markdown Editor</h1>
            <a href='https://github.com/nabilfikrisp' className='hover:scale-110 transition duration-300 ease-in-out'>
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-12 fill-white'><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            </a>
          </div>
          <div className='flex min-h-[600px] justify-between leading-relaxed lg:flex-1 flex-col lg:flex-row '>
            <div className='w-screen lg:w-1/2 flex-col flex min-h-[400px]'>
              <h2 className='text-lg font-normal pl-4 bg-violet-600 w-full py-2 flex-none text-white ' >Editor</h2>
              <textarea style={{ resize: 'none' }} id='editor' value={rawText} onChange={handleChange} className="p-4 w-full flex-1 box-border rounded-none border-none outline-none " ></textarea>
            </div>
            <div className='w-screen lg:w-1/2 flex-col flex'>
              <h2 className='text-lg font-normal pl-4 bg-violet-600 py-2 text-white '>Preview</h2>
              <div className='flex flex-1 p-4 box-border preview-box'>
                <div dangerouslySetInnerHTML={{ __html: marked(rawText) }} id='preview' className=''>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
