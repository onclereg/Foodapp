
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FoodCard from './components/FoodCard';
import Food from './components/Food';
import Category from './components/Category';

function App() {
  return (
    <div className='bg-amber-100'>
      <NavBar/>
      <Hero/>
      <FoodCard/>
      <Food/>
      <Category/>
    </div>
  );
}

export default App;
