import Router from "next/router"
import Layout from "../../components/organisms/Layout"

const BrowseRecipes = () => {
  return (
    <Layout>
      <h1>Browse Recipes</h1>
      <div>
        <input type="text" placeholder='Search' />
      </div>

      <h2>No Recipes yet</h2>
      <button onClick={()=> Router.back()}>Go Back</button>
    </Layout>
  )
}

export default BrowseRecipes