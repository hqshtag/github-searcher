import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { SearchPage } from '../pages/SearchPage';


export const AppRouter: React.FC = ({ }) => {

    const knownPaths = [
        "/search",
    ];

    useEffect(() => {
        if (
            !knownPaths.includes(window.location.pathname)
        ) {
            window.location.replace("/search");
        }
    }, [window.location.pathname])

    return (
        <Router>
            <Route exact path="/search">
                <SearchPage />
            </Route>
        </Router>
    );
}