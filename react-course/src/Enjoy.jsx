export function Enjoy({ title }) {
  console.log(title);
  return <h1>{title}</h1>;
}

export function UseCard({name,amount,married,addres,greet}) {
 
  return (
    <div>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? "casado" : "soltero"}</p>
      <ul>
        <li>City: {addres.city}</li>
        <li>Address: {addres.street}</li>
      </ul>
    </div>
  );
}
