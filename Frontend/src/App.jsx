import { useEffect, useState } from 'react'
import './App.css'
import Editor from 'react-simple-code-editor'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import axios from 'axios'
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"

function App() {

  const [code, setCode] = useState(`function mul() => {
  return a*b
}`)

    const [review, setReview] = useState(``)
  

  useEffect(() => {
    prism.highlightAll()
  }, [])
  
  const reviewCode = async () => {
    const response = await axios.post("http://localhost:3000/ai/get-review" , {code})

    setReview(response.data);
    
  }
  
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code , prism.languages.javascript , "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code" , "Fira Mono" , monospace',
                fontSize: 16,
                border: '1px solid black',
                borderRadius: '5px',
                height: '100%',
                width:"100%"

              }}
            />
          </div>
          <div
          onClick={reviewCode}
          className="review"> Review </div>
        </div>
        <div className="right">
          <Markdown
            rehypePlugins={[ rehypeHighlight ]}
          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App
