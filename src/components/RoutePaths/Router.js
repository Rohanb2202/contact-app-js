import { createBrowserRouter } from "react-router-dom";
import { keyRoutes } from "./RouteConstant";

import Root from "../LayoutStructure/Layout";
import ContactListPage from "../../pages/ContactListPage/ContactListContainer/ContactListContainer";
import PreviewSingleContact from "../../pages/PreviewContactScreen/PreviewSingleContact";
import ContactManageContainer from "../../pages/ContactManageScreen/ContactManageContainer";

const router = createBrowserRouter([
    {
        path: keyRoutes.HOME,
        element: <Root />,
        children: [
            {
                path: keyRoutes.CONTACT_LIST,
                element: <ContactListPage />,
                index: true
            },
            {
                path: keyRoutes.PREVIEW_CONTACT,
                element: <PreviewSingleContact />,
            },
            {
                path: keyRoutes.CREATE_CONTACT,
                element: <ContactManageContainer />,
            },
            {
                path: keyRoutes.UPDATE_CONTACT,
                element: <ContactManageContainer />,
            },
        ],
    },
]);

export default router;