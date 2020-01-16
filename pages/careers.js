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
  Button,
  Icon
} from '../components/core';

const postings = [
  {
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    icon: 'code',
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
    icon: 'learning',
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

const Posting = ({ title, location, body, icon }) => (
  <Column
    bg="pageBackground"
    padding={6}
    borderRadius={2}
    maxWidth="540px"
    marginX={6}
    marginTop={9}
  >
    <Row
      justifyContent="space-between"
      alignItems="center"
      alignSelf="stretch"
      marginBottom={2}
    >
      <Icon icon={icon} size={30} color="primary" />

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

    <Text fontWeight={2} fontSize={5}>
      {title}
    </Text>

    <Text
      fontWeight={2}
      fontSize={1}
      style={{ textTransform: 'uppercase' }}
      color="grays.8"
    >
      {location}
    </Text>

    <Row display={['flex', 'flex', 'none']} marginTop={2}>
      <Button
        variant="text"
        title="Apply"
        rel="noopener noreferrer"
        target="_blank"
        href={`mailto:careers@deviceplane.com?subject=${title}`}
      />
    </Row>

    <Box marginTop={4}>{body}</Box>
  </Column>
);

const Careers = () => (
  <>
    <Head>
      <title>Careers | Deviceplane</title>
    </Head>

    <Nav />

    <Column alignItems="center" paddingBottom={9} bg="black">
      <Column
        bg="black"
        alignItems="center"
        flex={1}
        paddingY={9}
        alignSelf="stretch"
      >
        <Heading>Careers</Heading>

        <Paragraph
          maxWidth="800px"
          marginX={6}
          marginTop={4}
          textAlign="center"
          fontWeight={1}
          fontSize={'20px'}
        >
          Our goal is to make Deviceplane the de facto way to manage all remote
          hardware and devices. The path to get there requires deep engagement
          with a massive community of developers — both to maximize adoption of
          Deviceplane, and to make sure we're building the product that fits
          their requirements and sparks joy.
        </Paragraph>
      </Column>

      <Row
        justifyContent={['initial', 'initial', 'initial', 'space-between']}
        alignItems={['center', 'center', 'center', 'initial']}
        width="100%"
        maxWidth={theme.pageWidth}
        flexDirection={['column', 'column', 'column', 'row']}
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
