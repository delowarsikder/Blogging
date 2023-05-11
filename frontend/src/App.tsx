import './App.css';
import PostEdit from './features/posts/PostEdit';
import Posts from './features/posts/Posts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path='/postedit' element={<PostEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
