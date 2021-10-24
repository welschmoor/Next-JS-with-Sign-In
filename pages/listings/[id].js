import { useRouter } from "next/router"

const Item = () => {
  const router = useRouter()
  const { id } = router.query

  return (<h1>Listing number: {id}</h1>)
}

export async function getStaticProps({params}) {
  const req = await fetch(`https://localhost:3000/listings/${params.id}.json`)
  const data = await req.json()

  return {
    props: { item: data }
  }
} 
