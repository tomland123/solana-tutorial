// import { useRouteMatch } from "react-router";

// import { useState, useEffect } from "react";
// import { PublicKey } from "@solana/web3.js";

// import { Link } from "react-router-dom";

// const LearnAboutRent = () => {
//   const [newState, setNewState] = useState(null);
//   const route = useRouteMatch();
//   useEffect(() => {
//     const getNewAccount = async () => {
//       const account = await new PublicKey(
//         "DoFxSedewimW1j8wz1LDhNUsqWs97aytqXkhFj8WBz8H",
//       );

//       setNewState(account);
//     };

//     getNewAccount();
//   }, []);

//   return (
//     <div>
//       <h1>Learn About Rent!</h1>
//       <div>
//         Rent is a concept that is unique to Proof of Stakes crypto. Solana uses
//         rent to ensure that validators don't have to spend to resources keeping
//         track of very small accounts every epoch. Rent, while annoying and easy
//         to misunderstand, is one of the reasons Solana can go fast under current
//         hardware limitations.
//       </div>

//       <div>
//         Currently, for wallets, the amount needed for rent exemption is small.
//         Under 0.002 solana. However, for programs, rent can be incredibly
//         expensive! Let's build our first program together and see how much rent
//         we need!
//       </div>

//       <div>
//         Rent is calculated by taking the total byte size of an account and then
//         multiplying it by the amount of lamports needed to pay it. Every epoch,
//         rent is deducted until the account no is unavailable. As of Solana 1.6,
//         to be rent exempt, a person must have 24 times the amount of rent cost
//         per byte.
//       </div>
//       <div>
//         <b>
//           Let's first stake an account, and we will calculate the rent needed to
//           manage it!
//         </b>
//       </div>
//       <Link to={`/stake-account`}>Go Next</Link>
//     </div>
//   );
// };

// export default LearnAboutRent;
