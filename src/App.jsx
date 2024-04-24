import React, { useEffect, useState } from 'react';
import Navbar from './Compoenents/Navbar';
import axios from 'axios';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Compoenents/Home';
import Saves from './Compoenents/Saves';


const App = () => {
  const API_KEY = "bhdzbnkexDBR9ZMVgnWWfpc5XhXOmKixRaAmpBFh5gmyHzDoj2aIPZpA";
  const [images, setImages] = useState([]);
  const [search,setsearch]=useState("nature");
  const [loader,setloader]=useState(true)
  const[saved,setsaved]=useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`, {
        headers: {
          Authorization: API_KEY, 
        }
      });
      setImages(res.data.photos);
      setloader(false)
      console.log(images); // Moved console.log here
    };
    fetchImages();
  }, [search]); // Removed API_KEY from the dependency array
console.log("img is saved",saved)
  return (
    <>
    <Router>
    <Navbar setsearch={setsearch} />
    <Routes>
      <Route path='/'element={<Home images={images}loader={loader}setsaved={setsaved}saved={saved} />}/>
      <Route path='/saves'element={<Saves saved={saved}loader={loader}/>} />
    </Routes>
    </Router> 
      
    </>
  );
};

export default App;
