import { bindActionCreators } from "redux";
import { removeTodo } from "../../actions";
import { useDispatch } from "react-redux";
function Todo({title,id})
{
    const dispatch=useDispatch();
    const actions=bindActionCreators({removeTodo},dispatch)
    return(
            <div>
                {title}
                <button onClick={()=>actions.removeTodo(id)}>Delete</button>
            </div>
    )
}
export default Todo;