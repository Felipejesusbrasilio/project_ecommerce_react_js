import './App.css';
import Header from './header/header';
import Body from './body/body';
import {Provider} from 'react-redux';
import create from './redux/createStore';

function App() {
  return (
    <Provider store={create}>
    <div className="App">
      <Header/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
