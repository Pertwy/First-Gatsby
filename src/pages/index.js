  
import React from "react"
import { Link, graphql} from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
// import { StaticImage } from "gatsby-plugin-image"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({data}) {
  // const image = getImage(data.file)
  // console.log(data.file)


  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link  to="/projects">My Portfolio Projects</Link>
        </div>
        
        <img src="/banner.png" alt="site banner" style={{maxWidth:"100%"}}></img>

      </section>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  file(relativePath: {eq: "banner.png"}) {
    childrenImageSharp {
      gatsbyImageData(width: 200, placeholder: BLURRED, formats: PNG)
    }
  }
}

`
