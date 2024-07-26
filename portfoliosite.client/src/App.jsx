import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import MyWork from './pages/MyWork';
import Why from './pages/Why';
import Error from './pages/Error';
import Layout from './shared/Layout';
import './js/smootherScrolling.js';

function App() {
    

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='/about' element={<About />} />
                <Route path='/my-work' element={<MyWork />} />
                <Route path='/why' element={<Why />} />
                <Route path='*' element={<Error />} />
            </Route>
        )
    );

    return <RouterProvider router={ router } />
}

export default App;