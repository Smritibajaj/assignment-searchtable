import { PLATFORM_USERS, ROUTE } from "../utils/constants/constants";
export interface IRoute {
    path: string;
    element: React.ReactNode;
    index?: boolean;
    protected?: boolean;
    isSideBarDisabled?: boolean;
    indexElement?:React.ReactNode;
    children?: IRoute[];
    redirectSkip?:boolean;
    exact?:boolean;
}
