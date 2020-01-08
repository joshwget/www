import Head from 'next/head';

import theme from '../theme';
import Nav from '../components/nav';
import Footer from '../components/footer';
import {
  Box,
  Row,
  Column,
  Heading,
  Paragraph,
  Text,
  Button
} from '../components/core';

const postings = [
  {
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    body: (
      <>
        <Paragraph>
          As a software engineer, you'll own projects both big and small and be
          responsible for complete ownership and delivery of these projects. Our
          philosophy is that all engineers should be both product-minded and
          involved in product decisions day to day. This means that all
          engineers will be responsible for everything from product design to
          technical architecture and implementation.
        </Paragraph>
        <Paragraph>
          If you're excited by open source, working on a highly technical
          products, and tackling the hardest engineering problems then we'd like
          to talk to you!
        </Paragraph>
      </>
    )
  },
  {
    title: 'Developer Advocate',
    location: 'San Francisco, CA',
    body: (
      <>
        <Paragraph>
          As a developer advocate, you’ll spread awareness of Deviceplane
          through a wide variety of online and in-person mediums including
          forums, meetups, and conferences. You'll create content such as blog
          posts, sample applications, and video demos that serve to teach both
          how to use Deviceplane and the technical details of its internals.
        </Paragraph>
        <Paragraph>
          If you’re excited by engaging with developers, telling stories, and
          creating technical content, please reach out!
        </Paragraph>
      </>
    )
  }
];

const Posting = ({ title, location, body }) => (
  <Column
    border={0}
    borderColor="white"
    bg="black"
    padding={6}
    borderRadius={1}
    maxWidth="500px"
    marginX={4}
    marginTop={6}
  >
    <Row
      justifyContent="space-between"
      alignItems="center"
      alignSelf="stretch"
      marginBottom={2}
    >
      <Text fontWeight={3} fontSize={5}>
        {title}
      </Text>
      <Button
        display={['none', 'none', 'flex']}
        marginLeft={2}
        variant="text"
        title="Apply"
        rel="noopener noreferrer"
        target="_blank"
        href={`mailto:careers@deviceplane.com?subject=${title}`}
      />
    </Row>

    <Row display={['flex', 'flex', 'none']} marginBottom={2}>
      <Button
        variant="text"
        title="Apply"
        rel="noopener noreferrer"
        target="_blank"
        href={`mailto:careers@deviceplane.com?subject=${title}`}
      />
    </Row>

    {/* <Text fontWeight={2}>{location}</Text> */}

    <Box>{body}</Box>
  </Column>
);

const Careers = () => (
  <>
    <Head>
      <title>Careers</title>
    </Head>

    <Nav />

    <Column alignItems="center" paddingBottom={6}>
      <Column
        bg="black"
        alignItems="center"
        flex={1}
        paddingTop={6}
        paddingBottom={9}
        alignSelf="stretch"
      >
        <Heading>Careers</Heading>

        <Text
          maxWidth="630px"
          marginX={6}
          marginTop={4}
          textAlign="center"
          fontWeight={1}
        >
          Our goal is to make Deviceplane the de facto way to manage all remote
          hardware and devices. The path to get there requires deep engagement
          with a massive community of developers — both to maximize adoption of
          Deviceplane, and to make sure we're building the product that fits
          their requirements and sparks joy.
        </Text>
      </Column>

      <Row
        justifyContent={['initial', 'initial', 'initial', 'center']}
        alignItems={['center', 'center', 'center', 'initial']}
        width="100%"
        maxWidth={theme.pageWidth}
        flexDirection={['column', 'column', 'column', 'row']}
        paddingX={4}
      >
        {postings.map(props => (
          <Posting {...props} />
        ))}
      </Row>
    </Column>

    <Footer />
  </>
);

export default Careers;
