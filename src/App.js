import './App.scss';
import AppRoutes from './routes/AppRoutes/AppRoutes';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadItems } from './store/all-items/operations';
import { allItemsLoading } from './store/all-items/selectors';
import Loader from './components/Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(allItemsLoading);

  useEffect(() => {
    dispatch(loadItems())
  }, [dispatch])

  if(isLoading) {
    return <Loader />
  }

  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
