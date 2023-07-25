import { styled } from "@/styles";
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import camisa1 from "../assets/1.png";
import camisa2 from "../assets/2.png";
import camisa3 from "../assets/3.png";

export default function Home() {
  return (
    <HomeContainer>
      <title>Ignite Shop</title>

      <Product>
        <Image src={camisa1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>

      <Product>
        <Image src={camisa2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>

      <Product>
        <Image src={camisa3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta G</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
