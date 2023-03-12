import { useRouter } from 'next/router'
import React from 'react'

const postDetail = () => {
  const router = useRouter()
  const postId = router.query.postId
  const redirectNewReview = () => {
    router.push(`/posts/${postId}/review/1`)
  }

  return (
    <>
      <h1>Detail about post {postId}</h1>
      <button onClick={redirectNewReview}>click me to new review page</button>
    </>
  )
}

export default postDetail