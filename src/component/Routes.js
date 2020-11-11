import { useState, useEffect } from 'react';

const Route = ({ path, children }) => {

    const [pathName, setPathName] = useState(window.location.pathname);

    useEffect(() => {

        const onLocationChange = () => {
            setPathName(window.location.pathname);
        }
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return pathName === path ? children : null;
};

export default Route;