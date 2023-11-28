import React from 'react';

const InactiveList = ({inactiveTodos}) => {
    return ( 
        inactiveTodos.map(todoItem => 
            <li key={todoItem.todoText}>{todoItem.todoText}</li>
        )
    );
}
 
export default InactiveList;