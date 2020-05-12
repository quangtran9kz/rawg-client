import { createSelector } from 'reselect';
import { getGames, getGenre, getSearch } from './CommonSelectors';
import { gameCollectionData } from '../utils/GamesUtils';

export const getGameCollectionData = createSelector(
  getGames,
  getGenre,
  getSearch,
  gameCollectionData
);
