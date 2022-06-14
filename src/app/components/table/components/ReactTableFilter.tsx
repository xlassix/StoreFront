import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { Input } from 'reactstrap';

const ReactTableFilter = ({
  rows,
  setGlobalFilter,
  setFilterValue,
  globalFilter,
  placeholder,
  dataLength,
}) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce(item => {
    setGlobalFilter(item || undefined);
  }, 200);
  if (value) {
    setFilterValue(value);
  }

  return (
    <div className="table__search">
      <Input
        className="table__search table__search-input"
        value={value}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${placeholder}`}
      />
      {dataLength !== rows.length && <span>Found {rows.length} matches</span>}
    </div>
  );
};

const filterGreaterThan = (rows, id, filterValue) =>
  rows.filter(row => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });

filterGreaterThan.autoRemove = val => typeof val !== 'number';

ReactTableFilter.defaultProps = {
  setFilterValue: () => {},
  globalFilter: undefined,
  placeholder: 'Search...',
};

export default ReactTableFilter;
