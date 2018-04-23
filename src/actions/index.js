import axios from 'axios';

const API_KEY = '3dc2536eb8fe6c9c365753a9d1f57faf149dc3ed7111e3ceb6e0fd17a0329058';
const ROOT_URL = `https://apifootball.com/api/?action=get_standings&league_id=63&APIkey=${API_KEY}`;

export function fetchTable() {
  const request = axios({
    method: 'GET',
    url: `https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01&league_id=63&${API_KEY}`,
    headers: {
      Accept: 'application/json'
    }
  });

  return (dispatch) => {
    return request
      .then(
        success => dispatch(fetchTableSuccess(success)),
        error => dispatch(fetchError(error))
      );
  };
}

// export function fetchSearchResults (val, page) {
//   const getSearchUrl = `
//     ${SEARCH_URL}${API_KEY}${LANGUAGE}&query=${val}${page ? '&page=' + page : PAGE_NO}&include_adult=false
//   `;
//   const request = axios.get(getSearchUrl);

//   return (dispatch) => {
//     return request
//       .then(
//         success => dispatch(fetchSearchSuccess(success, val)),
//         error => dispatch(fetchError(error))
//       );
//   };
// }

// export function fetchFullDetails (val) {
//   const getSearchUrl = `${ROOT_PROFILE_URL}${val}${API_KEY}${LANGUAGE}`;
//   const request = axios.get(getSearchUrl);

//   return (dispatch) => {
//     return request
//       .then(
//         success => dispatch(fetchProfileSuccess(success, val)),
//         error => dispatch(fetchError(error))
//       );
//   };
// }

export function fetchTableSuccess(response) {
  console.log(response);
  return {
    type: 'FETCH_TABLE_SUCCESS',
    data: response.data
  };
}

// export function fetchSearchSuccess (response, val) {
//   return {
//     type: 'FETCH_SEARCH_SUCCESS',
//     data: response.data,
//     searchVal: val
//   };
// }

export function fetchError(response) {
  return {
    type: 'FETCH_ERROR',
    filmDetail: response.data
  };
}
