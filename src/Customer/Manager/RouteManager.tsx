import { Routes, Route } from 'react-router-dom';
import Home from '../Page/Home';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/customer/home" element={<Home/>}/>
        </Routes>
    );
}