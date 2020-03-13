import {
  Grid,
  Section,
  Heading,
  Icon,
  Text,
  Row,
  Column,
  Paragraph
} from './core';

const content = [
  {
    title: 'Register',
    icon: 'add',
    body: `Registering a device is as simple as running an installation script that sets up a single static binary. You're first
    device will be connected within minutes.`,
    color: 'primary'
  },
  {
    title: 'Access',
    icon: 'console',
    body: `Immediately after registration you'll have secure connection to your device. SSH is available via both the UI and CLI
    and authenticated with your identity provider rather than through static keys.`,
    color: 'purple'
  }
];

// const Tutorial = () => {
//   return (
//     <Section paddingTop={10}>
//       <Heading variant="secondary" textAlign="center" marginBottom={8}>
//         How it works
//       </Heading>

//       <Row alignSelf="stretch" alignItems="center">
//         <Column marginRight={8}>
//           <Column
//             bg="black"
//             width="600px"
//             height="400px"
//             border={0}
//             borderRadius={1}
//             borderColor="primary"
//           ></Column>
//         </Column>

//         <Column justifyContent="center">
//           {content.map(({ title, body, color, icon }, i) => (
//             <Column marginTop={i === 0 ? 0 : 5}>
//               <Row alignItems="center">
//                 <Icon icon={icon} size={24} color={color} />
//                 <Text marginLeft={3} fontSize={4} fontWeight={2}>
//                   {title}
//                 </Text>
//               </Row>

//               <Paragraph>{body}</Paragraph>
//             </Column>
//           ))}
//         </Column>
//       </Row>
//     </Section>
//   );
// };

const Feature = ({ title, body, icon, color }) => (
  <Column bg="black" padding={6} borderRadius={1}>
    <Icon color={color} size={28} icon={icon} marginBottom={4} />

    <Heading variant="tertiary" fontSize="20px">
      {title}
    </Heading>
    <Paragraph marginBottom={0}>{body}</Paragraph>
  </Column>
);

const Tutorial = () => {
  return (
    <Section paddingTop={10}>
      <Heading variant="secondary" textAlign="center" marginBottom={8}>
        How it works
      </Heading>

      <Grid
        gridGap={8}
        gridTemplateColumns={[
          'minmax(250px, 1fr)',
          '500px',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(2, 1fr)'
        ]}
      >
        {content.map((props, i) => (
          <Feature {...props} key={props.title} />
        ))}
      </Grid>
    </Section>
  );
};

export default Tutorial;
