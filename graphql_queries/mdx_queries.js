# Write your query or mutation here
 query{
  allMdx {
    nodes {
      frontmatter {
        title
        slug
        author
      }
      excerpt
    }
  }
}
