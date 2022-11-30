import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteOneStory } from "../store/spaces/thunks";

const DeleteStoryButton = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  return (
    <div>
      <button onClick={() => dispatch(deleteOneStory(id))}>Delete story</button>
    </div>
  );
};

export { DeleteStoryButton };
