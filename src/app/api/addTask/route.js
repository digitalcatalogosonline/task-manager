import { PrismaClient } from "@prisma/client";
export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const content = formData.get("content");

  const prisma = new PrismaClient();
  const query = await prisma.work.create({
    data: {
      name: name,
      content: content,
      estate: "no completed",
    },
  });
  console.log(name, content);
  return Response.json({ message: "creada con exito" });
}

export async function GET(request) {
  const prisma = new PrismaClient();
  const query = await prisma.work.findMany();
  return Response.json(query);
}
