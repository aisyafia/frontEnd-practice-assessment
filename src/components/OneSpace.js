import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOneSpace } from "../store/spaces/thunks";
import { useParams } from "react-router-dom";
import {
  selectSpaceDetails,
  selectSpaceById,
  selectSortedStories,
} from "../store/spaces/selectors";

const OneSpace = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const displaySpaceById = useSelector(selectSpaceById(id));
  //   console.log(displaySpaceById, "1st selector");
  const displaySpaceStories = useSelector(selectSortedStories);
  //   console.log(displaySpaceStories, "sorted selector works");

  useEffect(() => {
    dispatch(fetchOneSpace(id));
  }, [id]);

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
        "Loading..."
      )}

      {displaySpaceStories &&
        displaySpaceStories.map((story) => {
          return (
            <div>
              <h4>{story.name}</h4>
              <p>{story.content}</p>
              <img src={story.imageUrl} width="125px" alt="sweets" />
            </div>
          );
        })}
    </div>
  );
};

export { OneSpace };
