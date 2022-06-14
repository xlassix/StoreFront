import React from 'react';
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useResizeColumns,
  useRowSelect,
} from 'react-table';
import ReactTableHeader from './ReactTableHeader';
import BodyReactTable from './ReactTableBody';
import ReactTableFooter from './ReactTableFooter';
import ReactTableFilter from './ReactTableFilter';
import ReactTablePagination from './ReactTablePagination';

const ReactTableConstructor = ({
  tableConfig,
  tableOptions,
  tableOptionalHook,
}) => {
  const {
    isEditable,
    isResizable,
    isSortable,
    withPagination,
    withSearchEngine,
    manualPageSize,
    placeholder,
  } = tableConfig;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    state,
    rows,
    prepareRow,
    page,
    pageCount,
    pageOptions,
    gotoPage,
    previousPage,
    canPreviousPage,
    nextPage,
    canNextPage,
    setPageSize,
    setGlobalFilter,
    withDragAndDrop,
    updateDraggableData,
    updateEditableData,
    dataLength,
    state: { pageIndex, pageSize },
  } = useTable(
    tableOptions,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useResizeColumns,
    useRowSelect,
    ...tableOptionalHook,
  );

  return (
    <div>
      {withSearchEngine && (
        <ReactTableFilter
          rows={rows}
          setGlobalFilter={setGlobalFilter}
          setFilterValue={tableOptions.setFilterValue}
          globalFilter={state.globalFilter}
          placeholder={placeholder}
          dataLength={dataLength}
        />
      )}
      <div
        className={
          withPagination
            ? 'table react-table'
            : 'table react-table table--not-pagination'
        }
      >
        <table
          {...getTableProps()}
          className={
            isEditable
              ? 'react-table editable-table'
              : 'react-table resizable-table'
          }
        >
          <ReactTableHeader
            headerGroups={headerGroups}
            isSortable={isSortable}
            isResizable={isResizable}
          />
          <BodyReactTable
            page={page}
            getTableBodyProps={getTableBodyProps}
            prepareRow={prepareRow}
            updateDraggableData={updateDraggableData}
            updateEditableData={updateEditableData}
            isEditable={isEditable}
            withDragAndDrop={withDragAndDrop}
          />
          {(pageCount === pageIndex + 1 ||
            (!withPagination && rows.length !== 0)) && (
            <ReactTableFooter footerGroups={footerGroups} />
          )}
        </table>
      </div>
      {withPagination && rows.length > 0 && (
        <ReactTablePagination
          page={page}
          gotoPage={gotoPage}
          previousPage={previousPage}
          nextPage={nextPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageSize={pageSize}
          pageIndex={pageIndex}
          pageCount={pageCount}
          setPageSize={setPageSize}
          manualPageSize={manualPageSize}
          dataLength={dataLength}
        />
      )}
    </div>
  );
};

ReactTableConstructor.defaultProps = {
  tableConfig: {
    isEditable: false,
    isResizable: false,
    isSortable: false,
    withDragAndDrop: false,
    withPagination: false,
    withSearchEngine: false,
    manualPageSize: [10, 20, 30, 40],
    placeholder: 'Search...',
  },
  tableOptions: [
    {
      columns: [],
      data: [],
      setFilterValue: () => {},
      updateDraggableData: () => {},
      updateEditableData: () => {},
      defaultColumn: [],
      withDragAndDrop: false,
      dataLength: null,
      disableSortBy: false,
      manualSortBy: false,
      manualGlobalFilter: false,
      manualPagination: false,
    },
  ],
};

export default ReactTableConstructor;
