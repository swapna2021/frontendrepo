
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Header from './Components/Header';
import Signup from './Components/Signup';
import {Route, Routes} from 'react-router';
import BnakAccountLis from './Components/BankAccountsLis';
import AddBankAccount from './Components/AddBankAccount';
import BankAccountInfo from './Components/BankAccountInfo';



function App() {
  return (

    <div className='container-fluid'>
      <div className='row bg-warning'>
            <Header />
            
      </div>
      <div className='row'>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/list' element={<BnakAccountLis/>}></Route>
              <Route path='/update/:id' element={<AddBankAccount/>}></Route>
              <Route path='/info/:id' element={<BankAccountInfo/>}></Route>
              <Route path='/add' element={<AddBankAccount/>}></Route>
          </Routes>
      </div>

    </div>
      );
}

export default App;
