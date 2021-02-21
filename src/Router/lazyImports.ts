import { lazy } from 'react';

/**
 * Динамические импорты для разделения кода на бандлы.
 * */
export const MainComponent = lazy(() => import('../Modules/Main/view/index'));
export const AdapterComponent = lazy(() => import('../Modules/Adapter/view/AdapterPage'));
