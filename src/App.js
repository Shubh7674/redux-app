import './App.css';
import  {Provider}  from 'react-redux';
import store from './redux/store';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserComponent />
      </Provider>
    </div>
  );
}

export default App;
