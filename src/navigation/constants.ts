import {News} from '../store/services';

export type RootStackParamList = {
  home: undefined;
  detail: News;
  search: {searchTerm: string};
  notifications: undefined;
};

export enum SCREEN_NAMES {
  DETAIL = 'detail',
  HOME = 'home',
  SEARCH = 'search',
  NOTIFICATIONS = 'notifications',
}
