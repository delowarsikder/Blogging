import './App.css';
import PostEdit from './features/posts/PostEdit';
import Posts from './features/posts/Posts'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path='/postEdit' element={<PostEdit />}/>
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
