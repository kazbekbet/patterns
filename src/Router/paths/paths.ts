import { CreationalPaths } from "./patterns/creational";
import { StructuralPaths } from "./patterns/structural";
import { BehavioralPaths } from "./patterns/behavioral";

/**
 * Пути роутинга приложения.
 * */
export const PATH = {
    MAIN_PAGE: '/',
    ...new CreationalPaths(),
    ...new StructuralPaths(),
    ...new BehavioralPaths(),
};
