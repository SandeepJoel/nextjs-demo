import Time from 'components/Time';
import Link from 'next/link';

export default async function Page() {
  return (
    <>
      <h1 className="flex justify-content-center">Welcome to the documentation</h1>
      <Time></Time>
      <h1>Quick start</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, deleniti dolores porro
        possimus iusto magnam suscipit nihil perspiciatis nobis nemo saepe officiis commodi
        architecto minima, similique quam facilis aliquid consequatur?Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolorem, deleniti dolores porro possimus iusto magnam suscipit
        nihil perspiciatis nobis nemo saepe officiis commodi architecto minima, similique quam
        facilis aliquid consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorem, deleniti dolores porro possimus iusto magnam suscipit nihil perspiciatis nobis nemo
        saepe officiis commodi architecto minima, similique quam facilis aliquid consequatur?Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolorem, deleniti dolores porro possimus
        iusto magnam suscipit nihil perspiciatis nobis nemo saepe officiis commodi architecto
        minima, similique.
      </p>
    </>
  );
}
