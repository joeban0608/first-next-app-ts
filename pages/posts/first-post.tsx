import React from "react";
import Link from "next/link";
import NextIcon from "../../components/NextIcon";
import Head from "next/head";
import Script from "next/script";

const FirstPost = () => {
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
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`腳本正確地載入，window.FB 已被定義`)}
      />
    </>
  );
};

export default FirstPost;
