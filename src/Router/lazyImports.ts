import { lazy } from 'react';

/**
 * Динамические импорты для разделения кода на бандлы.
 * */
export const AdapterComponent = lazy(() => import('../Modules/Adapter/view/AdapterPage'));

