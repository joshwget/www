import { default as Highlighter, defaultProps } from 'prism-react-renderer';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

import theme from '../theme';
import { Table, Link, Code, Paragraph } from './core';
import * as Heading from './core/heading';
import { OrderedList, UnorderedList } from './core/list';

const H1 = styled(Heading.H1)`
  font-size: 48px;
`;

const H2 = styled(Heading.H2)`
  font-size: 32px;
`;

const H3 = styled(Heading.H3)`
  font-size: 24px;
`;

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
  border: 1px solid ${props => props.theme.colors.white};
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
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDX;
