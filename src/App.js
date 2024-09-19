import './App.css';
import Form from '../src/components/Form.jsx';
import List from '../src/components/List.jsx';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import Aside from '../src/components/Aside.jsx';
import { Provider } from './context/Context.js';

function App() {
  
  return (
    <div className="App">
      <Provider>
      <Header />
      <main>
        <Form />
        <List  />
        <Aside />
      </main>
      <Footer />
      </Provider>
    </div>
  );
}

export default App;
