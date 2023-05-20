import NavBar from './components/NavBar/NavBar';
import AppRoutes from './Routes/AppRoutes';
import './App.scss';
function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Welcome To Yodler</h1>
      <AppRoutes />
    </div>
  );
}

export default App;
