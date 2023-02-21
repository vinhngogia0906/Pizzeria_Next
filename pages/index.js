import PizzaList from '@/components/PizzaList';
import Head from 'next/head'
import Featured from "../components/Featured";
import axios from 'axios';

export default function Home({pizzaList}) {
  return (
    <>
      <Head>
        <title>Pizzeria - The best pizzas in town</title>
        <meta name="description" content="My 3rd attempt of Pizzeria with NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList = {pizzaList}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products/preston");
  return {
    props: {
      pizzaList: res.data,
    }
  }
}