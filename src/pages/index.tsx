import { styled } from "@/styles";
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import camisa1 from "../assets/1.png";
import camisa2 from "../assets/2.png";
import camisa3 from "../assets/3.png";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <title>Ignite Shop</title>

      <Product className="keen-slider__slide">
        <Image src={camisa1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisa2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisa3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta G</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisa3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta G</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
