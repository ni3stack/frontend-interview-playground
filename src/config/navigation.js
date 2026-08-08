import { lazy } from "react";

export const navigation = [
    {
        group: "Basics",
        items: [
            {  
                title: "Todo",
                path: "/todo",
                component: lazy(() => import("../features/todo/Todo"))
            },
            {  
                title: "Otp",
                path: "/otp",
                component: lazy(() => import("../features/otp/Otp"))
            }
        ]
    },
    {
        group: "Intermediate",
        items: [
            {
                title: "Debounced Search",
                path: "/debounced-search",
                component: lazy(() => import("../features/debounced-search/DebouncedSearch"))
            },
            {
                title: "Infinite Scroll",
                path: "/infinite-scroll",
                component: lazy(() => import("../features/infinite-scroll/InfiniteScroll"))
            }
        ]
    },
    {
        group: "Advanced",
        items: [
            {
                title: "Product Listing",
                path: "/product-listing",
                component: lazy(() => import("../features/product-listing/ProductListing"))
            },
            {
                title: "Data Table",
                path: "/data-table",
                component: lazy(() => import("../features/data-table/DataTable"))
            }
        ]
    }
];