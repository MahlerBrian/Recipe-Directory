import { useFetch } from '../../hooks/useFetch'

//styles
import './home.css'

//components
import RecipeList from '../../components/recipeList'


export default function Home() {
  const { data, isPending, error} = useFetch('http://localhost:3000/recipes')

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
