import { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import FadeIn from "../Animations/FadeIn";
import AccountCard from "../Components/AccountCard";
import {
  Title,
  ExplanationText,
  Explanation,
  Footer,
} from "../Components/Explanation";
import Github from "../Components/Github";
import Link from "../Components/Link";
import Spinner from "../Components/Spinner";

const AccountCardFade = FadeIn(AccountCard);

const CreateAccount = ({ createCoin, accountList }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Spinner loading={loading} />
      <Container className="wrapper">
        <Row>
          <Col>
            <Title>Let's learn about accounts!</Title>
            <Explanation>
              <ExplanationText>
                In most cryptos, it's very easy to make hundreds of accounts.
              </ExplanationText>
              <ExplanationText>
                Having a lot of accounts is useful for many reasons! You can
                have a cold storage account that you never touch and keep under
                your mattress, while also having a hot wallet account which you
                use to trade actively.
              </ExplanationText>
              <ExplanationText>
                Let's try creating a few accounts ourselves:
              </ExplanationText>
            </Explanation>
          </Col>
        </Row>

        {!!accountList?.length && <h1> Account List:</h1>}
        <Row style={{ marginBottom: "20px" }}>
          {accountList.map((account, index) => (
            <Col md={6} style={{ marginBottom: "20px" }}>
              <AccountCardFade account={account} />
            </Col>
          ))}
        </Row>
        <div
          style={{
            display: "flex",
            alignItems: "center",

            justifyContent: "space-between",
          }}
          className="column-mobile"
        >
          <button
            onClick={async () => {
              setLoading(true);
              await createCoin();
              setLoading(false);
            }}
            className={`createAccount${!!accountList.length ? " created" : ""}`}
          >
            Create Account
          </button>

          <div style={{ height: "20px" }} />

          <Link
            to={`/send-transactions`}
            className={!accountList.length ? "disabled" : "created"}
          >
            Go Next
          </Link>
        </div>
        <div
          style={{
            marginBottom: "100px",
          }}
        ></div>
      </Container>

      <Container>
        <Footer>
          <Github />
        </Footer>
      </Container>
    </>
  );
};

export default CreateAccount;
