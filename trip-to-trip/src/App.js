import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Register from './RegisterPage/RegisterPage';
import SignIn from './SignIn/SignIn';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home/Home';
import Community from './Community/Community';
import DiscoverPage from './DiscoverPage/DiscoverPage';
import AboutUs from './AboutUs/AboutUs';
import SpecialDeal from './SpecialDeal/SpecialDeal';
import Admin from './Admin/Admin';
import Profile from './Profile/Profile';
import { auth } from './Firebase/config';
import Booking from './BookingPage/BookingPage';
import DetailedLocation from './DetailedLocation/DetailedLocation';
import BookingFinalSummary from './BookingFinalSummary/BookingFinalSummary';
import Footer from './Footer/Footer';

function App() {


  const [location_data, setLocationData] = useState("")
  const [tempSldata, setTempSlData] = useState("");
  const [tempSCdata, setTempSCData] = useState("");
  const [tempEmaildata, setTempEData] = useState("");
  const [tempUNdata, setTempUNData] = useState("");
  const [tempFNdata, setTempFNData] = useState("");
  const [tempLNdata, setTempLNData] = useState("");
  const [tempADDdata, setTempADDData] = useState("");
  const [tempCITYdata, setTempCITYData] = useState("");
  const [tempBookingdata, setTempBookingData] = useState([]);
  const [spot_data, setSpotData] = useState();
  const [userdata, setUserData] = useState();
  // console.log(booking_data);
  const [userName, setUserName] = useState("");

  const getSpotDetails = async () => {
    const response = await fetch('http://localhost:5000/spot_info');
    const data = await response.json();
    setSpotData(data);
  }

  const getUserDetails = async () => {
    const response = await fetch('http://localhost:5000/user');
    const data = await response.json();
    setUserData(data);
    console.log(data);
  }

  const filterspotdata = (lc, UE) => {
    console.log("in Appjs location modified: " + location_data )
    if (location_data !== "") {
      let temp = spot_data.filter(data => data.location === location_data);
      if (temp.length !== 0) {
        setTempSlData(temp[0].location);
        setTempSCData(temp[0].country);
      }
    }else{
      setTempSlData("");
      setTempSCData("");
    }
    if (UE !== "") {
      let temp = userdata.filter(data => data.email === UE);
      if (temp.length !== 0) {
        setTempEData(temp[0].email);
        setTempUNData(temp[0].username);
        setTempFNData(temp[0].fname);
        setTempLNData(temp[0].lname);
        setTempADDData(temp[0].address);
        setTempCITYData(temp[0].city);
      }

    }else{
      setTempEData("");
      setTempUNData("");
      setTempFNData("");
      setTempLNData("");
      setTempADDData("");
      setTempCITYData("");
    }
  }

  // const filterUserdata = (UE) =>{

  // }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
    getSpotDetails();
    getUserDetails();
  }, []);

  useEffect(() => {
    filterspotdata(location_data, userName);
  }, [location_data, userName])


  // useEffect(()=>{
  //   filterUserdata(userName);
  // },[userName])

  return (
    <div className="App">
      <Router>
        <Header name={userName} ></Header>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Discover" element={<DiscoverPage set_B_DfD={setLocationData} />} />
          <Route exact path='/Community' element={<Community email={userName} fname={tempFNdata} lname={tempLNdata}/>} />
          <Route exact path='/SpecialDeal' element={<SpecialDeal email={userName} set_B_D={setLocationData} />} />
          <Route exact path='/AboutUs' element={<AboutUs />} />
          <Route exact path='/SignIn' element={<SignIn />} />
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/Admin' element={<Admin />} />
          <Route exact path='/Booking' element={<Booking getBookingInfo={setTempBookingData} set_email={tempEmaildata} set_username={tempUNdata} set_fname={tempFNdata} set_lname={tempLNdata} set_address={tempADDdata} set_city={tempCITYdata} set_loc={tempSldata} set_cntry={tempSCdata}/>} />
          <Route exact path='/Profile' element={<Profile name={userName} fname={tempFNdata} lname={tempLNdata} username={tempUNdata} city={tempCITYdata} address={tempADDdata}/>} />
          <Route exact path='/DetailedLocation' element={<DetailedLocation userEmail={tempEmaildata} location={tempSldata}/>} />
          <Route exact path='/BookingFinal' element={<BookingFinalSummary final_info={tempBookingdata} />} />

          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
