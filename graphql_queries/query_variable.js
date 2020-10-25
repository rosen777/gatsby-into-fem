query($slug: String!) {
  mdx(frontmatter: { slug: { eq: $slug } }) {
    frontmatter {
      title
      author
    }
  }
}
