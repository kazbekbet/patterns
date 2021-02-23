import React from 'react';
import { NavItemT } from 'baseui/app-nav-bar';
import { PATH } from '../paths/paths';

/**
 * Модель элемента меню.
 *
 * @prop {PATH} path - Enum с путями роутинга.
 * */
export interface MenuElement extends NavItemT {
    path?: string;
}

export const menuItemsList: MenuElement[] = [
    {
        label: 'О проекте',
        path: PATH.MAIN_PAGE,
    },
    {
        label: 'Структурные',
        path: PATH.MAIN_STRUCTURAL,
    },
    {
        label: 'Порождающие',
        path: PATH.MAIN_CREATIONAL,
    },
    {
        label: 'Поведенческие',
        path: PATH.MAIN_BEHAVIORAL,
    },
];
