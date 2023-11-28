import React from 'react';


const ActiveList = ({activeTodos}) => {
    return ( 
        activeTodos.map(todoItem => 
            <li key={todoItem.todoText}>{todoItem.todoText}</li>
        )
     );
}
 
export default ActiveList;