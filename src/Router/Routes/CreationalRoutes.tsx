import React from 'react';
import { PATH } from '../paths/paths';
import * as lazy from '../utils/lazyImports';
import { Route } from 'react-router-dom';

export const CreationalRoutes = () => (
		<>
			<Route path={PATH.ADAPTER} exact />
		</>
);
