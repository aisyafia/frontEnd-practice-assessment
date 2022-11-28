import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSpaces } from "../store/spaces/thunks";
import { selectSpaces } from "../store/spaces/selectors";
import { Link } from "react-router-dom";

const AllSpaces = () => {
  const dispatch = useDispatch();
  const allUsersSpaces = useSelector(selectSpaces);
  //   console.log(allUsersSpaces, "selector 1");

  useEffect(() => {
    dispatch(fetchSpaces());
  }, []);
  //   console.log("useEffect 1 works", useEffect);

  return (
    <div>
      <h2>All Users' Spaces</h2>
      <div>
        {allUsersSpaces &&
          allUsersSpaces.map((up) => {
            return (
              <div>
                <p
                  style={{
                    backgroundColor: `${up.color}`,
                    color: `${up.backgroundColor}`,
                  }}
                >
                  {up.title}
                </p>
                <Link to={`/spaces/${up.id}`}>
                  <button>Visit space</button>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export { AllSpaces };
