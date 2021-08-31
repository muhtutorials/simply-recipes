import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TagList from './TagList';
import RecipeList from './RecipeList';

const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default function AllRecipes() {
    const { allContentfulRecipe: { nodes: recipes } } = useStaticQuery(query);

    return (
        <section className="recipes-container">
            <TagList recipes={recipes} />
            <RecipeList recipes={recipes} />
        </section>
    );
}