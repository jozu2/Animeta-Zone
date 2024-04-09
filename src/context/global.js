import { createContext, useContext, useEffect, useReducer } from "react";

const GlobalContext = createContext();
const baseUrl = "https://api.jikan.moe/v4";

//actions
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_POPULAR_MANGA = "GET_POPULAR_MANGA";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_THIS_SEASON_ANIME = "GET_THIS_SEASON_ANIME";
//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_POPULAR_ANIME:
      return { ...state, popularAnime: action.payload, loading: false };
    case GET_THIS_SEASON_ANIME:
      return { ...state, thisSeason: action.payload, loading: false };
    case GET_POPULAR_MANGA:
      return { ...state, popularManga: action.payload, loading: false };
    case GET_UPCOMING_ANIME:
      return { ...state, upcomingAnime: action.payload, loading: false };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const initialState = {
    thisSeason: [],
    popularAnime: [],
    popularManga: [],
    upcomingAnime: [],
    airingAnime: [],
    pictures: [],
    isSearch: false,
    searchResults: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getPopularAnime = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
    const data = await response.json();
    dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };
  const getUpcomingAnime = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/seasons/upcoming`);
    const data = await response.json();
    dispatch({ type: GET_UPCOMING_ANIME, payload: data.data });
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const getPopularManga = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/top/manga?filter=bypopularity`);
    const data = await response.json();
    dispatch({ type: GET_POPULAR_MANGA, payload: data.data });
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const getThisSeasonAnime = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/seasons/now`);
    const data = await response.json();
    dispatch({ type: GET_THIS_SEASON_ANIME, payload: data.data });
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: LOADING });
        await getPopularAnime();
        await getThisSeasonAnime();
        await getPopularManga();
        getUpcomingAnime();
      } catch (error) {
        // Handle the error, e.g., dispatch an error action
      } finally {
        // Dispatch a LOADING_COMPLETE action or update the loading state as needed
      }
    };

    fetchData();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
