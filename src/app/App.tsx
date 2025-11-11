import '../styles/globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';

function App() {
  const x = { a: 1, b: 2 };
  const y = () => {
    console.log('hello');
  };

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
