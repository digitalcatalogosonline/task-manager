import { PrismaClient } from "@prisma/client";
export async function DELETE(request,{params}) {
  const id = params.id
  const prisma = new PrismaClient();
  try {
    const query = await prisma.work.delete({
      where: {
       id:parseInt(id)
      },
    });
  } catch (error) {
    return Response.json({error:error})
  }

  
  return Response.json({ message: "ok" });
}
