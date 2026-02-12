import { removeTodo } from "../../actions";
import { useDispatch } from "react-redux";
function Todo({title,id})
{
    const dispatch=useDispatch();
    
    return(
            <div>
                {title}
                <button onClick={()=>dispatch(removeTodo(id))}>Delete</button>
            </div>
    )
}
export default Todo;