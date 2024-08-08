

import { Navbar } from "../components/navbar/navbar";
import Cards from "../components/cards/card";

export default async function Hola() {
  
  const req = await fetch("https://task-manager-livid-seven.vercel.app/api/addTask",{ cache: 'no-store' });
  const data = await req.json();
  return (
    <>
    <Navbar/>
    <Cards data={data}/>
    </>
  );
}
