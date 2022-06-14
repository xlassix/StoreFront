import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ReactTableDnDBody from './ReactTableDnDBody';

const ReactTableDefaultBody = ({ page, getTableBodyProps, prepareRow }) => (
  <tbody className="table table--bordered" {...getTableBodyProps()}>
    {page.map(row => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map(cell => (
            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
          ))}
        </tr>
      );
    })}
  </tbody>
);

const ReactTableBody = ({
  updateEditableData,
  isEditable,
  page,
  getTableBodyProps,
  prepareRow,
  withDragAndDrop,
  updateDraggableData,
  theme,
}) => (
  <Fragment>
    {withDragAndDrop ? (
      <ReactTableDnDBody
        page={page}
        getTableBodyProps={getTableBodyProps}
        prepareRow={prepareRow}
        updateDraggableData={updateDraggableData}
        theme={theme}
      />
    ) : (
      <ReactTableDefaultBody
        page={page}
        getTableBodyProps={getTableBodyProps}
        prepareRow={prepareRow}
      />
    )}
  </Fragment>
);

export default connect((state: any) => ({
  theme: state.theme,
}))(ReactTableBody);
