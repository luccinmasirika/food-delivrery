import React, { useState, useEffect } from "react";
import CardUsers from "../../sections/CardUsers";
import Footer from "../footer/Footer";
import Layout from "../Layout";
import Header from "../navBar/Header";
import ActionButton from "../../sections/ActionButton";
import Input from "../../sections/Input";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
  createUser,
  getUsers,
  removeUser,
  getUser,
  updateUser,
} from "../../api/shop";
import { isAuthenticated } from "../../api/auth";
import CircularProgress from "@material-ui/core/CircularProgress";

const Users = () => {
  const [users, setUsers] = useState("");
  const [update, setUpdate] = useState({
    updateFirstName: "",
    updateLastName: "",
    updateRole: "",
    id: "",
  });

  const [create, setCreate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  const [state, setState] = useState({
    loader: false,
    success: false,
    error: "",
  });

  const init = async () => {
    const data = await getUsers(user._id, token);
    if (data.error) {
      setState({ ...state, error: data.error });
    }
    setUsers(data);
  };

  const { loader, success, error } = state;
  const { firstName, lastName, role, password, email } = create;
  const { updateFirstName, updateLastName, updateRole, id } = update;
  const { user, token } = isAuthenticated();

  useEffect(() => {
    init();
  }, []);

  const handelChangeCreate = (props) => (event) => {
    setState({ error: false, success: false, loader: false });
    setCreate({ ...create, [props]: event.target.value });
  };

  const onEdit = async (id) => {
    const data = await getUser(id);
    if (data.error)
      return setState({ error: data.error, loader: false, success: false });
    setUpdate({
      updateFirstName: data.firstName,
      updateLastName: data.lastName,
      updateRole: data.role,
      id: data._id,
    });
  };

  const handelChangeUpdate = (props) => (event) => {
    setState({ error: false, success: false, loader: false });
    setUpdate({ ...update, [props]: event.target.value });
  };

  const onSubmitCreate = async (event) => {
    event.preventDefault();
    setState({ error: false, success: false, loader: true });
    const data = await createUser(token, create);
    if (data.error) return setState({ error: data.error, loader: false });
    init();
    setState({ error: false, success: data.message, loader: false });
    setCreate({
      firstName: "",
      lastName: "",
      role: "",
      password: "",
      email: "",
    });
  };

  const onSubmitUpdate = (id) => async (event) => {
    event.preventDefault();
    setState({ error: false, success: false, loader: true });
    const data = await updateUser(id, token, {
      firstName: updateFirstName,
      lastName: updateLastName,
      role: updateRole,
    });
    if (data.error) {
      return setState({ ...state, error: data.error, loader: false });
    }
    setState({ ...state, loader: false, success: data.message });
    setUpdate({
      ...update,
      updateFirstName: data.firstName,
      updateLastName: data.lastName,
      updateRole: data.role,
    });
    init();
  };

  const onCancel = () => {
    setCreate({
      firstName: "",
      lastName: "",
      role: "",
      password: "",
      email: "",
    });
    setState({ error: false, success: false, loader: false });
  };

  const createModal = () => (
    <div
      class="modal fade myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myDefaultModalLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onCancel}
            >
              <span aria-hidden="true" class="fa fa-times"></span>
            </button>
            <h5 class="modal-title" id="myDefaultModalLabel">
              Nouvel utilisateur
            </h5>
          </div>
          {loader && (
            <LinearProgress color="secondary" style={{ width: "100%" }} />
          )}
          <div class="modal-body">
            {(error || success) && (
              <div
                class={`alert bg-${
                  error ? "danger" : "success"
                } alert-dismissible fade show`}
                role="alert"
              >
                <strong>{error ? "Erreur" : "Succès"}!</strong>{" "}
                {error ? error : success}
              </div>
            )}
            <Input
              icon="fa fa-user"
              action={handelChangeCreate("firstName")}
              value={firstName}
              type="text"
              placeholder="Nom"
            />
            <Input
              icon="fa fa-user"
              action={handelChangeCreate("lastName")}
              value={lastName}
              type="text"
              placeholder="Postnom"
            />
            <Input
              icon="fa fa-at"
              action={handelChangeCreate("email")}
              value={email}
              type="text"
              placeholder="Email"
            />
            <Input
              icon="fa fa-unlock"
              action={handelChangeCreate("password")}
              value={password}
              type="password"
              placeholder="Mot de passe"
            />
            {user.role === 0 && (
              <div className="form-group">
                <select
                  onChange={handelChangeCreate("role")}
                  class="form-control"
                  value={role}
                >
                  <option value="">Rôle</option>
                  <option value={0}>Administrateur</option>
                  <option value={1}>Distributeur</option>
                  <option value={2}>Vendeur</option>
                </select>
              </div>
            )}
          </div>
          <ActionButton
            save={onSubmitCreate}
            loader={loader}
            cancel={onCancel}
          />
        </div>
      </div>
    </div>
  );

  const updateModal = () => (
    <div
      class="modal fade myModalUpdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myDefaultModalLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onCancel}
            >
              <span aria-hidden="true" class="fa fa-times"></span>
            </button>
            <h5 class="modal-title" id="myDefaultModalLabel">
              Modifier l'utilisateur
            </h5>
          </div>
          {loader && (
            <LinearProgress color="secondary" style={{ width: "100%" }} />
          )}
          <div class="modal-body">
            {(error || success) && (
              <div
                class={`alert bg-${
                  error ? "danger" : "success"
                } alert-dismissible fade show`}
                role="alert"
              >
                <strong>{error ? "Erreur" : "Succès"}!</strong>{" "}
                {error ? error : success}
              </div>
            )}
            <Input
              icon="fa fa-user"
              action={handelChangeUpdate("updateFirstName")}
              value={updateFirstName}
              type="text"
              placeholder="Nom"
            />
            <Input
              icon="fa fa-user"
              action={handelChangeUpdate("updateLastName")}
              value={updateLastName}
              type="text"
              placeholder="Postnom"
            />
            {user._id !== id && (
              <div className="form-group">
                <select
                  onChange={handelChangeUpdate("updateRole")}
                  class="form-control"
                  value={updateRole}
                >
                  <option value="">Rôle</option>
                  <option value={0}>Administrateur</option>
                  <option value={1}>Distributeur</option>
                  <option value={2}>Vendeur</option>
                </select>
              </div>
            )}
          </div>
          <ActionButton
            save={onSubmitUpdate(id)}
            loader={loader}
            cancel={onCancel}
          />
        </div>
      </div>
    </div>
  );

  const onDisable = async (id) => {
    setState({ error: false, success: false, loader: true });
    const data = await removeUser(id, token);
    if (data.error) {
      return setState({ error: data.error, success: false, loader: false });
    }
    init();
    setState({ error: false, success: false, loader: false });
  };

  return (
    <Layout>
      <Header
        parent="Accueil"
        content="Utilisateurs"
        title="Liste de utitlisateurs"
        create={true}
      />
      {createModal()}
      {updateModal()}
      <section className="main-content">
        <div className="row" style={{ position: "relative", minHeight: 400}}>
        {(!users || loader) && (
            <div className="table-flex-center-user">
              <CircularProgress />
            </div>
          )}
          {users &&
            users.map((_, i) => {
              if (_._id !== user._id) {
                return (
                  <CardUsers
                    key={_._id}
                    data={_}
                    onLoad={loader}
                    onEdit={() => onEdit(_._id)}
                    onDisable={() => onDisable(_._id)}
                  />
                );
              }
            })}
        </div>
        <Footer />
      </section>
    </Layout>
  );
};

export default Users;
