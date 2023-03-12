import React from "react";
import Link from "next/link";
import NextIcon from "../../components/NextIcon";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

const FirstPost = () => {
  const router = useRouter();

  const redirectNewPost = () => {
    router.push("/posts/1");
  };

  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <NextIcon />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <button onClick={redirectNewPost}>click me to new post page</button>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`腳本正確地載入，window.FB 已被定義`)}
      />
    </>
  );
};

export default FirstPost;
