import { useQuery } from '@tanstack/react-query'
import { fetchJellyBean } from '../apis/jellybean'
import { getRandomNumber } from '../modules/random-number'
import { Link } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'

export function HomeBean() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['bean'],
    queryFn: () => fetchJellyBean(),
  })
  console.log(data)

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  if (data) {
    const chosenBean = data.items[getRandomNumber(0, 9)]
    return (
      <>
        <h1>DREAM BEAN MEME TEAM</h1>
        <button>
          <Link to="quiz">
            <img
              src={chosenBean.imageUrl}
              alt={'bean is ' + chosenBean.flavorName}
            />
          </Link>
        </button>
        <h2>Click the Bean</h2>
      </>
    )
  }
}
