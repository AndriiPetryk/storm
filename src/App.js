import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Products from './components/Products';

function App() {
    return (
        <div className="App">
            <Header/>
            <Products/>
            <Footer/>
        </div>
    );
}

export default App;
