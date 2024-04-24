
import React from 'react';
import Loader from './Loader';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast,Bounce } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Home = ({ images, loader,setsaved ,saved}) => {
  const savimg=(img)=>{
    let flag=true;
    if(saved!==null && saved.length>0){
    for(let i=0;i<saved.length;i++){
      if(saved[i].id==img.id){
        flag=false;
        console.log("img is saved already")
        toast.info('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
        break;
      }
    }
  }
    if(flag){
      setsaved([...saved,img])
      toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  }
  return (
    <>
    <ToastContainer/>
      
      <div className="container-fluid text-center" id="top">
        {loader ? (
          <Loader /> // Corrected component name
        ) : (
          <>
            <div className="flex"> {/* Fixed div tag */}
              {images.map((image) => (
                <div key={image.id} className="item" onClick={()=>savimg(image)}>
                  <img src={image.src.medium} alt={image.photographer} />
                </div>
              ))}
            </div>
          </>
        )}

        {images.length !== 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back To Top
          </a>
        )}
      </div>
    </>
  );
};

export default Home;
