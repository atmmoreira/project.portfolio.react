import './style.css';

import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="curriculum">
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
