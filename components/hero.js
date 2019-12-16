import Arrow from './icons/arrow';
import {
  Column,
  Row,
  Input,
  Section,
  Button,
  Heading,
  Paragraph,
  Form
} from './core';

const Hero = ({ airtable }) => {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    setEmail('');
    setSubmitted(true);

    airtable('Emails').create(
      [
        {
          fields: { Email: email }
        }
      ],
      function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function(record) {
          console.log(record.getId());
        });
      }
    );
  };

  return (
    <Column
      alignItems="center"
      width="100%"
      paddingBottom="200px"
      position="relative"
      overflow="hidden"
    >
      <img alt="Black triangle background" className="bg" src="/bg.svg" />

      <Section alignItems="flex-start" position="relative" padding={0}>
        <Column maxWidth={14} marginTop={6}>
          <Heading maxWidth="625px">Manage your devices at the edge</Heading>

          <Paragraph maxWidth={12}>
            Update, monitor, and access remote devices and servers with ease.
            Let us handle the hard infrastructure problems around managing
            remote hardware so you can stay focused on your business.
          </Paragraph>
        </Column>

        <Column maxWidth="435px" width="100%">
          <Column>
            {/* <div>
              <span>
                Thanks for your interest, we'll reach out as soon as we can.
              </span>
            </div> */}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Input
                  required
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Button title="Request a demo" marginLeft={1} />
              </Row>
            </Form>
          </Column>

          <Row>
            <Button
              marginTop={5}
              title="Chat with us"
              variant="secondary"
              onClick={() => window.Intercom('show')}
              icon={<Arrow />}
            />
          </Row>
        </Column>
      </Section>

      <style jsx>{`
        @keyframes shift {
          50% {
            transform: translateX(5px);
          }
        }

        .bg {
          position: absolute;
          top: 0;
          right: -220px;
        }

        // .chat:hover .arrow {
        //   animation-name: shift;
        //   animation-duration: 1.2s;
        //   animation-timing-function: ease-in-out;
        //   animation-iteration-count: infinite;
        //   animation-fill-mode: forwards;
        //   animation-direction: alternate;
        // }
        // .chat:hover :global(svg) {
        //   fill: var(--white);
        // }

        .arrow {
          display: flex;
          margin-left: 0.75rem;
        }

        .arrow :global(svg) {
          fill: var(--black);
          transition: fill 200ms;
        }

        .success {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          padding: 0 1.5rem;
          height: 3rem;
          border: 2px solid var(--primary);
          border-radius: var(--radius);
          color: var(--primary);
          font-weight: 500;
          display: ${submitted ? 'inline-flex' : 'none'};
        }

        @media screen and (max-width: 600px) {
          section {
            height: 40rem;
          }
          .bg {
            height: 45rem;
            left: -88rem;
          }

          .success {
            height: 5rem;
          }
        }
      `}</style>
    </Column>
  );
};

export default Hero;
