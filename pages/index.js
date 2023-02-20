import PizzaList from '@/components/PizzaList';
import Head from 'next/head'
import Featured from "../components/Featured";


export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzeria - The best pizzas in town</title>
        <meta name="description" content="My 3rd attempt of Pizzeria with NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList/>
    </>
  )
}
