import './App.scss';
import AppRoutes from './routes/AppRoutes/AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadItems } from './store/all-items/operations';
import { loadFavourites } from './store/favourites/operations';
import { loadDisfavourites } from './store/disfavourites/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems())
    dispatch(loadFavourites())
    dispatch(loadDisfavourites())
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
