import React from 'react';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { MenuConfig } from '../../../Router/menuConfig';

/**
 * Собственные свойства компонента.
 *
 * @prop {MenuConfig} menuItems - Элементы меню.
 * */
interface OwnProps {
    menuItems: MenuConfig;
}

/**
 * Компонент элементов в меню.
 * */
export const MenuItems: React.FC<OwnProps> = ({ menuItems }) => {
    const history = useHistory();

    /**
     * Редиректит по нужному пути.
     * */
    const handleRedirect = (e: React.MouseEvent, path: string) => {
        e.preventDefault();
        history.push(path);
    };

    return (
        <List>
            {menuItems.map(item => (
                <div key={item.name}>
                    <ListItem button onClick={e => handleRedirect(e, item.path)}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                    {item.divide && <Divider />}
                </div>
            ))}
        </List>
    );
};
