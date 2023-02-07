import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Footer from './components/Footer';
import TicTacToe from './pages/TicTacToe';
// import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <>
      {/* Header not needed right now
        <Header title="Header" subtitle="Header Subtitle" /> */}
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<NavBar />}>
                <Route index element={<Home />} />
                <Route path="Home" element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="TicTacToe" element={<TicTacToe />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        <Footer note="Footer" />
      </>

    );
  }
}

export default App;