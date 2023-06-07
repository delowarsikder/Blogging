
import './App.css';
import PostEdit from './features/posts/PostEdit';
import Posts from './features/posts/Posts';
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import NewForm from './features/posts/NewForm';
import AboutUs from './components/aboutUs';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import PrivateOutlet from './components/PrivateOutlet';
import Error from './pages/error';
import { useState } from 'react';
import Signin from './Authentication/Signin';
import Signup from './Authentication/Signup';


import { openModal, closeModal } from './features/modal/modalSlice';
import { useDispatch } from 'react-redux';
import ForgetPassword from './Authentication/ForgetPassword';
library.add(fab, fas)

function App() {
  const dispatch = useDispatch<any>();
  const [auth, setAuth] = useState(false);
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/error" element={<Error />} />
        <Route path='*' element={<Navigate to='/error' replace />} />
        <Route path='/signin' element={<Signin setAuth={setAuth} />} />
        <Route path='/signup' element={<Signup setAuth={setAuth} />} />

        <Route path='/forget-password' element={<ForgetPassword/>}/>
        

        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/registration' element={<Registration />} /> */}

        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/*' element={<PrivateOutlet auth={auth} />}>
          <Route path='postedit' element={<PostEdit />} />
          <Route path='newform' element={<NewForm />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;

