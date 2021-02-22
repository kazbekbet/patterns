import React from 'react';
import { PATH } from './paths';
import { NavItemT } from 'baseui/app-nav-bar';

/**
 * Модель элемента меню.
 *
 * @prop {PATH} path - Enum с путями роутинга.
 * */
export interface MenuElement extends NavItemT {
    path?: PATH;
}

export const menuItemsList: MenuElement[] = [
    {
        label: 'О проекте',
        path: PATH.MAIN_PAGE,
    },
    {
        label: 'Адаптер',
        path: PATH.ADAPTER,
    },
    {
        label: 'Мост',
        path: PATH.BRIDGE,
    },
    {
        label: 'Компоновщик',
        path: PATH.COMPOSITE,
    },
];
