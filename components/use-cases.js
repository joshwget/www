import styled from 'styled-components';

import { Row, Column, Text, Section, Heading } from './core';

const Container = styled(Column)`
  justify-content: flex-end;
  align-items: center;
`;
Container.defaultProps = {
  width: '130px'
};

const Label = styled(Text)`
  text-transform: uppercase;
`;
Label.defaultProps = {
  fontWeight: 6,
  fontSize: 2,
  marginTop: 4,
  textAlign: 'center'
};

const UseCases = () => (
  <Section alignItems="flex-start">
    <Row
      alignItems="center"
      marginBottom={11}
      justifyContent="space-between"
      alignSelf="stretch"
    >
      <Column marginRight={10}>
        <Container marginBottom={8}>
          <img
            src="/single-board-computer.svg"
            height={80}
            alt="Single-board computer"
          />
          <Label>Single-board computers</Label>
        </Container>

        <Container>
          <img src="/iot-gateway.svg" height={80} alt="IoT gateways" />
          <Label>IoT gateways</Label>
        </Container>
      </Column>
      <Column justifyContent="space-between" marginRight={10}>
        <Container marginBottom={8}>
          <img src="/servers.svg" height={80} alt="Edge servers" />
          <Label>Edge servers</Label>
        </Container>

        <Container>
          <img src="/drones.svg" height={80} alt="Drones" />
          <Label>Drones</Label>
        </Container>
      </Column>
      <Heading variant="secondary" textAlign="right" maxWidth="550px">
        Support for a variety of hardware
      </Heading>
    </Row>

    <Row alignItems="center" justifyContent="space-between" alignSelf="stretch">
      <Heading variant="secondary">Ready for any industry</Heading>
      <Container marginRight={10} marginLeft={10}>
        <img src="/machine-learning.svg" height={80} />
        <Label style={{ whiteSpace: 'nowrap' }}>Machine Learning</Label>
      </Container>
      <Row alignItems="center">
        <Column alignItems="flex-end" marginRight={10}>
          <Container marginBottom={6}>
            <img src="/consumer.svg" height={80} />
            <Label>Consumer</Label>
          </Container>

          <Container>
            <img src="/medical.svg" height={80} />
            <Label>Medical</Label>
          </Container>
        </Column>

        <Column>
          <Container marginBottom={6}>
            <img src="/robotics.svg" height={80} />
            <Label>Robotics</Label>
          </Container>

          <Container>
            <img src="/industrial.svg" height={80} />
            <Label>Industrial</Label>
          </Container>
        </Column>
      </Row>
    </Row>

    {/* <div className="tablet">
      <div className="group">
        <div className="container">
          <img src="/consumer.svg" height={120} />
          <Text>Consumer</Text>
        </div>

        <div className="container">
          <img src="/robotics.svg" height={140} />
          <Text>Robotics</Text>
        </div>
      </div>

      <div className="group">
        <div className="container">
          <img src="/medicine.svg" height={110} />
          <Text>Medical</Text>
        </div>

        <div className="container">
          <img src="/machine-learning.svg" height={100} />
          <Text>Machine Learning</Text>
        </div>
      </div>

      <div className="container">
        <img src="/industrial.svg" height={140} />
        <Text>Industrial</Text>
      </div>
    </div> */}

    <style jsx>{`
      span {
        text-transform: uppercase;
        font-weight: 800;
        font-size: 14px;
        margin-top: 1rem;
        text-align: center;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 3rem;
      }
      .row {
        display: flex;
        align-items: baseline;
        justify-content: center;
      }
      .group {
        display: flex;
        align-items: baseline;
      }
      .tablet {
        display: none;
      }

      @media screen and (max-width: 1200px) {
        .row {
          flex-direction: column;
          align-items: center;
        }
        .group:last-child {
          margin-top: 3rem;
        }
      }
      @media screen and (max-width: 800px) {
        .desktop {
          display: none;
        }
        .tablet {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .group {
          justify-content: center;
        }
        .group:not(:last-child) {
          margin-bottom: 3rem;
        }
        .container {
          flex: 0 0 12rem;
          justify-content: center;
        }
      }
      @media screen and (max-width: 480px) {
        .group {
          flex-direction: column;
          align-items: center;
          margin: 0 !important;
        }
        .container {
          flex: unset;
          margin: 1.5rem 0;
        }
      }
    `}</style>
  </Section>
);

export default UseCases;
