import './styles/App.css'
import Banner from './components/banner'
import Exhibit from './components/exhibit'
import IPAPI4 from './components/ipapi4'
import IPAPI6 from './components/ipapi6'


function App() {
  return (
      <div className="App">
          <Banner bannerText="Sextant" />
          <div className="ip_addresses">
              <div className="ip_address">
                  <Exhibit name="Your Public IPv4 Address" children={<IPAPI4/>}></Exhibit>
              </div>
              <div className="ip_address">
                  <Exhibit name="Your Public IPv6 Address" children={<IPAPI6/>}></Exhibit>
              </div>
          </div>
      </div>
  );
}

export default App;
