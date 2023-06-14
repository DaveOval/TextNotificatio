import TextNotification from "./components/TextNotification"
import { message } from "./data/messagge"


function App() {

  return (
    <>
      <TextNotification
        from={message.from}
        text={message.text}
        threadId={message.threadId}
      />
    </>
  )
}

export default App
