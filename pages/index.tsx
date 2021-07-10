import Skeleton from 'react-loading-skeleton'
import Search from '@/components/Search'
import CardList from '@/components/CardList'
import ProductSearch from '@/components/ProductSearch'

import { useEntries } from '@/lib/swr-hooks'

export default function IndexPage() {
  // const { entries, isLoading } = useEntries()

  // if (isLoading) {
  //   return (
  //     <div>
  //       <Nav />
  //       <Container>
  //         <Skeleton width={180} height={24} />
  //         <Skeleton height={48} />
  //         <div className="my-4" />
  //         <Skeleton width={180} height={24} />
  //         <Skeleton height={48} />
  //         <div className="my-4" />
  //         <Skeleton width={180} height={24} />
  //         <Skeleton height={48} />
  //       </Container>
  //     </div>
  //   )
  // }

  return (
    <div>
      <ProductSearch></ProductSearch>
    </div>
  )
}
