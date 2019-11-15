const Table = ({ children, height }) => (
  <div className="container">
    {children}

    <style jsx>{`
      .container {
        position: relative;
        overflow: scroll;
        height: ${height};
        margin-top: 1rem;
      }
      .container :global(thead) {
        border: 2px solid black;
      }
      .container :global(table) {
        position: absolute;
        white-space: nowrap;
      }
      .container :global(tr) {
        height: 3rem;
        vertical-align: baseline;
      }
      .container :global(th) {
        text-align: left;
        padding: 0 1rem 0 0;
      }
      .container :global(td) {
        padding: 0 1rem 0 0;
      }
    `}</style>
  </div>
);

export default Table;
