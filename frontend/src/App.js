
import './App.css';

import '././assets/colors.scss'
import '././assets/fonts.scss'
import Signup from './components/signup/signup';
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="">
       
      </header>
    <div className="body">
      <BrowserRouter>
      <Route path="/register" component={Signup}></Route>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
