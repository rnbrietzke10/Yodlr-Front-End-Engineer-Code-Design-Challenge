import NavBar from './components/NavBar/NavBar';
import AppRoutes from './AppRoutes';
import './App.scss';
function App() {
  return (
    <div className='App'>
      <NavBar />

      <AppRoutes />
    </div>
  );
}

export default App;
