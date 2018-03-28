import { OPEN_MENU, CLOSE_MENU, OPEN_SEARCH, CLOSE_SEARCH } from '../helpers/constants';

export const openMenu = () => ({
    type: OPEN_MENU
});

export const closeMenu = () => ({
    type: CLOSE_MENU
});

export const openSearch = () => ({
    type: OPEN_SEARCH
});

export const closeSearch = () => ({
    type: CLOSE_SEARCH
});

