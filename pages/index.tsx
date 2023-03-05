import { limitToLast } from 'firebase/firestore'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Loader from '../components/Loader'

export default function Home() {
  return (
    
    <div>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: {username: 'guidotorresmx'}
      }}>
        guidotorresmx's profile
      </Link>
    </div>
  )
}
