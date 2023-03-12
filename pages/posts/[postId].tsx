import { useRouter } from 'next/router'
import React from 'react'

const postDetail = () => {
  const router = useRouter()
  const postId = router.query.postId

  return (
    <div>Detail about post {postId}</div>
  )
}

export default postDetail