import React from 'react';
import { Link } from 'gatsby';
import slugify from 'slugify';
import setupTags from '../utils/setupTags';

export default function TagList({ recipes }) {
    const newTags = setupTags(recipes);

    return (
        <div className="tags-container">
            <h4>recipes</h4>
            <div className="tags-list">
                {newTags.map((tag, index) => {
                    const [text, value] = tag;
                    const slug = slugify(text, { lower: true });
                    return <Link key={index} to={`/tags/${slug}`}>{text} ({value})</Link>;
                })}
            </div>
        </div>
    );
}