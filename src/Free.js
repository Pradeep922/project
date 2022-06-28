import React from 'react';
import "./Free.css";
import Card from './Card';

let data =[
  {
    cardtitle:"Free",
        cardprice : "$0",
        carduser : "Single User",
        cardstorage : "5Gb Storage",
        publicProject : true,
        communityAcess : true,
        unlimitedPp : false,
        dedicatedPhone : false,
        subdomain : false,
        monthlyStatus : false 

  },
  {
    cardtitle:"Plus",
        cardprice : "$9",
        carduser : "5 Users",
        cardstorage : "50Gb Storage",
        publicProject : true,
        communityAcess : true,
        unlimitedPp : true,
        dedicatedPhone : true,
        subdomain : true,
        monthlyStatus : false 
  },
  {
    cardtitle:"Pro",
        cardprice : "$49",
        carduser : "Unlimited Users",
        cardstorage : "150Gb Storage",
        publicProject : true,
        communityAcess : true,
        unlimitedPp : true,
        dedicatedPhone : true,
        subdomain : true,
        monthlyStatus : true 
  }
]
export default function Free () {
    return  (
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {data.map((value, index) => {
        return(
        <div className="col-lg-4" key={index}>
          <Card value={value} />
          </div> 
          );
      })}
     
     </div>
  </div>
</section>
  );
}

