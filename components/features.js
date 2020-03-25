import { Section, Heading, Column, Grid, Paragraph, Icon } from './core';

const content = [
  {
    title: 'SSO Authorization',
    body: `Access to devices is authorized via your identity provider and short-lived tokens rather than through static SSH keys.`,
    icon: 'id-number',
    color: 'green'
  },
  {
    title: 'Access Control',
    body: `Fine-grained roles and policies allow you to control exactly how your devices should be accessed.`,
    icon: 'key',
    color: 'purple'
  },
  {
    title: 'Powerful CLI',
    body: `A powerful CLI lets you make use all features of Deviceplane directly from your terminal.`,
    icon: 'application',
    color: 'pink'
  },
  {
    title: 'Developer API',
    body: `Programatically query devices by labels, run commands, and more with our easy to use API.`,
    icon: 'code-block',
    color: 'orange'
  }
];

const Feature = ({ title, body, icon, color }) => (
  <Column bg="black" padding={6} borderRadius={1}>
    <Icon color={color} size={28} icon={icon} marginBottom={4} />

    <Heading variant="tertiary" fontSize="20px">
      {title}
    </Heading>
    <Paragraph marginBottom={0}>{body}</Paragraph>
  </Column>
);

const Features = ({ pi }) => {
  return (
    <Section alignItems="center">
      <Heading
        textAlign="center"
        variant="secondary"
        maxWidth={['unset', '600px', '600px', '750px']}
        marginBottom={8}
      >
        {pi
          ? `Everything you need for your Raspberry Pi`
          : `Infrastructure that includes everything you need`}
      </Heading>

      <Grid
        gridGap={8}
        gridTemplateColumns={[
          'minmax(250px, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
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

export default Features;
