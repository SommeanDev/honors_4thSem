import './App.css';
import Footer from './components/footer';
import Home from './components/home/home';

// react component
const Header = () => {
  return <h1>App header</h1>
}

const myApp = () => {
  //jsx
  return <>
    <Header />
    <Home />
    <Footer />
  </>;
}

export default myApp;
