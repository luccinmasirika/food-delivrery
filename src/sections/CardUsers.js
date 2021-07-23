import React, { useEffect, useState } from "react";
import { API } from "../config";
import { isAuthenticated } from "../api/auth";
import { getUserStats } from "../api/shop";

const CardUsers = ({ data, onDisable, onEdit, onLoad }) => {
  const { user, token } = isAuthenticated();
  const { firstName, lastName, role, avatar, disable } = data;
  const [stats, setStats] = useState({
    sales: 0,
    total: 0,
    stock: 0,
  });
  const { sales, total, stock } = stats;

  async function getStates() {
    const stat = await getUserStats(user._id, token, data._id);
    if (!stat) return console.log("Error on get user stats");
    setStats({ sales: stat.sales, total: stat.total, stock: stat.stock });
  }

  useEffect(() => {
    getStates();
  }, []);

  return (
    <div className="col-md-4 col-xs-12">
      <div class="card" style={{ padding: "60px 0px"}}>
        <div className="card-body text-center">
          <img
            alt="profile"
            className="rounded-circle margin-b-10"
            // src={`${API}${avatar}`}
            src="/assets/img/avtar-4.png"
            style={{ opacity: `${disable ? 0.5 : 1}` }}
            width={80}
          />
          <p
            className="lead margin-b-0"
            style={{
              opacity: `${disable ? 0.5 : 1}`,
              textDecoration: `${disable ? "line-through" : "none"}`,
            }}
          >
            {firstName} {lastName}
          </p>
          <p className="text-muted">
            {role === 0
              ? "administrator" : "User"}
          </p>
          {user.role === 0 && (
            <a
              href="#"
              data-toggle="modal"
              data-target={`${disable || ".myModalUpdate"}`}
              onClick={onEdit}
              style={{
                margin: "0 5px",
                cursor: `${disable ? "not-allowed" : "pointer"}`,
                opacity: `${disable ? 0.5 : 1}`,
              }}
              class="btn btn-info btn-icon"
            >
              <i class="fa fa-edit "></i>Éditer
            </a>
          )}
          {user.role === 0 && (
            <button
              type="button"
              disabled={onLoad}
              onClick={onDisable}
              class={`btn btn-${disable ? "success" : "danger"} btn-icon`}
            >
              <i class={`fa ${disable ? "fa-check-circle" : "fa-times"}`}></i>
              {disable ? "Réactiver" : "Désactiver"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardUsers;
