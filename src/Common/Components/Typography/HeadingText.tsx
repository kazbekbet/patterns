import React from 'react';
import Typography from '@material-ui/core/Typography';

/**
 * Типы заголовков.
 * */
enum HeadingTextTypes {
    PAGE_TITLE = 'h3',
    SECTION_TITLE = 'h4',
    MODULE_TITLE = 'h5',
    ELEMENT_TITLE = 'h6',
}

/**
 * Собственные свойства компонента.
 *
 * @prop {string} children - Текстовый контент.
 * @prop {keyof typeof HeadingTextTypes} type - Тип заголовка.
 * @prop {boolean} [hideGutter] - Флаг скрытия отступа снизу.
 * @prop {'primary' | 'secondary'} [color] - Цвет заголовка
 * */
interface OwnProps {
    children: string;
    type: keyof typeof HeadingTextTypes;
    hideGutter?: boolean;
    color?: 'primary' | 'secondary';
}

/**
 * Компонент заголовков.
 * */
export const HeadingText: React.FC<OwnProps> = ({ children, type, hideGutter, color }) => {
    return (
        <Typography variant={HeadingTextTypes[type]} gutterBottom={!hideGutter} color={color}>
            {children}
        </Typography>
    );
};
