import {
  Explanation,
  ExplanationText,
  Footer,
  Section,
  Title,
} from "../Components/Explanation";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Transaction,
  SystemProgram,
  PublicKey,
  Account,
  sendAndConfirmTransaction,
} from "@solana/web3.js";

import fetchAllAcountInfo from "../utils/fetchAllAccountInfo";
import AccountCard from "../Components/AccountCard";
import Github from "../Components/Github";
import { Row, Col, Container } from "react-grid-system";
import Spinner from "../Components/Spinner";
import Link from "../Components/Link";

const SendTransaction = ({ accountList, connection }) => {
  const [transaction, setTransactions] = useState(false);
  const [value, setValue] = useState("");
  const [balanceLoading, setBalanceLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const sendTransactions = async () => {
    setLoading(true);
    const account = new Account(transaction?.[0].secretKey);
    const valueToSend = value * 1000000000;
    console.log(valueToSend);
    const secondAccount = new PublicKey(transaction[1].publicKey.toString());

    const sendTransaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: account.publicKey,
        toPubkey: secondAccount,
        lamports: valueToSend,
      }),
    );

    await sendAndConfirmTransaction(connection, sendTransaction, [account], {
      skipPreflight: true,
    });

    const accountDetailOne = await fetchAllAcountInfo(
      account.publicKey,
      connection,
    );

    let accountDetailTwo = await fetchAllAcountInfo(secondAccount, connection);

    setTransactions([
      { ...accountDetailOne, secretKey: transaction?.[0]?.secretKey },
      accountDetailTwo,
    ]);

    setLoading(false);
  };

  useEffect(() => {
    const abortController = new AbortController();

    const getNewAccount = async () => {
      const secondAccount = await new PublicKey(
        "DoFxSedewimW1j8wz1LDhNUsqWs97aytqXkhFj8WBz8H",
      );

      if (connection) {
        setLoading(true);
        setBalanceLoading(true);

        const mainAccount = new PublicKey(
          accountList?.[0]?.publicKey.toString(),
        );

        const accountDetailOne = await fetchAllAcountInfo(
          mainAccount,
          connection,
        );

        let accountDetailTwo = await fetchAllAcountInfo(
          secondAccount,
          connection,
        );

        const airDrop = await connection.requestAirdrop(
          mainAccount,
          1000000000,
        );

        setTransactions([
          { ...accountDetailOne, secretKey: accountList?.[0]?.secretKey },
          accountDetailTwo,
        ]);

        const tryAgain = async (number = 10) => {
          const mainAccountUpdated = await fetchAllAcountInfo(
            mainAccount,
            connection,
          );
          if (abortController.signal.aborted) {
            return;
          }

          if (mainAccountUpdated.balance > accountDetailOne?.balance) {
            {
              setTransactions([
                {
                  ...mainAccountUpdated,
                  secretKey: accountList?.[0]?.secretKey,
                },
                accountDetailTwo,
              ]);

              setBalanceLoading(false);

              return;
            }
          } else {
            if (balanceLoading) {
              await new Promise((resolve) => setTimeout(() => resolve(), 2000));

              await tryAgain(airDrop, number - 1);
            }
          }
        };

        tryAgain();

        setLoading(false);
      }
    };

    getNewAccount();
    return () => {
      abortController.abort();
    };
  }, [connection]);

  return (
    <>
      <Spinner loading={loading} />
      <Container className="wrapper">
        <Explanation>
          <Title>Let's try sending a transaction!</Title>
          <ExplanationText>
            Some money has been airdropped into one of the accounts you created
            previously! Airdropping means that we have deposited some Solana
            that you can play with on your account. This can take a few seconds.
          </ExplanationText>
          <ExplanationText>
            To send a transaction do this, you need the reciever wallet, and the
            send wallet. This page has two generated accounts. The first
            account, is the one you previously generated in the last screen. The
            second account is a dummy account created to track public
            transactions from users who go through this tutorial. If you want to
            check the transactions of other users, you can see a list of all
            transactions here:
          </ExplanationText>
        </Explanation>

        <Row>
          <Col xs={5}>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Title>Sender Account</Title>
            </div>
            <AccountCard account={transaction[0]} />
          </Col>
          <Col xs={2}>
            <div
              style={{
                display: "flex",
                height: "100%",
              }}
            >
              <img
                style={{
                  width: "50%",
                  margin: "auto",
                }}
                src="Arrow_east.svg"
              />
            </div>
          </Col>
          <Col xs={5}>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Title>Receiving Account</Title>
            </div>
            <AccountCard account={transaction[1]} loadingBalance={loading} />
          </Col>
        </Row>

        <Section />
        <Section className={"column-mobile"}>
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <input
              style={{
                border: "none",
                outline: "none",
                borderBottom: "1px solid black",
              }}
              type="number"
              placeholder="0.00500000"
              step="0.00000500"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            ></input>
            <button className={"send-transaction"} onClick={sendTransactions}>
              Send coins to new account
            </button>
          </div>
          <div style={{ height: "20px" }} />

          <Link
            to={`/success`}
            className={!accountList.length ? "disabled" : "created"}
          >
            Finish
          </Link>
        </Section>
      </Container>
      <Container>
        <Footer>
          <Github />
        </Footer>
      </Container>
    </>
  );
};

export default SendTransaction;
