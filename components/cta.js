import Arrow from './icons/arrow';
import { Section, Heading, Column, Row, Button } from './core';

const CTA = ({}) => (
  <Column width="100%" alignItems="center" bg="black">
    <Section>
      <Heading variant="secondary">Ready to get started?</Heading>

      <Row marginTop={8}>
        <Button
          title="Chat with us"
          variant="secondary"
          onClick={() => window.Intercom('show')}
          icon={<Arrow />}
          marginRight={8}
          width="300px"
        />
        <Button
          title="Start Now"
          width="300px"
          href="https://cloud.deviceplane.com/register"
        />
      </Row>
    </Section>
    <style jsx>{`
      @keyframes shift {
        50% {
          transform: translateX(5px);
        }
      }

      button:hover .arrow {
        animation-name: shift;
        animation-duration: 1.2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-direction: alternate;
      }

      .arrow {
        display: flex;
        margin-left: 0.75rem;
      }

      @media screen and (max-width: 900px) {
        section {
          flex-direction: column;
        }
        h2 {
          text-align: center;
          margin: 0 0 2rem 0;
        }
        .row {
          flex-direction: row-reverse;
        }
      }

      @media screen and (max-width: 600px) {
        .row {
          flex-direction: column;
        }
        a {
          width: 100%;
        }
        button {
          width: 100%;
          margin: 1.5rem 0;
        }
      }
    `}</style>
  </Column>
);

export default CTA;
