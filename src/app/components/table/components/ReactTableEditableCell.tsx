import React, { useEffect, useState } from 'react';
import { Input } from 'reactstrap';
import ReactTableCell from './ReactTableCell';

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  column,
  state,
  updateEditableData,
}) => {
  const [value, setValue] = useState(initialValue);
  const [isActiveInput, setIsActiveInput] = useState(false);

  const handleClick = () => {
    setIsActiveInput(!isActiveInput);
  };
  const onChange = event => {
    setValue(event.target.value);
  };
  const updateData = () => {
    updateEditableData(index, id, value);
    setIsActiveInput(false);
  };
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      updateData();
    }
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div onDoubleClick={handleClick}>
      {isActiveInput ? (
        <div className="table__editable-table--cell-active">
          <Input
            className="table__edit-form"
            value={value}
            onChange={onChange}
            onBlur={updateData}
            onKeyPress={handleKeyPress}
          />
        </div>
      ) : (
        <ReactTableCell value={value} column={column} state={state} />
      )}
    </div>
  );
};

export default EditableCell;
