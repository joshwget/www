import { useState } from 'react';
import { default as Highlighter, defaultProps } from 'prism-react-renderer';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

import theme from '../theme';
import { Table, Link, Code, Paragraph, Box, Icon } from './core';
import * as Headings from './core/heading';
import { OrderedList, UnorderedList } from './core/list';

const getId = str => str.toLowerCase().replace(/ /g, '-');

const LinkHeading = ({ children, Heading, fontSize }) => {
  const [linkVisible, setLinkVisible] = useState(false);
  const id = getId(children);
  return (
    <Heading
      fontSize={fontSize}
      position="relative"
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
const H1 = props => (
  <LinkHeading {...props} fontSize="48px" Heading={Headings.H1} />
);
const H2 = props => (
  <LinkHeading {...props} fontSize="32px" Heading={Headings.H2} />
);
const H3 = props => (
  <LinkHeading {...props} fontSize="24px" Heading={Headings.H3} />
);

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

const components = {
  p: Paragraph,
  pre: props => <div {...props} />,
  code: HighlightedCode,
  inlineCode: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  table: Table,
  a: Link,
  blockquote: Blockquote,
  ol: OrderedList,
  ul: UnorderedList
};

const MDX = ({ children }) => (
  <MDXProvider components={components}>
    <Box>{children}</Box>
  </MDXProvider>
);

export default MDX;