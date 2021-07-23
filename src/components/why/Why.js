import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';

export default function Why() {
  return (
    <Layout>
      <Header parent='Home' content='Why Choose Us' title='Edit Why Choose Us Section' create={false} />
      <section className='main-content'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card d-flex'>
              <div className="d-flex justify-content-center p-4">
              <h2>Lorem ipsum dolor sit amet</h2>
              <button className="btn btn-success ml-4 ">
              <i className="fa fa-edit"></i>
              </button>
              </div>
            </div>
            <div className='card p-2'>
              <ul className='list-group list-group-flush'>
                <div className='card m-2 p-3'>
                  <li className='media'>
                    <img className='mr-3' src='/assets/img/icon1.png' width='200px' alt='Generic placeholder' />
                    <div className='media-body'>
                      <h3 className='mt-0 mb-1'>List-based media object</h3>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                      purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                    <div className="media-footer ml-4">
                        <button className="btn btn-success">
                            <i className="fa fa-edit"></i>
                        </button>
                    </div>
                  </li>
                </div>
                <div className='card m-2 p-3'>
                  <li className='media'>
                    <img className='mr-3' src='/assets/img/icon2.png' width='200px' alt='Generic placeholder' />
                    <div className='media-body'>
                      <h3 className='mt-0 mb-1'>List-based media object</h3>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                      purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                    <div className="media-footer ml-4">
                        <button className="btn btn-success">
                            <i className="fa fa-edit"></i>
                        </button>
                    </div>
                  </li>
                </div>
                <div className='card m-2 p-3'>
                  <li className='media'>
                    <img className='mr-3' src='/assets/img/icon3.png' width='200px' alt='Generic placeholder' />
                    <div className='media-body'>
                      <h3 className='mt-0 mb-1'>List-based media object</h3>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                      purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                    <div className="media-footer ml-4">
                        <button className="btn btn-success">
                            <i className="fa fa-edit"></i>
                        </button>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </Layout>
  );
}
