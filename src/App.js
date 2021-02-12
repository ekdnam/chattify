import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="
aaecad3d-06c4-4f20-ac56-466893a64081"
            userName="SRK"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;