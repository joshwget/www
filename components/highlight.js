import { default as Highlighter, defaultProps } from 'prism-react-renderer';
import { MDXProvider } from '@mdx-js/react';

import { Heading, Table } from './core';

const theme = {
  plain: {
    color: 'var(--primary)'
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgba(255,255,255,.8)',
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
      types: ['key', 'atrule'],
      style: {
        color: 'var(--white)'
      }
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: 'var(--primary)'
      }
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: 'rgba(255,255,255,.6)'
      }
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property'
      ],
      style: {
        color: 'var(--primary)'
      }
    },
    {
      types: [, 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#00a4db'
      }
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#d73a49'
      }
    },
    {
      types: ['function-variable'],
      style: {
        color: '#6f42c1'
      }
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#00009f'
      }
    },
    {
      types: ['function'],
      languages: ['shell'],
      style: {
        color: 'var(--primary)'
      }
    }
  ]
};

const Code = ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : '';

  return (
    <Highlighter
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '1rem' }}>
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
  pre: props => <div {...props} />,
  code: Code,
  h1: Heading.H1,
  h2: Heading.H2,
  table: Table
};

const Highlight = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default Highlight;
