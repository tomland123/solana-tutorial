import { Col, Container, Row } from "react-grid-system";
import { ExplanationText, Section, Title } from "../Components/Explanation";
import Link from "../Components/Link";

const Success = () => {
  return (
    <Container className="wrapper">
      <Row>
        <Col>
          <Title>Congratulations! </Title>
          <ExplanationText>
            You have sent a transaction in Solana. Request any feature / have a
            question? Let me know in Github and I will add it to the website!
          </ExplanationText>
        </Col>
      </Row>

      <Section>
        <Link
          style={{
            marginLeft: "auto",
          }}
          to={`/`}
        >
          Go Back To Beginning
        </Link>
      </Section>
    </Container>
  );
};

export default Success;
