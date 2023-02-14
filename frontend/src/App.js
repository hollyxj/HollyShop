import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <h1>Welcome to Holly Shop!</h1>
          <Routes>         
            <Route path='/login' element={<LoginScreen />}/>
            <Route path='/register' element={<RegisterScreen />}/>
            <Route path='/product/:id' element={<ProductScreen />}/>
            <Route path='/cart'>
              <Route path=':id' element={<CartScreen />} />
              <Route path='' element={<CartScreen />} />
            </Route>
            <Route path='/' element={<HomeScreen />} exact />  
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
