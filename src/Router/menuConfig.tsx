import React from 'react';
import { PATH } from './paths';
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import StarsTwoToneIcon from '@material-ui/icons/StarsTwoTone';

export type MenuConfig = MenuElement[];

/**
 * Модель элемента меню.
 *
 * @prop {string} name - Наименование элемента.
 * @prop {PATH} path - Enum с путями роутинга.
 * @prop {JSX.Element} icon - Иконка пункта меню.
 * @prop {boolean} [divide] - Флаг подчеркивания пункта.
 * */
interface MenuElement {
    name: string;
    path: PATH;
    icon: JSX.Element;
    divide?: boolean;
}

export const menuItemsList: MenuConfig = [
    {
        name: 'О проекте',
        path: PATH.MAIN_PAGE,
        icon: <HomeWorkTwoToneIcon />,
        divide: true,
    },
    {
        name: 'Адаптер',
        path: PATH.ADAPTER,
        icon: <StarsTwoToneIcon />,
    },
    {
        name: 'Мост',
        path: PATH.BRIDGE,
        icon: <StarsTwoToneIcon />,
    },
    {
        name: 'Компоновщик',
        path: PATH.COMPOSITE,
        icon: <StarsTwoToneIcon />,
    },
];
