import { lazy } from 'react';

/**
 * Динамические импорты для разделения кода на бандлы.
 * */
export const MainComponent = lazy(() => import('../../Modules/Main/view/index'));
export const MainStructuralComponent = lazy(
    () => import('../../Modules/StructuralPatterns/MainStructural/view/MainStructural')
);
export const AdapterComponent = lazy(() => import('../../Modules/StructuralPatterns/Adapter/view/AdapterPage'));
