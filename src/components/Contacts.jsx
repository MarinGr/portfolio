import styled from "styled-components";
import { sectionTitleStyle, CTABtn } from "../assets/styles";
import { MdEmail } from "react-icons/md";

export default function Contacts() {
  return (
    <Container id="contacts">
      <Title>Contact me</Title>
      <Desc>
        Interested in working together? Please send me a message, I'll get back
        to you as soon as possible.
      </Desc>
      <EmailBtn
        href="mailto:
marina.grishn@gmail.com"
      >
        <EmailIcon />
        Email me
      </EmailBtn>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 990px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  ${sectionTitleStyle};
`;

const Desc = styled.p`
  max-width: 40%;
  font-size: 18px;
  line-height: 160%;
  margin-bottom: 60px;
  text-align: center;

  @media (max-width: 990px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 140%;
  }
`;

const EmailBtn = styled.a`
  ${CTABtn}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const EmailIcon = styled(MdEmail)`
  font-size: 20px;
`;
