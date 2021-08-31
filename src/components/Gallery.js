import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: {grayscale: true}
            width: 200
            height: 200
          )
        }
        extension
        name
      }
    }
  }
`;

export default function Gallery() {
    const data = useStaticQuery(query);
    const nodes = data.allFile.nodes;

    return (
        <Wrapper>
            {nodes.map((image, index) => {
                const path = getImage(image);
                return (
                    <article key={index} className="item">
                        <GatsbyImage
                            image={path}
                            alt={image.name}
                            className="gallery-img"
                        />
                        <p>{image.name}</p>
                    </article>
                )
            })}
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    .item {
        margin-right: 1rem;
    }
    .gallery-img {
        border-radius: 1rem;
    }
    p {
        text-align: center
    }
`;