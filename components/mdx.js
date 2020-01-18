import { useState } from 'react';
import { default as Highlighter, defaultProps } from 'prism-react-renderer';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

import theme from '../theme';
import { Table, Link, Code, Paragraph, Box, Icon } from './core';
import Heading from './core/heading';
import { OrderedList, UnorderedList } from './core/list';

const getId = str => str.toLowerCase().replace(/ /g, '-');

const LinkHeading = ({ children, fontSize, marginTop, variant }) => {
  const [linkVisible, setLinkVisible] = useState(false);
  const id = getId(children);
  return (
    <Heading
      position="relative"
      variant={variant}
      fontSize={fontSize}
      marginTop={marginTop}
      id={id}
      onMouseEnter={() => setLinkVisible(true)}
      onMouseLeave={() => setLinkVisible(false)}
    >
      <Link
        href={`#${id}`}
        position="absolute"
        display="flex"
        height="100%"
        alignItems="center"
        paddingRight={1}
        style={{
          transform: 'translateX(-100%)'
        }}
      >
        <Icon
          icon="link"
          size={12}
          color="primary"
          style={{
            visibility: linkVisible ? 'visible' : 'hidden'
          }}
        />
      </Link>
      {children}
    </Heading>
  );
};

const LinkedH1 = props => (
  <LinkHeading {...props} fontSize={[5, 6]} variant="primary" />
);
const LinkedH2 = props => (
  <LinkHeading {...props} fontSize={[4, 5]} marginTop={8} variant="secondary" />
);
const LinkedH3 = props => (
  <LinkHeading {...props} fontSize={[3, 4]} marginTop={6} variant="tertiary" />
);

const H1 = props => <Heading {...props} fontSize={[5, 6]} variant="primary" />;
const H2 = props => (
  <Heading {...props} fontSize={[4, 5]} variant="secondary" />
);
const H3 = props => <Heading {...props} fontSize={[3, 4]} variant="tertiary" />;

const syntaxTheme = {
  plain: {
    color: theme.colors.white
  },
  styles: [
    {
      types: ['plain', 'string', 'attr-value'],
      style: {
        color: theme.colors.white
      }
    },
    {
      types: ['comment'],
      style: {
        color: theme.colors.grays[8],
        fontStyle: 'italic'
      }
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: theme.colors.grays[8]
      }
    },
    {
      types: [
        'assign-left',
        'key',
        'atrule',
        'keyword',
        'attr-name',
        'selector',
        'entity',
        'symbol',
        'property'
      ],
      style: {
        color: theme.colors.green
      }
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: theme.colors.danger
      }
    },
    {
      types: ['function-variable', 'tag', 'selector'],
      style: {
        color: theme.colors.pink
      }
    },
    {
      types: ['function'],
      languages: ['shell'],
      style: {
        color: theme.colors.white
      }
    }
  ]
};

const Blockquote = styled.blockquote`
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  padding: 0 16px;
  margin: 16px 0;
  font-weight: 400;
`;

const Strong = styled.strong`
  font-weight: 700;
  color: ${props => props.theme.colors.white};
`;

const HighlightedCode = ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : '';

  return (
    <Highlighter
      {...defaultProps}
      code={children}
      language={language}
      theme={syntaxTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: '16px',
            background: theme.colors.black,
            borderRadius: '4px',
            margin: '16px 0',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            border: `1px solid ${theme.colors.white}`
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlighter>
  );
};

const components = linkHeaders => ({
  p: Paragraph,
  pre: props => <div {...props} />,
  code: HighlightedCode,
  inlineCode: Code,
  h1: linkHeaders ? LinkedH1 : H1,
  h2: linkHeaders ? LinkedH2 : H2,
  h3: linkHeaders ? LinkedH3 : H3,
  table: Table,
  a: Link,
  blockquote: Blockquote,
  ol: OrderedList,
  ul: UnorderedList,
  strong: Strong
});

const MDX = ({ children, linkHeaders }) => (
  <MDXProvider components={components(linkHeaders)}>
    <Box>{children}</Box>
  </MDXProvider>
);

export default MDX;
