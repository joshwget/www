import theme from '../../theme';

const Table = ({ children }) => (
  <table>
    {children}

    <style jsx>{`
      table {
        position: relative;
        margin-top: 16px;
        border-collapse: collapse;
        width: 100%;
        margin: 16px 0;
      }
      table :global(thead) {
        font-weight: 600;
        text-transform: uppercase;
        font-size: 12px;
        background: ${theme.colors.black};
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      table :global(thead tr) {
        height: 48px;
        vertical-align: center;
      }
      table :global(table) {
        position: absolute;
        white-space: pre-wrap;
        border: 1px solid white;
        border-radius: 4px;
      }
      table :global(tbody tr) {
        vertical-align: baseline;
        border-bottom: 1px solid ${theme.colors.grays[4]};
      }
      table :global(th) {
        text-align: left;
        padding: 0 24px 0 16px;
      }
      table :global(td) {
        padding: 8px 24px 8px 16px;
      }
    `}</style>
  </table>
);

export default Table;
