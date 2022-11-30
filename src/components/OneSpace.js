import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOneSpace as fetchOneSpaceStories } from "../store/spaces/thunks";
import { useParams } from "react-router-dom";
import {
  selectSpaceById,
  selectSortedStories,
} from "../store/spaces/selectors";
import { selectUser } from "../store/user/selectors";
import { DeleteStoryButton } from "./DeleteStoryButton";

const OneSpace = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const displaySpaceById = useSelector(selectSpaceById(id));
  // console.log("space id:", displaySpaceById.id);
  //   console.log(displaySpaceById, "1st selector");
  const displaySpaceStories = useSelector(selectSortedStories);
  //   console.log(displaySpaceStories, "sorted selector works");
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchOneSpaceStories(id));
  }, [id]);

  if (!displaySpaceById) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        backgroundColor: `${displaySpaceById.color}`,
        color: `${displaySpaceById.backgroundColor}`,
      }}
    >
      {displaySpaceById ? (
        <h3>{displaySpaceById.description}</h3>
      ) : (
        "This user has no stories yet"
      )}

      {displaySpaceStories &&
        displaySpaceStories.map((story) => {
          return (
            <div>
              <h4>{story.name}</h4>
              <p>{story.content}</p>
              <img src={story.imageUrl} width="125px" alt="sweets" />
              {user && user.id === displaySpaceById.id ? (
                <DeleteStoryButton />
              ) : (
                ``
              )}
            </div>
          );
        })}
    </div>
  );
};

export { OneSpace };
