import { HomeContainer, Product } from "@/styles/pages/home";
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import { useKeenSlider } from "keen-slider/react";
import Head from "next/head";
import Image from "next/image";
import Stripe from "stripe";
import Link from "next/link";

import "keen-slider/keen-slider.min.css";

interface HomeProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ product }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {product.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const product = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    const unit_amount = price.unit_amount ? price.unit_amount / 100 : 0;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(unit_amount),
    };
  });

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 2,
  };
};
