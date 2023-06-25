
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './pages/Routes/Routes/Routes';



function App() {


  return (
    <div className='bgcolor'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
