import React, { useState, useEffect } from "react";

import CardUsers from "../../sections/CardUsers";
import Footer from "../footer/Footer";
import Layout from "../Layout";
import Header from "../navBar/Header";
import ActionButton from "../../sections/ActionButton";
import Input from "../../sections/Input";
import LinearProgress from "@material-ui/core/LinearProgress";
import { isAuthenticated } from "../../api/auth";

const Home = () => {
  return (
    <Layout>
      <Header parent='Home' create={false} />
      <section className='main-content'>
        <div className="card">
        <div className='row'>
          <div className='col-md-12 p-5'>

            <div className='w-100 d-flex justify-content-center'>
              <img src='/assets/img/data.svg' width='30%' alt='data' srcset='' />
            </div>
          </div>
          <div className='col-md-8 m-auto p-5 d-flex text-center font-weight-500'>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora eum temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nisi.</h5>
          </div>
        </div>
        </div>
        <Footer />
      </section>
    </Layout>
  );
};

export default Home;
