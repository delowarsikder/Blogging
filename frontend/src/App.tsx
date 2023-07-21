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
import { useDispatch } from 'react-redux';
import ForgetPassword from './view/UserAuth/ForgetPassword';
import Layout from './view/Layout';
import Profile from './view/Profile';
import { getToken } from './api/utils';
library.add(fab, fas)

function App() {
  const token = getToken();
  return (
    <div>
      <Layout>
        <div className="App container">
          <Routes>
            <Route path='*' element={<Navigate to='/error' replace />} />
            <Route path='/auth/signin' element={!token && <Signin />} />
            <Route path='/auth/signup' element={!token && <Signup />} />
            {/* <Route path='/forget-password' element={<ForgetPassword />} /> */}
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/*' element={<PrivateOutlet />}>
              <Route path="/" element={<Posts />} />
              <Route path='postedit' element={<PostEdit />} />
              <Route path='newform' element={<NewForm />} />
            </Route>
          </Routes>
        </div>
      </Layout>

    </div>
  );
}

export default App;

