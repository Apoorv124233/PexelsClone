import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setsearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="nav mt-3">
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() =>{
            setsearch("Nature")
            navigate('./')
          }
          } 
        >
          Nature
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() =>{
            setsearch("Travel")
            navigate('./')
          }
          } 
        >
          Travel
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() =>{
            setsearch("City")
            navigate('./')
          }
          } 
        >
          City
        </div>
        <div
          className="button btn btn-outline-secondary mx-3"
          onClick={() =>{
            setsearch("Car")
            navigate('./')
          }
          }
        >
          Car
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() =>{
            setsearch("Fashion")
          navigate('./')
          }
          } 
        >
          Fashion
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() =>{
            setsearch("Animals")
          navigate('./')
          }
          } 
        >
          Animals
        </div>
        <div
          className="button btn btn-outline-dark text-light mx-3"
          onClick={() =>{
            setsearch("Technology")
          navigate('./')
          }
          } 
        >
          Technology
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() =>{
            setsearch("Business & Finance")
          navigate('./')
          }
          }
        >
          Business & Finance
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() =>{
            setsearch("Tokyo")
          navigate('./')
          }
          }
        >
          Tokyo
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() =>{
            setsearch("Dubai")
          navigate('./')
          }
          }
        >
          Dubai
        </div>

        {location.pathname == "/saves" ? (
          <div
            className="button btn btn-outline-warning mx-3"
            onClick={() => navigate("./")}
          >
            Home
          </div>
        ) : (
          <div
            className="button btn btn-outline-warning mx-3"
            onClick={() => navigate("./saves")}
          >
            Saved
          </div>
        )}
      </div>

      <div className="container my-4" style={{ width: "780px" }}>
        <div className="mb-3 ">
          <input
            type="email"
            className="form-control bg-dark text-light"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
