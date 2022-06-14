import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const getItemStyle = (draggableStyle, theme) => ({
  cursor: 'pointer',
  background: theme.className === 'theme-light' ? '#ffffff' : '#232329',
  zIndex: 101,
  ...draggableStyle,
});

const getListStyle = theme => ({
  background: theme.className === 'theme-light' ? '#f2f4f7' : '#2a2a31',
});

const ReactTableDnDBody = ({
  page,
  getTableBodyProps,
  prepareRow,
  updateDraggableData,
  theme,
}) => {
  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    updateDraggableData(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="draggable" type="data">
        {provided => (
          <tbody
            className="table table--bordered"
            ref={provided.innerRef}
            {...getTableBodyProps()}
            {...provided.droppableProps}
            style={getListStyle(theme)}
          >
            {page.map(val => {
              prepareRow(val);
              return (
                <Draggable
                  draggableId={`${val.id}`}
                  key={val.id}
                  index={Number(val.id)}
                  type="data"
                >
                  {provide => (
                    <tr
                      className="react-dnd-draggable"
                      ref={provide.innerRef}
                      {...provide.draggableProps}
                      {...provide.dragHandleProps}
                      {...val.getRowProps()}
                      style={getItemStyle(provide.draggableProps.style, theme)}
                    >
                      {val.cells.map(cell => (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      ))}
                    </tr>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </tbody>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ReactTableDnDBody;
