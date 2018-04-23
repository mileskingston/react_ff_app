export default function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_TABLE_SUCCESS': {
      return {
        ...state,
        teams: action.data
      };
    }
    case 'FETCH_ERROR': {
      return {
        ...state,
        error: action.data
      };
    }
    default: {
      return { ...state };
    }
  }
}
