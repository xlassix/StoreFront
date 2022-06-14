import React, { Fragment } from 'react';
import Highlighter from 'react-highlight-words';

const ReactTableCell = ({ value: initialValue, state, column }) => (
  <Fragment>
    {column.disableGlobalFilter ? (
      <Fragment>{initialValue}</Fragment>
    ) : (
      <Highlighter
        className="react-table__highlighter"
        searchWords={[state.globalFilter]}
        autoEscape
        textToHighlight={initialValue}
      />
    )}
  </Fragment>
);

export default ReactTableCell;
