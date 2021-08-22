import { Provider } from "react-redux";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import store from '../../redux/store'
import './landingPage.css'
import {MyNavbar} from '../navbar/navbar.jsx'
import {Home} from '../home/home.jsx'
import {Favorites} from '../favorites/favorites.jsx'

//first loading (in the app), Router for all routes.
export const LandingPage = () => {
  return (
    <>
      <Provider store={store}>
        <div className="body">
          <BrowserRouter>
            <MyNavbar />
            <Switch>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    </>
  );
};