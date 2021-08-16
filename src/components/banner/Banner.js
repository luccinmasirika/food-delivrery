import React from 'react';
import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';

export default function Banner() {
  return (
    <Layout>
      <Header
        parent='Home'
        content='Banner'
        title='Edit Banner'
        create={false}
      />
      <section className='main-content'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <img
                src='/assets/img/img1.png'
                width='100%'
                alt='icon'
                srcSet=''
                className='p-3'
              />
            </div>
          </div>
          <div className='col-md-8'>
            <div className='card'>
              <div className='row p-3'>
                <div className='col-md-5'>
                  <img
                    src='/assets/img/icon1.svg'
                    width='100%'
                    alt='icon'
                    srcSet=''
                    className='p-3'
                  />
                </div>
                <div className='col-md-7'>
                  <h2 className='p-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                  <p className='p-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos, tempora. Consectetur adipisicing elit. Eos, consectetur
                    adipisicing elit. Eos, tempora.
                  </p>
                </div>
              </div>
            </div>
            <button className='btn bg-success p-3 w-100'>
              <i className='fa fa-edit'></i> CLICK HERE TO EDIT
            </button>
          </div>
        </div>

        <Footer />
      </section>
    </Layout>
  );
}
