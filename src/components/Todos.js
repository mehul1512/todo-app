import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
import '../css/main.css'; 


const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
         addTodo: (obj) => dispatch(addTodos(obj)),
        // removeTodo: (id) => dispatch(removeTodos(id)),
        // updateTodo: (obj) => dispatch(updateTodos(obj)),
        //completeTodo:(id)=>dispatch(completeTodos(id)),
    };
};

const Todos = (props)=> {
    const [todo, setTodo] = useState("");

   

    const handleChange = (e) => {
        setTodo(e.target.value);
    };
 //console.log("props from store",props);

  return (
      <div className='addTodos'>
          <input type="text" onChange={(e)=>handleChange(e)} className='todo-input'/>

          <button className='add-btn' onClick={() => props.addTodo({
              id: Math.floor(Math.random() * 1000),
              item: todo,
              completed: false,
          })}>Add</button>
          <br/>
          
                      
      </div>
  );
};
//we can use connect method to connect our component to the store
export default connect(mapStateToProps,mapDispatchToProps)(Todos);
