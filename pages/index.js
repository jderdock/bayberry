import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Bayberry on the Magothy - A Community in Arnold, Maryland</title>
        <meta descption="test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
        <span className="text-xl md:text-2xl block font-normal mb-1">The Community of</span>
         Bayberry on the Magothy
        </h1>

        <p className="mt-12 text-2xl italic">
         Coming Soon...
        </p>


      </main>

      <footer className="flex items-center justify-center w-full h-24">
        <p className="uppercase text-sm">contact: <a href="mailto:admin@bayberryonthemagothy.com" className="underline">admin@bayberryonthemagothy.com</a></p>
      </footer>
    </div>
  )
}
