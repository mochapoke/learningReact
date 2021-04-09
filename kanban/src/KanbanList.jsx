import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './data';
import { ListContainer, ListItem, DragIcon } from './styles';
import { MdDragHandle } from 'react-icons/md';

const KanbanList = () => {
  const list = List.getList();

  return (
    <div>
      <DragDropContext
        onDragEnd={(param) => {
          const sourceIndex = param.source.index;
          const destinationIndex = param.destination?.index;
          if (destinationIndex) {
            list.splice(destinationIndex, 0, list.splice(sourceIndex, 1)[0]);
            List.saveList(list);
          }
        }}
      >
        <ListContainer>
          <h1>The List</h1>
          <Droppable droppableId='droppable-1'>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={{
                  backgroundColor: snapshot.isDraggingOver
                    ? 'lightblue'
                    : 'white',
                }}
                {...provided.droppableProps}
              >
                {list.map((item, idx) => (
                  <Draggable
                    key={item.id}
                    draggableId={'draggable-' + item.id}
                    index={idx}
                  >
                    {(provided, snapshot) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? '0 0 .4rem #666'
                            : 'none',
                        }}
                      >
                        <MdDragHandle />
                        <span>{item.title}</span>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ListContainer>
      </DragDropContext>
    </div>
  );
};

export default KanbanList;
