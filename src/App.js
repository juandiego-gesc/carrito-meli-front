import './App.css';

import Layout from './components/layout';
import Home from './pages/home';
import LoginPage from './pages/login';
import ProtectedRoute from './components/protectedRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="login" element={<LoginPage />} />
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
