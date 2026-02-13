import { bindActionCreators } from "redux";
// import { removeTodo ,editTodo } from "../../actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import todoSlice from "../../slices/todoSlice";
function Todo({title,id})
{
        const {editTodo,removeTodo}=todoSlice.actions;
    const dispatch=useDispatch();
    const actions=bindActionCreators({removeTodo,editTodo},dispatch)
    const [isEditing,setIsEditing]=useState(false);
    const [editedText,setEditedText]=useState(title);
    function updateTodo()
    {
       if(isEditing)
       {
        actions.editTodo({id:id,title:editedText});
        setIsEditing(false);
       }
       else{
        setIsEditing(true);
       }
    }
    return (
      <div>
        {isEditing ? 
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
         :editedText }
        <button onClick={() => actions.removeTodo(id)}>Delete</button>
        <button onClick={updateTodo}>{(isEditing)?'Save':'Edit'}</button>
      </div>
    );
}
export default Todo;