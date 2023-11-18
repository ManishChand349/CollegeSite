import React from "react";
import styled from "styled-components";
import MainLogo from "../assets/home-img/MainLogo.png";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import SD1 from "../assets/home-img/SD1.png"
import SD2 from "../assets/home-img/SD2.png"
import SD3 from "../assets/home-img/SD3.png"
import SD4 from "../assets/home-img/SD4.png"

export const Home = () => {


  return (
    <>
      <Main>
      <div className="top-div">
        Hello
      </div>
        <header className="main-header">
          <img className="main-logo" src={MainLogo} alt="MainLogo" />
          <p className="para">#EducationJoApkeKaamAye</p>
          <button className="Why-btn">Why GoOnlineCollege</button>
          <Link className="link-tag" to="/me">Programs</Link>
          <Link className="link-tag" to="/me">Top Universities</Link>
          <Link className="link-tag" to="/me">Analyse Yourself</Link>
          <Link className="link-tag" to="/me">Refer & Earn</Link>
          <button className="Login-btn">Login</button>
        </header>
        {/* sllder */}
        <section className="containerSlider">
        <ImageSlider images={[SD1,SD2,SD3,SD4,]}>
         </ImageSlider>
        </section>
         {/* Search */}

        <section className="Search-div">
        <div className="input-div">

            <input className="inp-search" type="text" name="" placeholder="University / Course" id="" />
            <button className="Search-btn">Search</button>
        </div>
        </section>

        {/* Explore */}

        <section className="Explore-courese-div">
          <div className="Courese-div">
            <h1>Explore Courses</h1>
            <div className="programs-div">
              <div className="inner-div">UG Programs</div>
              <div className="inner-div">PG Programs</div>
              <div className="inner-div">Ph.D/Doctorate</div>
              <div className="inner-div">Executive Programs</div>
              <div className="inner-div">Skill Based</div>
            </div>
          </div>
        </section>

        <section className="Compare-Course-div">
          <div className="compare-div">
            <h1>Compare & Select Best Course of Your Choice</h1>
            <button className="compare-btn">Compare Courses</button>
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
  background-color: #4175FC;
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
  margin: 0 4rem;
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
  color: #000;
  padding: 7px 2px;
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
  background-color: #F8F9F9;
  margin-top: 10px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

}
.input-div{
  /* display: flex; */
  /* justify-content: center; */
  }
  .inp-search{
    padding: 12px 0;
    border: none;
    padding-right: 120px;
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
    padding: 14px 30px;
    border: none;
    border-radius: 4px;
    background-color: #084AF3;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    margin-left: 2px;
  }
  .Explore-courese-div{
    display: flex;
    justify-content: center;
    margin-top: 100px;
}
.programs-div{
  display: flex;
  gap: 10px;
  width: auto;
  background-color: #000;
  padding: 20px;
  border-radius: 7px;
}
.Courese-div h1{
  text-align: center;
  margin-bottom: 30px;

}
.inner-div{
  background-color: #084AF3;
  padding: 10px 15px;
  color: #fff;
  font-weight: 500;
  font-size:0.9rem;
  border-radius: 4px;
  cursor: pointer;
}
`;
