import { useRouter } from "next/router";
import React from "react";

const review = () => {
  const router = useRouter();
  const { postId, reviewId } = router.query;

  return <h2>ReviewID :{reviewId}, PostID :{postId}</h2>;
};

export default review;
