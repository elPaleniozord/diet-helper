import { NextPage } from "next"
import Link from "next/link";
import Layout from '../components/organisms/Layout';

const Recipes: NextPage = () => {
  return (
    <Layout>
      <h1>Recipes</h1>
      <p>Browse available recipes or add your own</p>
      <Link href='/recipe/add'>Add New Recipe</Link>
      <Link href='/recipe/browse'>Browse</Link>
    </Layout>
  )
}

export default Recipes