import { useRouter } from 'next/router'

const DetailsView = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default DetailsView