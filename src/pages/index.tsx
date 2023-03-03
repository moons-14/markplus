import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>MarkPlus</title>
        <meta name="description" content="Manage bookmarks in your own" />
        <link rel="icon" href="/markplus.svg" type="image/svg+xml" />
      </Head>

      <main >
        <h1 >
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}
