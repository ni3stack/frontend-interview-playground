import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
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
                            group.items.map(item =>  {
                                let Component = item.component;
                                return (
                                    <Route
                                        key={item.path} 
                                        path={item.path} 
                                        element={
                                            <ErrorBoundary>
                                                <Component />
                                            </ErrorBoundary>
                                        } 
                                    />
                                )
                            })
                        )}
                    </Route>
                    <Route path="*" element={<Navigate to="/todo" replace />} />
                </Routes>
            </Suspense>
        </Router>
    );
}
export default AppRoute;