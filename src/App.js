import logo from './logo.svg';
import './App.css';
import Header from './componet/Header';
import Menu from './componet/Menu';
import Dashborad from './componet/Dashborad';
import Footer from './componet/Footer';

function App() {
          return (
                    <div className="App">
                              <Header />
                              <Menu />
                              <Dashborad />
                              <Footer/>
                    </div>
          );
}

export default App;
