import theme from '../../theme';

const Table = ({ children }) => (
  <table>
    {children}

    <style jsx>{`
      table {
        border: 1px solid ${theme.colors.white};
        border-radius: 4px;
        position: relative;
        border-spacing: 0;
        width: 100%;
        margin: 16px 0;
      }
      table :global(thead) {
        margin-top: 4px;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 12px;
        background: ${theme.colors.black};
      }
      table :global(thead tr) {
        height: 48px;
        vertical-align: middle;
      }
      table :global(table) {
        position: absolute;
        white-space: pre-wrap;
        border: 1px solid white;
        border-radius: 4px;
      }
      table :global(tbody tr) {
        vertical-align: baseline;
      }
      table :global(th) {
        text-align: left;
        padding: 0 24px 0 16px;
      }
      table :global(th:first-child) {
        border-top-left-radius: 4px;
      }
      table :global(th:last-child) {
        border-top-right-radius: 4px;
      }
      table :global(td) {
        border-left: none;
        border-right: none;
        border-top: 1px solid ${theme.colors.grays[5]};
        padding: 8px 24px 8px 16px;
        vertical-align: top;
      }
    `}</style>
  </table>
);

export default Table;
