import { Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;