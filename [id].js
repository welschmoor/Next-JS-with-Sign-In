import { useRouter } from "next/router"
import Image from "next/image" // for better perform
import Head from "next/head" // for SEO optimization

const Item = ({ item }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>
          {item.color} {item.id} for sale
        </title>
      </Head>

      <h1>Listing number: {id}</h1>
      <Image src={item.image} alt={`picture of ${item.id}`} />
    </>
  )
}
export default Item



// tells Next to prerender the page. It runs when we build the site and sends props to component
export async function getStaticProps({ params }) {
  const req = await fetch(`https://localhost:3000/${params.id}.json`)
  const data = await req.json()

  // this item is the one that will be sent to Item component
  return {
    props: { item: data },
  }
}



// tells Next which dynamic pages to render. Uses the json list of all items.
export async function getStaticPaths() {
  const req = await fetch('https://localhost:3000/listings.json')
  const data = await req.json()

  const paths = data.map(each=> {
    return { params: { id: each }}
  })

  return {
    paths,
    fallback: false
  }
}
