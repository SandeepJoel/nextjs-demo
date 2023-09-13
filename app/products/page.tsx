import Time from 'components/Time';
import Link from 'next/link';

export default async function Page() {
  const allProducts: any = await fetch(`https://fakestoreapi.com/products`, {
    next: { revalidate: 10 }
  }).then((res) => res.json());

  let products = allProducts.map((i: any, index: number) => (
    <div className="product m-10" key={index}>
      <Link href={`products/${i.id}`}>
        <div className="p-15">
          <p className="text-ellipsis">{i.title}</p>
          <p>${i.price}</p>
          <img
            src={i.image}
            alt=""
            loading="lazy"
            style={{ objectFit: 'cover', height: '100px', width: '100px' }}
          />
        </div>
      </Link>
    </div>
  ));
  return (
    <>
      <Time />
      <h1>Product Listing</h1>
      <section className="flex flex-wrap justify-content-center">
        <div className="grid">{products}</div>
      </section>
    </>
  );
}
