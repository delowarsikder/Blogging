import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import AboutUs from './components/AboutUs';
import PrivateOutlet from './components/PrivateOutlet';
import NewForm from './features/posts/NewForm';
import PostEdit from './features/posts/PostEdit';
import Posts from './features/posts/Posts';
import Error from './pages/error';
import Signin from './view/UserAuth/Signin';
import Signup from './view/UserAuth/Signup';
// import Container from "@mui/material/Container";
import { useDispatch } from 'react-redux';
import ForgetPassword from './view/UserAuth/ForgetPassword';
import Layout from './view/Layout';
library.add(fab, fas)

function App() {
  const dispatch = useDispatch<any>();
  const [auth, setAuth] = useState(false);
  return (
    <Layout>
      <div className="App container">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/error" element={<Error />} />
          <Route path='*' element={<Navigate to='/error' replace />} />
          <Route path='/auth/signin' element={<Signin setAuth={setAuth} />} />
          <Route path='/auth/signup' element={<Signup setAuth={setAuth} />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/*' element={<PrivateOutlet auth={auth} />}>
            <Route path='postedit' element={<PostEdit />} />
            <Route path='newform' element={<NewForm />} />
          </Route>
        </Routes>
      </div>
    </Layout>
  );
}

export default App;

