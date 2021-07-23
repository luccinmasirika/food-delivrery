import 'rsuite/dist/styles/rsuite-default.css';

import React, { useEffect, useState } from "react";
import { authenticate, isAuthenticated, signin } from "../../api/auth";

import { API } from "../../config";
import { Button } from 'rsuite';
import { Redirect } from "react-router-dom";
import { getLogo } from "../../api/shop";

const Login = () => {
  const [state, setState] = useState({
    error: "",
    email: "",
    password: "",
    loader: false,
    redirect: false,
  });

  const [logo, setLogo] = useState("")

  const onCancel = () => {
    setState({ ...state, error: "", email: "", password: "", loader: false });
  };

  const { error, email, password, redirect, loader } = state;

  const handleChange = (prop) => (event) => {
    setState({ ...state, error: false, [prop]: event.target.value });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    setState({ ...state, error: false, loader: true });
    const data = await signin({ email, password });
    if (data.error) {
      console.log(error);
      setState({ ...state, error: data.error, redirect: false, loader: false });
    } else {
      authenticate(data, () => {
        setState({ ...state, loader: false, redirect: true });
      });
    }
  };

  const redirectUser = (redirect) => {
    if (redirect) {
      return <Redirect to="/" />;
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  useEffect( () => {
   (async function(){
    const data = await getLogo()
    setLogo(data.logo)
  })()
  }, [])

  return (
    <div className="misc-wrapper">
      {redirectUser(redirect)}
      <div className="misc-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="misc-header text-center">
                {/* <img
                  alt="icon"
                  // src={`${API}/${logo}`}
                  style={{ height: "50px" }}
                  className="logo-icon margin-r-10"
                /> */}
                <Button>Hello World</Button>;
              </div>

              {error && (
                <div
                  class="alert bg-danger alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Erreur!</strong> {error}
                  <button
                    type="button"
                    class="close"
                    onClick={onCancel}
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              )}

              <div className="misc-box">
                <form onSubmit={handelSubmit}>
                  <div className="form-group">
                    <label for="exampleuser1">Email</label>
                    <div className="group-icon">
                      <input
                        id="exampleuser1"
                        type="text"
                        placeholder="Email"
                        className={`form-control ${error && "is-invalid"}`}
                        onChange={handleChange("email")}
                        required=""
                        name="email"
                      />
                      <span className="icon-user text-muted icon-input"></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Mot de passe</label>
                    <div className="group-icon">
                      <input
                        id="exampleInputPassword1"
                        type="password"
                        name="password"
                        className={`form-control ${error && "is-invalid"}`}
                        onChange={handleChange("password")}
                        placeholder="Mot de passe"
                      />
                      <span className="icon-lock text-muted icon-input"></span>
                    </div>
                  </div>
                  <div className="clearfix">
                    <div className="float-right">
                      <button
                        type="submit"
                        disabled={loader}
                        style={{ cursor: "pointer" }}
                        className="btn btn-block btn-primary btn-rounded box-shadow"
                      >
                        <span
                          class="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        {loader ? "Loading..." : "Connexion"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="text-center misc-footer">
                <p className="copyright">
                  Copyright &copy; {new Date().getFullYear()} Eben Ezer Shop and
                  Designed by{" "}
                  <span>
                    <a
                      id="copyright-link"
                      href="https://uptodatedevelopers.com"
                    >
                      Uptodate Developpers
                    </a>
                  </span>{" "}
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
