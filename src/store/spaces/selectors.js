export const selectSpaces = (reduxState) => reduxState.spaces.spaces;

export const selectSpaceDetails = (reduxState) =>
  reduxState.spaces.spaceDetails;

export const selectSortedStories = (reduxState) => {
  const stories = reduxState.spaces.spaceDetails;
  if (!stories) {
    return [];
  }
  // console.log(stories, "this is stories");
  return [...stories].sort((a, b) => {
    const a_dateStr = new Date(a.createdAt);
    const b_dateStr = new Date(b.createdAt);
    return a_dateStr.getTime() - b_dateStr.getTime();
  });
  // (a, b) => b.createdAt - a.createdAt);
  // const compareCreatedAt = (storyA, storyB) => {
  //   return storyB.createdAt.localeCompare(storyA.createdAt);
  // };
  // return reduxState.spaces.spaceDetails.sort(compareCreatedAt);
};

export const selectSpaceById = (id) => (reduxState) =>
  reduxState.spaces.spaces.find((s) => [s.id === id]);
