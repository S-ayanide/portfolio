import { navigate } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { primaryRoute } from '../routes/primary'
import terminalClass from '../styles/index.module.css'
import '../styles/scrollbar.module.css'
import output from '../utils/output'
import sleep from '../utils/sleep'

const Terminal = () => {
  var i = 0
  var time = 1
  var text = 'sh sayan_website.sh'

  const [TextSize, setText] = useState(0)
  const [root, updateRoot] = useState('')
  const [preArray, setPreArray] = useState([])

  useEffect(() => {
    runner()
  }, [i])

  const runner = () => {
    i++
    setTimeout(function () {
      if (i < text.length) {
        if (i === 1) updateRoot(root.concat('sh '))
        if (i === 3) updateRoot(root.concat('sh s'))
        if (i === 5) updateRoot(root.concat('sh say'))
        if (i === 6) updateRoot(root.concat('sh saya'))
        if (i === 7) updateRoot(root.concat('sh sayan'))
        if (i === 8) updateRoot(root.concat('sh sayan_'))
        if (i === 9) updateRoot(root.concat('sh sayan_w'))
        if (i === 10) updateRoot(root.concat('sh sayan_we'))
        if (i === 11) updateRoot(root.concat('sh sayan_web'))
        if (i === 12) updateRoot(root.concat('sh sayan_webs'))
        if (i === 13) updateRoot(root.concat('sh sayan_websi'))
        if (i === 14) updateRoot(root.concat('sh sayan_websit'))
        if (i === 15) updateRoot(root.concat('sh sayan_website'))
        if (i === 16) updateRoot(root.concat('sh sayan_website.'))
        if (i === 17) updateRoot(root.concat('sh sayan_website.sh'))
        setText(i)
        runner()
      } else {
        i = 0
        setTimeout(function () {
          feedbacker()
        }, 1000)
      }
    }, Math.floor(Math.random() * 220) + 50)
  }

  function feedbacker() {
    setPreArray(preArray => [...preArray, `${output[i]}`])
    window.scrollTo(0, document.body.scrollHeight)
    i++
    time = Math.floor(Math.random() * 10) + 1
    setTimeout(function () {
      if (i < output.length) {
        feedbacker()
      } else {
        sleep(1500)
        navigate(primaryRoute.home)
      }
    }, time)
  }

  return (
    <div className={terminalClass.terminal}>
      <div className={terminalClass.load}>
        <pre className={terminalClass.term}>
          <span className={terminalClass.rootname}>sayanide@dev:~$ </span>
          {root}
        </pre>
        {preArray.map((initializeMessage, i) => {
          if (i < output.length - 2) {
            return (
              <pre key={i} className={terminalClass.init}>
                {initializeMessage}
                <br></br>
              </pre>
            )
          } else {
            return (
              <pre key={i} className={terminalClass.init}>
                <br></br>
                <br></br>
                {initializeMessage}
                <br></br>
              </pre>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Terminal
