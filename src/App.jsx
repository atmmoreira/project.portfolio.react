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
          <div className="row flex-lg-row-reverse flex-sm-row">
            <Sidebar />
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
