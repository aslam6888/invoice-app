import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import routes from './components/routes';

const all_routes = createBrowserRouter(routes)

export const AuthContext = createContext(null)

function App() {

  const [auth, setAuth] = useState({name: '', is_loggedin: false})

  const show_alert = (name) => {
    alert(`My name is ${name}`)
  }
  const login = () => {
    setAuth({name: 'Aslam', is_loggedin: true})
    return true
    
  }
  
  return (
    <AuthContext.Provider value={{auth, login}}> 
      <RouterProvider router={all_routes}/>
    </AuthContext.Provider>
  );
}

export default App;
