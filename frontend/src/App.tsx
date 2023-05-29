
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
import PrivateOutlet from './components/PrivateOutlet';
import Error from './pages/error';

library.add(fab, fas)

function App() {

  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/error" element={<Error/>}/>
        <Route path='*' element={<Navigate to='/error' replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='/*' element={<PrivateOutlet />}>
          <Route path='postedit' element={<PostEdit />} />
          <Route path='newform' element={<NewForm />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;

