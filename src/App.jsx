import "./App.css";
import { Link, Route } from "wouter";

import FeedVideos from "./components/FeedVideos/index.jsx";
import Upload from "./pages/Upload/Upload";

function App() {

  return (
    <div className="App">
      <Route path="/">
        <FeedVideos />
      </Route>
      <Route path="/upload">
        <Upload />
      </Route>
    </div>
  );
}

export default App;
