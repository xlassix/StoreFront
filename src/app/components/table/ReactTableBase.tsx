import React, { useState } from 'react';
import { useFlexLayout } from 'react-table';
import ReactTableConstructor from './components/ReactTableConstructor';
import ReactTableCell from './components/ReactTableCell';
import ReactTableCellEditable from './components/ReactTableEditableCell';

const ReactTableBase = ({
  tableConfig,
  columns,
  data,
  updateDraggableData,
  updateEditableData,
}) => {
  const {
    isEditable,
    isResizable,
    isSortable,
    withDragAndDrop,
    withPagination,
    withSearchEngine,
    manualPageSize,
  } = tableConfig;
  const [filterValue, setFilterValue] = useState(null);
  const tableOptions = {
    columns,
    data,
    updateDraggableData,
    updateEditableData,
    setFilterValue,
    defaultColumn: {},
    isEditable,
    withDragAndDrop: withDragAndDrop || false,
    dataLength: data.length,
    autoResetPage: false,
    disableSortBy: !isSortable,
    manualSortBy: !isSortable,
    manualGlobalFilter: !withSearchEngine,
    manualPagination: !withPagination,
    initialState: {
      pageIndex: 0,
      pageSize: manualPageSize ? manualPageSize[0] : 10,
      globalFilter: withSearchEngine && filterValue ? filterValue : undefined,
    },
  };

  let tableOptionalHook: any = [];
  if (isResizable) tableOptionalHook = [useFlexLayout];
  if (withSearchEngine) {
    tableOptions.defaultColumn = {
      Cell: ReactTableCell,
    };
  }
  if (isEditable) {
    tableOptions.defaultColumn = {
      Cell: ReactTableCellEditable,
    };
  }

  return (
    <ReactTableConstructor
      key={isResizable || isEditable ? 'modified' : 'common'}
      tableConfig={tableConfig}
      tableOptions={tableOptions}
      tableOptionalHook={tableOptionalHook}
    />
  );
};

ReactTableBase.defaultProps = {
  tableConfig: {
    isEditable: false,
    isResizable: false,
    isSortable: false,
    withDragAndDrop: false,
    withPagination: false,
    withSearchEngine: false,
    manualPageSize: [],
  },
  columns: [
    { Header: '#', accessor: 'id' },
    { Header: 'Header Example Title one', accessor: 'first' },
    { Header: 'Header Example Title two', accessor: 'last' },
  ],
  data: [
    { id: 1, first: 'Cell Example Data one', last: 'Cell Example Data two' },
    { id: 2, first: 'Cell Example Data three', last: 'Cell Example Data four' },
  ],
  updateDraggableData: () => {},
  updateEditableData: () => {},
};

export default ReactTableBase;
