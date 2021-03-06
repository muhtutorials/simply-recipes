import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import RecipeList from '../components/RecipeList';
import SEO from '../components/SEO';

export default function About({ data: { allContentfulRecipe: { nodes: recipes } } }) {
    return (
        <Layout>
            <SEO title="About" />
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>I'm baby coloring book poke taxidermy</h2>
                        <p>Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.</p>
                        <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
                        <Link to="/contact" className="btn">
                            contact
                        </Link>
                    </article>
                    <StaticImage
                        src="../assets/images/about.jpeg"
                        alt="person pouring salt"
                        className="about-img"
                        placeholder="blurred"
                    />
                </section>
                <section className="featured-recipes">
                    <h5>Look at this awesomesauce!</h5>
                    <RecipeList recipes={recipes} />
                </section>
            </main>
        </Layout>
    );
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;
