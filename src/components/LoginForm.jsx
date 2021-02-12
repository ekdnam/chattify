import { useState } from "react";
import axios from "axios";
const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "aaecad3d-06c4-4f20-ac56-466893a64081", 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {

        }

    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="tilte">
                    Chatter
          </h1>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting!</span>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
};

export default LoginForm;