import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './contxt/AuthProvider';
import BookingManagement from './Pages/BookingManagement/BookingManagement';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import FullDescription from './Pages/Home/FullDescription/FullDescription';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>

          <Header></Header>
          <Switch>
            <Route exact path={['/', '/home']}>
              <Home></Home>
            </Route>

            <Route path='/book/:id'>
              <FullDescription></FullDescription>
            </Route>

            <PrivateRoute path='/booking'>
              <BookingManagement></BookingManagement>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

          </Switch>
          <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
