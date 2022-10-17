import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                pass: pass
            })
        });
    }, []);

    return (
        <div className="App">
            <form>
                <input
                    value={name}
                    onChange={e => {
                        setName(e.target.value);
                    }}
                    type="text"
                    name="name"
                    id="name"
                />
                <input
                    value={pass}
                    onChange={e => {
                        setPass(e.target.value);
                    }}
                    type="password"
                    name="pass"
                    id="pass"
                />
                <button type="button">Login</button>
                <div>
                    Don't have an account? 
                    <Link to="/register">
                        Register here
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login