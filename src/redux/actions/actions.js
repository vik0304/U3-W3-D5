export const NEW_SEARCH_VALUE = "NEW_SEARCH_VALUE";

export const handleSubmit = (e, query) => {
  return (dispatch) => {
    e.preventDefault();
    dispatch({
      type: NEW_SEARCH_VALUE,
      payload: query,
    });
  };
};
