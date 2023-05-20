import React from 'react';
import useTitle from '../../CustomHooks/useTitle';

const Blog = () => {
    useTitle("Turbo-Blog")
    return (
        <div>
            <h1>This is blog</h1>
        </div>
    );
};

export default Blog;