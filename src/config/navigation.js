import { lazy } from "react";

export const navigation = [
    {
        group: "Basics",
        items: [
            {  
                title: "Todo",
                path: "/todo",
                component: lazy(() => import("../pages/Todo/Todo"))
            },
            {  
                title: "Otp",
                path: "/otp",
                component: lazy(() => import("../pages/Otp/Otp"))
            }
        ]
    },
    {
        group: "Intermediate",
        items: [
            {
                title: "Debounced Search",
                path: "/debounced-search",
                component: lazy(() => import("../pages/DebouncedSearch/DebouncedSearch"))
            },
            {
                title: "Infinite Scroll",
                path: "/infinite-scroll",
                component: lazy(() => import("../pages/InfiniteScroll/InfiniteScroll"))
            }
        ]
    },
    {
        group: "Advanced",
        items: [
            {
                title: "Product Listing",
                path: "/product-listing",
                component: lazy(() => import("../pages/ProductListing/ProductListing"))
            },
            {
                title: "Data Table",
                path: "/data-table",
                component: lazy(() => import("../pages/DataTable/DataTable"))
            }
        ]
    }
];