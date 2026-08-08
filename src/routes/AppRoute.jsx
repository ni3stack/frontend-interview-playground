import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import PlaygroundLayout from "../layouts/PlaygroundLayout";
import { navigation } from "../config/navigation";

function AppRoute() {
    return (
        <Router>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    <Route element={<PlaygroundLayout />}>
                        <Route index element={<Navigate to="/todo" replace />} />
                        {navigation.flatMap((group) =>
                            group.items.map(item => (
                                <Route
                                    key={item.path} 
                                    path={item.path} 
                                    element={<item.component />} 
                                />
                            ))
                        )}
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}
export default AppRoute;