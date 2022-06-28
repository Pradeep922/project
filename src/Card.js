import React from "react";

export default function Card(props) {
  const { value } = props;
  const {
    cardtitle,
    cardprice,
    carduser,
    cardstorage,
    publicProject,
    communityAcess,
    unlimitedPp,
    dedicatedPhone,
    subdomain,
    monthlyStatus,
  } = value;
  return (
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          {cardtitle}
        </h5>
        <h6 className="card-price text-center">
          {cardprice}
          <span className="period">/month</span>
        </h6>
        {/* <hr> */}
        <ul className="fa-ul">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {carduser}
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {cardstorage}
          </li>
          <li className={publicProject ? "" : "text-muted"}>
            <span className="fa-li">
              <i
                className={publicProject ? "fas fa-check" : "fas fa-times"}
              ></i>
            </span>
            Unlimited Public Projects
          </li>
          <li className={communityAcess ? "" : "text-muted"}>
            <span className="fa-li">
              <i
                className={communityAcess ? "fas fa-check" : "fas fa-times"}
              ></i>
            </span>
            Community Access
          </li>
          <li className={unlimitedPp ? "" : "text-muted"}>
            <span className="fa-li">
              <i className={unlimitedPp ? "fas fa-check" : "fas fa-times"}></i>
            </span>
            Unlimited Private Projects
          </li>
          <li className={dedicatedPhone ? "" : "text-muted"}>
            <span className="fa-li">
              <i
                className={dedicatedPhone ? "fas fa-check" : "fas fa-times"}
              ></i>
            </span>
            Dedicated Phone Support
          </li>
          <li className={subdomain ? "" : "text-muted"}>
            <span className="fa-li">
              <i className={subdomain ? "fas fa-check" : "fas fa-times"}></i>
            </span>
            {cardtitle === "Pro" ? <b>Unlimited</b> : ""} Free Subdomain
          </li>
          <li className={monthlyStatus ? "" : "text-muted"}>
            <span className="fa-li">
              <i
                className={monthlyStatus ? "fas fa-check" : "fas fa-times"}
              ></i>
            </span>
            Monthly Status Reports
          </li>
        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">
            Button
          </a>
        </div>
      </div>
    </div>
  );
}
