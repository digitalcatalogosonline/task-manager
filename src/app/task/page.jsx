

import { Navbar } from "../components/navbar/navbar";
import Cards from "../components/cards/card";

export default async function Hola() {
  
  const req = await fetch("http://localhost:3000/api/addTask",{ cache: 'no-store' });
  const data = await req.json();
  return (
    <>
    <Navbar/>
    <Cards data={data}/>
    </>
  );
}
