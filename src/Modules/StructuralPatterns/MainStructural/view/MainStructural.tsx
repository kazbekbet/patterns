import React from 'react';
import { Link } from 'react-router-dom';
import { Cell, Grid } from 'baseui/layout-grid';
import { H3 } from 'baseui/typography';
import { PATH } from '../../../../Router/paths/paths';

const MainStructural = () => {
    return (
        <Grid>
            <Cell span={12}>
                <H3>Структурные паттерны</H3>
            </Cell>
            <Cell span={12}>
                <Link to={PATH.ADAPTER}>Адаптер</Link>
            </Cell>
        </Grid>
    );
};

export default MainStructural;
