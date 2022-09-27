import gql from 'graphql-tag'
import Link from 'next/link'
import {useQuery} from '@apollo/client'
import {initializeApollo} from '../apollo/client'

const userId = "632fc97ce39f1612ec43e4c7";

const ViewerQuery = gql`
  query ViewerQuery {
    viewer(ID: "${userId}") {
      id
      name
      status
    }
  }
`

const Index = () => {
    const {
        data: {viewer},
    } = useQuery(ViewerQuery)

    return (
        <div>
            You're signed in as {viewer.name} and you're {viewer.status} goto{' '}
            <Link href="/about">
                <a>static</a>
            </Link>{' '}
            page.
        </div>
    )
}

export async function getStaticProps() {
    const apolloClient = initializeApollo()

    await apolloClient.query({
        query: ViewerQuery,
    })

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
    }
}

export default Index
