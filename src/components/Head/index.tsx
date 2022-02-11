import type { NextPage } from "next";
import Head from "next/head";

export const HeadV: NextPage = () => {
  return (
    <Head>
        <title>Vitorfariaz</title>
        <meta name="description" content="Vitorfariaz website" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="styles.css" />
    </Head>
  );
};
