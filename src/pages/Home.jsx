import React from "react";
import styled from "styled-components";
import MainLogo from "../assets/home-img/MainLogo.png";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import ImageSliders from "./ImageSliders";
import SD1 from "../assets/home-img/SD1.png";
import SD2 from "../assets/home-img/SD2.png";
import SD3 from "../assets/home-img/SD3.png";
import SD4 from "../assets/home-img/SD4.png";
import SC1 from "../assets/home-img/SC1.png";
import SC2 from "../assets/home-img/SC2.png";
import SC3 from "../assets/home-img/SC3.png";
import SC4 from "../assets/home-img/SC4.png";
import woman from "../assets/home-img/woman.jpg";
import LPU from "../assets/home-img/LPU-Online-Logo.svg";
import Manipal from "../assets/home-img/manipal.png";
import shoolini from "../assets/home-img/shoolini.png";
import MMU from "../assets/home-img/MMU.png";
import CU from "../assets/home-img/CU.webp";
import AccordionMenu from "./AccordionMenu";

export const Home = () => {
  return (
    <>
      <Main>
        <div className="top-div">Hello</div>
        <header className="main-header">
          <img className="main-logo" src={MainLogo} alt="MainLogo" />
          <p className="para">#EducationJoApkeKaamAye</p>
          <button className="Why-btn">Why GoOnlineCollege</button>
          <Link className="link-tag" to="/me">
            Programs
          </Link>
          <Link className="link-tag" to="/me">
            Top Universities
          </Link>
          <Link className="link-tag" to="/me">
            Analyse Yourself
          </Link>
          <Link className="link-tag" to="/me">
            Refer & Earn
          </Link>
          <button className="Login-btn">Login</button>
        </header>
        {/* sllder */}
        <section className="containerSlider">
          <ImageSlider images={[SD1, SD2, SD3, SD4]}></ImageSlider>
        </section>
        {/* Search */}

        <section className="Search-div">
          <div className="input-div">
            <input
              className="inp-search"
              type="text"
              name=""
              placeholder="University / Course"
              id=""
            />
            <button className="Search-btn">Search</button>
          </div>
        </section>

        {/* Explore */}

        <section className="Explore-courese-div">
          <div className="Courese-div">
            <h1 className="Courses-heading">Explore Courses</h1>
            <div className="programs-div">
              <div className="inner-div">
                {" "}
                <button className="program-btn"> UG Programs </button>
              </div>
              <div className="inner-div">
                {" "}
                <button className="program-btn"> PG Programs </button>
              </div>
              <div className="inner-div">
                {" "}
                <button className="program-btn"> Ph.D/Doctorate </button>
              </div>
              <div className="inner-div">
                {" "}
                <button className="program-btn"> Executive Programs</button>
              </div>
              <div className="inner-div">
                {" "}
                <button className="program-btn"> Skill Based </button>
              </div>
            </div>
          </div>
        </section>

        {/* Compare courses */}
        <section className="Compare-Course-div">
          <div className="compare-div">
            <h1>Compare & Select Best Course of Your Choice</h1>
            <button className="compare-btn">Compare Courses</button>
          </div>
        </section>

        {/* Experts  */}
        <section className="Experts-section">
          <div className="grid">
            <div className="inner-div box-1">
              <h1 className="heading-1">Connect With Experts Directly</h1>
              <div className="inner-box">
                <div className="inner-box-1">
                  <img src={woman} alt="" />
                  <p>Diksha</p>
                  <p>Expert</p>
                  <p>12+ Years Experience</p>
                  <button className="compare-btn">CONNECT</button>
                </div>
                <div className="inner-box-2">
                  <img src={woman} alt="" />
                  <p>Divay Mahajan</p>
                  <p>Expert</p>
                  <p>14+ Years Experience</p>
                  <button className="compare-btn">CONNECT</button>
                </div>
              </div>
            </div>
            <div className="inner-div box-2">
              <div>
                <h1 className="connect-heading">Connect With Counselor</h1>
                <button className="compare-btn">CONNECT</button>
              </div>
            </div>
          </div>
        </section>
        {/* help section */}
        <section className="help-section">
          <div className="row">
            <div className="help-box-1">
              <h1 className="help-heading">
                GoCollege - <span> Naam Apka Pechan Apki Disha Humari </span>{" "}
              </h1>
              <h4 className="second-heading">How We Help You</h4>
            </div>
            <div className="help-box-2">
              <div className="help-box-1">
                <div className="help-inner-box1">What you want to do</div>
                <div className="help-inner-box1">What's your Achievement</div>
                <div className="help-inner-box1">Get Guidnce from us</div>
                <div className="help-inner-box1">Explore the World</div>
                <div className="help-inner-box1">Compare and Select</div>
                <div className="help-inner-box1">Complete the Process</div>
                <div className="help-inner-box1">With you, For you Always</div>
              </div>
              <div className="help-box-2 slider-phone">
                <ImageSliders images={[SC1, SC2, SC3, SC4]}></ImageSliders>
              </div>
            </div>
          </div>
        </section>
        {/* AWarded */}
        <section className="Awarded-section">
          <h1 className="help-heading">
            Recognised and Awarded Online Universities
          </h1>
          <div className="awarded-inner-div">
            <div className="awareded-inner-box-1">
              <img className="img-logo" src={LPU} alt="" />
              <p className="para-2">LPU Online</p>
            </div>
            <div className="awareded-inner-box-1">
              <img className="img-logo" src={Manipal} alt="" />
              <p className="para-2">Manipal University Online</p>
            </div>
            <div className="awareded-inner-box-1">
              <img className="img-logo" src={shoolini} alt="" />
              <p className="para-2">Shoolini University</p>
            </div>
            <div className="awareded-inner-box-1">
              <img className="img-logo" src={MMU} alt="" />
              <p className="para-2">MMU Amba</p>
            </div>
            <div className="awareded-inner-box-1">
              <img className="img-logo" src={CU} alt="" />
              <p className="para-2">Chandigarh University Online</p>
            </div>
          </div>
        </section>
        {/* knowledge */}
        <section className="knowledge-hub-section">
          <h1 className="heading-hub">Aspirants Knowledge Hub</h1>
          <div className="video-div">
            <iframe
              width="529"
              height="300"
              src="https://www.youtube.com/embed/n_HUYpELI4Y"
              title="aesthetic intro template || aesthetic vlogs :)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="529"
              height="300"
              src="https://www.youtube.com/embed/n_HUYpELI4Y"
              title="aesthetic intro template || aesthetic vlogs :)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              borderRadius="15"
            ></iframe>
          </div>
        </section>
        {/* doubts */}
        <section className="doubts-clear">
          <div>
          <AccordionMenu/>
          </div>
        </section>

        <section className="Contact-section">
              <h1 className="contact-heading">Need Help? Contact Us</h1>
              <div className="Contact-div">
              <p className="para-3"><span className="bold">Email</span> : help@getonlinecollege.com</p>
              <p className="para-3"><span className="bold">Phone</span> : +91 8000880008</p>
              <p className="para-3"><span className="bold">Timings</span> : 8 A.M. to 9 P.M.</p>
              <p className="para-3"><span className="bold">Address</span> : New Delhi, India</p>
              <button className="compare-btn">Message Us</button>
              </div>
        </section>
      </Main>
    </>
  );
};
const Main = styled.div`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.top-div{
  background-color: #EFECFF;
}
.main-logo{
     width: 190px;
    cursor: pointer;

}
.main-header{
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 10px;
}
.containerSlider{
  width: 100%;
    height: 100%;
    margin:  auto;
}
.para{
  color: #1B58F4;
  margin-right:  4rem;
}
.Why-btn{
  padding: 10px 2rem;
  background-color: #084AF3;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin: 0 3rem;
  font-weight: 700;
  cursor: pointer;
}
.link-tag{
  text-decoration: none;
  color: #1f0505;
  padding: 5px 0.4rem;
  font-weight: 700;
}
.link-tag:hover{
  background-color: #084AF3;
  border-radius: 4px;
  font-weight: 700;
  color: #fff;
}
.Login-btn{
  padding: 8px 20px;
  background-color: #084AF3;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin: 20px 10px;
  font-weight: 700;
  cursor: pointer;

}
/* Search.................. */
.Search-div{
  background-color: #EFECFF;
  /* margin-top: 50px; */
  height: 20dvh;
  display: flex;
  justify-content: center;
  align-items: center;

}
.input-div{
  /* display: flex; */
  /* justify-content: center; */
  }
  .inp-search{
    padding: 11px 0;
    border: none;
    padding-right: 190px;
    padding-left: 10px;
    border-radius: 4px;
    text-align: left;
  }
  textarea:focus, input:focus{
    outline: none;
}
input[type="text"]{
            text-align: left;
            font-weight: 500;
            font-size: 1rem;
        }
  .Search-btn{
    padding: 13px 30px;
    border: none;
    border-radius: 4px;
    background-color: #084AF3;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    margin-left: 12px;
  }
.Explore-courese-div{
    display: flex;
    justify-content: center;
    margin: 100px 0;
}
.programs-div{
  display: flex;
  gap: 10px;
  width: auto;
  background-color: #EFECFF;
  padding: 20px;
  border-radius: 7px;
}
.Courese-div h1{
  text-align: center;
  margin-bottom: 30px;
  color: #084AF3;


}
.program-btn{
  background-color: #084AF3;
  padding: 10px 15px;
  color: #fff;
  font-weight: 500;
  font-size:0.9rem;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  border: #084AF3 1px solid;
}
.program-btn:hover{
  background-color: #EFECFF;
  color: #000;
  border: #084AF3 1px solid;
}
.Compare-Course-div{
 background-color: #EFECFF;
 height: 200px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 50px;
}
.compare-btn{
  padding: 13px 30px;
    border: none;
    border-radius: 4px;
    background-color: #084AF3;
  border: #084AF3 1px solid;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    margin-left: 12px;
    margin-top: 15px;
}
.compare-btn:hover{
  background-color: #EFECFF;
  color: #000;
  border: #084AF3 1px solid;
}
.Experts-section{
   max-width: 60%;
   margin: 100px auto;
}
.compare-div h1{
  color: #084AF3;
}
.grid{
  display: grid;
  grid-template-columns: 50% 50%;
}
.inner-box{
  display: flex;
  gap: 40px;
}
.inner-div{

}
.heading-1{
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin-right: 39px;
  margin-bottom: 10px;
}
.box-2{
  display: flex;
  background-color: #EFECFF;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
}
.inner-box-1, .inner-box-2{
  background-color:  #EFECFF;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  font-weight: 500;
}
.help-section{
  background-color: #EFECFF;
  max-width: 100%;
  margin: auto;
  padding-bottom: 100px;
}
.help-inner-box1{
  padding: 30px 50px;
  background-color: #fff;
  margin-left: 20px;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: 500;

}
.help-box-2{
  display: flex;

}
.second-heading{
  margin-left: 120px;
}
.connect-heading{
  color: #084AF3;
}
.slider-phone{
  height: 60dvh;
width: 26%;
margin-left: 320px;
border-radius: 7px;
margin-top: 60px;
border: 3px solid  #084AF3;
}
.row{
  max-width: 60%;
  margin: auto;
}
.help-heading{
  text-align: center;
  font-size: 2rem;
  margin: 15px;
  padding: 16px 2px;
  color: #084AF3;
}
.Awarded-section{
  text-align: center;
  margin: 100px;
}
.awarded-inner-div{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.awareded-inner-box-1{
  width: 11%;
  padding: 30px 20px;
  border: solid #DFE0E1;
  border-width: thin;
  border-radius: 10px;
  height: 150px;
}
.img-logo{
  width: 100px;
  margin-bottom: 20px;
}
.para-2{
  color: #6A9C89;
  font-size: 13px;
  font-weight: 500;
}
.knowledge-hub-section{
  background-color: #EFECFF;

}
.heading-hub{
  text-align: center;
  padding: 10px;
  margin: 20px;
  font-size: 2rem;
  color: #084AF3;
}
.video-div{
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 40px;
}
.doubts-clear{
  max-width: 50%;
  margin: auto;
}
.Contact-section{
  background-color: #EFECFF;
}
.Contact-div{
  max-width: 20%;
  margin: auto;
}
.contact-heading{
  color: #084AF3;
  font-size: 2.3rem;
  text-align: center;
  padding: 20px 0;
}
.para-3{
  font-size: 1.3rem;
  color: #6A9C89;
}
.bold{
  font-weight: 600;
}
`;
