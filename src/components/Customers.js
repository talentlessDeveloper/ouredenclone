import React from "react";
import parse from "html-react-parser";

import cowryrise from "../assets/cowrywise_wtcvv5.svg";
import flutterwave from "../assets/flutterwave_cmhzbz.svg";
import paystack from "../assets/paystack_zez4ir.svg";
import kuda from "../assets/kuda_irz12h.svg";
import buycoins from "../assets/buycoins_bkcrvh.svg";
import piggy from "../assets/piggyvest_wyio8s.svg";
import customersBg from "../assets/bg3_hvc5h7.svg";
import customersBg1 from "../assets/bg4_c3xipp.svg";
import Card from "./Card";
// import { useQuery } from "react-query";

import { users } from "../utils/dummyData";
import { quotes } from "../utils/quotes";
import { useFetch } from "../utils/useFetch";

function Customers({ title, className }) {
  // const getUsers = async () => {
  //   const res = await fetch(`https://randomuser.me/api?results=${noOfCards}`);
  //   return res.json();
  // };

  const { data, status } = useFetch();

  return (
    <section
      className="customers"
      style={
        className === "value-customers"
          ? { background: "transparent", padding: "160px 0 230px" }
          : className === "food-customers"
          ? { background: "#f7fdff", padding: "80px 0 90px" }
          : className === "laundry-customers"
          ? {
              background: "#f7fdff",
              padding: "200px 0 230px",
            }
          : className === "cleaning-customers"
          ? {
              background: "#f7fdff",
              padding: "160px 0 230px",
            }
          : {
              backgroundColor: "#f7f8fe",
              background: `url(${customersBg}) ,url(${customersBg1})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 66%, bottom 9% right 6%",
            }
      }
    >
      <div className="customers__content wrapper">
        <div className="customers__title">
          <h2>{parse(title)}</h2>

          <div className={className ? "hide" : "customers__title--image"}>
            <img src={cowryrise} alt="cowrywise" />
            <img src={flutterwave} alt="flutter" />
            <img src={paystack} alt="paystack" />
            <img src={kuda} alt="kuda" />
            <img src={buycoins} alt="buycoins" />
            <img src={piggy} alt="piggyvest" />
          </div>
        </div>
        <div className="customers__testimonials">
          {status === "loading" && <h2>Loading...</h2>}

          {status === "error" &&
            users.map((user, idx) => {
              return (
                <Card
                  key={`card${idx}`}
                  name={user.name.first}
                  username={user.login.username}
                  image={user.picture.medium}
                  description={quotes[idx]}
                />
              );
            })}

          {status === "success" &&
            data.results.map((user, idx) => {
              return (
                <Card
                  key={`card${idx}`}
                  name={user.name.first}
                  username={user.login.username}
                  image={user.picture.medium}
                  description={quotes[idx]}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Customers;

//

// {
//   status === "error" && <div>Error Loading Data</div>;
// }
// {
//   status === "loading" && <div>Fetching Data</div>;
// }

// {
//   status === "success" && (
//     <div className="customers__testimonials">
//       {data.results.map((user, idx) => {
//         return (
//           <Card
//             key={`card${idx}`}
//             name={user.name.first}
//             username={user.login.username}
//             image={user.picture.medium}
//             description={description[idx]}
//           />
//         );
//       })}
//     </div>
//   );
// }
