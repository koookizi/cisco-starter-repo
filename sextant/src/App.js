import './styles/App.css'
import Banner from './components/banner'
import Exhibit from './components/exhibit'
import IPAPI4 from './components/ipapi4'
import IPAPI6 from './components/ipapi6'
import Latency from './components/latency'


function App() {
  return (
      <div className="App">
          <Banner bannerText="Sextant" />
          <div className="flex-boxes">
              <div className="ip_address">
                  <Exhibit name="Your Public IPv4 Address" children={<IPAPI4/>}></Exhibit>
              </div>
              <div className="ip_address">
                  <Exhibit name="Your Public IPv6 Address" children={<IPAPI6/>}></Exhibit>
              </div>
              <div className="latency">
                  <Exhibit name="Latency" children={<Latency/>}></Exhibit>
              </div>
          </div>

      </div>
  );
}

export default App;
