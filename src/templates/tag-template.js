import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import RecipeList from '../components/RecipeList';
import SEO from '../components/SEO';

export default function TagTemplate({ data, pageContext }) {
    const recipes = data.allContentfulRecipe.nodes;

    return (
        <Layout>
            <SEO title={pageContext.tag} />
            <main className="page">
                <h2>{pageContext.tag}</h2>
                <div className="tag-recipes">
                    <RecipeList recipes={recipes} />
                </div>
            </main>
        </Layout>
    );
}

export const query = graphql`
    query GetRecipeByTag($tag: String) {
      allContentfulRecipe(
        sort: {fields: title, order: ASC}
        filter: {content: {tags: {eq: $tag}}}
      ) {
        nodes {
          id
          prepTime
          cookTime
          title
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
`;