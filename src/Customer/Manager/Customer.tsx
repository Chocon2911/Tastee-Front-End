// import myHeader from '../Component/Header';
import { BrowserRouter } from 'react-router-dom';
import RouteManager from './RouteManager';

function Customer()
{
    return (
        <>
            <BrowserRouter>
                <RouteManager/>
            </BrowserRouter>
        </>
    )
}

export default Customer