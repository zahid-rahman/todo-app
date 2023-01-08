import './App.css';
import axios from 'axios';
import { SWRConfig } from 'swr';
import MainApp from './components/MainApp';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import List from './components/List';
import TodoDetails from './components/TodoDetails';
import Header from './components/Header';
import Nav from './ui/Nav';

function App() {
  return (
    <>
      <SWRConfig value={{ fetcher: (url: string) => axios(url).then(r => r.data) }}>
        <BrowserRouter>
          <Header></Header>
          <Nav />
          <Routes>
            <Route path="/" element={<MainApp />} />
            <Route path="/todo/list" element={<List />} />
            <Route path="*" element={<>
              <p>404 page not found</p>
              <Link to='/'>click here to back in home page</Link>
            </>} />
            <Route path="/todo/:id" element={<TodoDetails />} />
          </Routes>
        </BrowserRouter>
      </SWRConfig>
    </>

  );
}

export default App;
