import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAccount from "./Pages/01_CreateAccount";
import { useEffect, useRef, useState } from "react";
import "pathseg";

import "./App.css";
import createAccount from "./utils/createAccount";
import SendTransaction from "./Pages/02_SendTransactions";
import LearnAboutRent from "./Pages/03_LearnAboutRent";
import { Connection } from "@solana/web3.js";
import { url } from "./consts/consts";
import Particles from "react-particles-js";
import Link from "./Components/Link";
import Success from "./Pages/00_Success";

const Home = () => {
  let ref = useRef();
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            position: "relative",
          }}
        >
          <Particles
            width="100vw"
            height="300px"
            params={{
              detectRetina: false,
              fpsLimit: 60,
              background: {
                color: "transparent",
              },
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onHover: {
                    enable: true,
                    mode: "bubble",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    color: "#CB4EE8",
                    distance: 30,
                    duration: 2,
                    opacity: 1,
                    size: 10,
                    speed: 1,
                  },
                },
              },
              particles: {
                color: {
                  value: "#CB4EE8",
                },
                links: {
                  blink: false,
                  color: "#10F4B1",
                  consent: false,
                  distance: 20,
                  enable: true,
                  opacity: 0.8,
                  width: 1,
                },
                move: {
                  attract: {
                    enable: true,
                    rotate: {
                      x: 600,
                      y: 1200,
                    },
                  },
                  bounce: false,
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: false,
                    area: 2000,
                  },
                  limit: 0,
                  value: 300,
                },
                opacity: {
                  animation: {
                    enable: true,
                    minimumValue: 0.05,
                    speed: 3,
                    sync: false,
                  },
                  random: false,
                  value: 1,
                },

                size: {
                  animation: {
                    enable: false,
                    minimumValue: 0.1,
                    speed: 40,
                    sync: false,
                  },
                  random: true,
                  value: 3,
                },
              },
              polygon: {
                draw: {
                  enable: true,
                  lineColor: "#fdb927",
                  lineWidth: 3,
                },
                position: {
                  x: 50,
                  y: 60,
                },

                move: {
                  radius: 10,
                },
                inlineArrangement: "equidistant",
                scale: 0.5,
                type: "inside",
                data: {
                  path:
                    "M231.2,452.3h462.7c5.8,0,11.3,2.3,15.3,6.4l73.2,73.7c13.5,13.6,3.9,36.8-15.3,36.8H304.4  c-5.8,0-11.3-2.3-15.3-6.4l-73.2-73.7C202.3,475.5,212,452.3,231.2,452.3z M215.9,354.6l73.2-73.7c4.1-4.1,9.6-6.4,15.3-6.4H767  c19.2,0,28.9,23.2,15.3,36.8L709.2,385c-4.1,4.1-9.6,6.4-15.3,6.4H231.2C212,391.4,202.3,368.2,215.9,354.6z M782.3,666.9  l-73.2,73.7c-4.1,4.1-9.6,6.4-15.3,6.4H231.2c-19.2,0-28.9-23.2-15.3-36.8l73.2-73.7c4.1-4.1,9.6-6.4,15.3-6.4H767  C786.2,630.1,795.9,653.3,782.3,666.9z",
                  size: {
                    width: 1000,
                    height: 1207,
                  },
                },
              },
            }}
          />
        </div>

        <div
          style={{
            padding: "40px",
          }}
        >
          Super Simple Introduction To Solana and Defi
        </div>
        <Link className="created" to="/create-account">
          Get Started
        </Link>
      </header>
    </div>
  );
};

function App() {
  const [accountList, setAccountList] = useState([]);

  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const connectionToSolana = async () => {
      const conn = await new Connection(url, "recent");
      setConnection(conn);
    };
    connectionToSolana();
  }, []);

  const createCoin = async () => {
    const newAccount = await createAccount();
    setAccountList([...accountList, newAccount]);
  };

  return (
    <Router>
      <Switch>
        <Route path="/create-account">
          <CreateAccount
            connection={connection}
            createCoin={createCoin}
            accountList={accountList}
          />
        </Route>

        <Route path="/send-transactions">
          <SendTransaction
            connection={connection}
            createCoin={createCoin}
            accountList={accountList}
          />
        </Route>

        <Route path="/learn-rent">
          <LearnAboutRent
            connection={connection}
            createCoin={createCoin}
            accountList={accountList}
          />
        </Route>

        <Route path="/success">
          <Success />
        </Route>

        <Route path="/stake-account">
          <LearnAboutRent
            connection={connection}
            createCoin={createCoin}
            accountList={accountList}
          />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
