import Time from 'components/Time';
import Comments from 'components/Comments';
import { Suspense } from 'react';

export default async function Page({ params }: { params: { productId: string } }) {
  const product: any = await fetch(`https://fakestoreapi.com/products/${params.productId}`, {
    next: { revalidate: 5 }
  }).then((res) => res.json());

  return (
    <>
      <Time />
      <h1 className="color-primary mt-20">{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <br />
      <img className="width-20" src={product.image} alt={product.title} />
      <br />
      <button>Add to cart</button>

      <h2 className="mt-50">Comments</h2>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Comments />
      </Suspense>
    </>
  );
}
