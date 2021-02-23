import React from 'react';
import { Cell, Grid } from 'baseui/layout-grid';
import { H3 } from 'baseui/typography';

const MainPage = () => {
    return (
        <Grid>
            <Cell span={12}>
                <H3>Как этот проект может помочь</H3>
            </Cell>
        </Grid>
    );
};

export default MainPage;
