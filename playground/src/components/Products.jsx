import React, { useEffect, useState } from "react";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [products, setProducts] = useState([]);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터를 잘 받아왔음!🔥");
        setProducts(data);
      });
    return () => {
      console.log("청소부가 정리합니다");
    };
  }, [checked]);

  return (
    <>
      <input
        type="checkbox"
        id="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">할인하고 있는 상품들만 보기! 🔥 </label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

// const [checked, setChecked] = useState(false);

// const handleChange = () => {
//   setChecked((prev) => !prev);
// };

/* <input
id="checkbox"
type="checkbox"
value={checked}
onChange={handleChange}
/>
<label htmlFor="checkbox">Show only hot sale!🔥 </label> */

// useEffect(() => {
//   fetch(`data/${checked ? "sale_" : ""}products.json`)
//     .then((res) => res.json())
//     .then((data) => {
//       setProducts(data);
//     });
// }, [checked]);
