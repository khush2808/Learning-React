import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
			<Item  name  ="MacBook Pro" price = {1000}/>
			<Item  name  ="iPhone 12" price = {800}/>
			<Item  name  ="iPad Pro" price = {600}/>
			<Cart/>
			</div>
  );
}

export default App;
