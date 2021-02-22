import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyletron } from 'baseui';
import { Layer } from 'baseui/layer';
import { AppNavBar, setItemActive } from 'baseui/app-nav-bar';
import { MenuElement, menuItemsList } from '../../../Router/menuConfig';

export interface NavigationProps {
    children: JSX.Element;
}

export const NavigationBar: React.FC<NavigationProps> = ({ children }) => {
    const [css] = useStyletron();
    const history = useHistory();

    const [mainItems, setMainItems] = React.useState<MenuElement[]>(menuItemsList);

    function handleMainItemSelect(item: MenuElement) {
        setMainItems(prev => setItemActive(prev, item));
        item.path && history.push(item.path);
    }

    return (
        <React.Fragment>
            <Layer>
                <div
                    className={css({
                        boxSizing: 'border-box',
                        width: '100vw',
                        top: '0',
                        left: '0',
                    })}
                >
                    <AppNavBar title='Паттерны TS' mainItems={mainItems} onMainItemSelect={handleMainItemSelect} />
                </div>
            </Layer>
            <Layer>{children}</Layer>
        </React.Fragment>
    );
};
