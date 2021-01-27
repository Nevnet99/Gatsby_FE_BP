import path from "path"

interface PageInput {
  path: string
  component: string
  layout?: string
  context?: any
}

interface BoundActionCreators {
  createPage: (page: PageInput) => void
  deletePage: (page: PageInput) => void
  createRedirect: (opts: {
    fromPath: string
    isPermanent?: boolean
    redirectInBrowser?: boolean
    toPath: string
  }) => void
}

type GatsbyCreatePages = (fns: {
  graphql: any
  boundActionCreators: BoundActionCreators
}) => void

export const createPages: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators,
}) => {
  const { createPage } = boundActionCreators

  const allTemplates = await graphql(`
    {
      allSanityShoes {
        edges {
          node {
            name
            slug {
              current
            }
            _id
          }
        }
      }
    }
  `)

  allTemplates.data.allSanityShoes.edges.forEach(edge => {
    const {
      slug: { current: slug },
      _id,
      name,
    } = edge.node
    if (!slug) return

    // type safe `createPage` call
    createPage({
      path: `/product/${_id}`,
      component: path.resolve(__dirname, "./src/templates/product-page.tsx"),
      context: {
        slug,
      },
    })
  })
}
