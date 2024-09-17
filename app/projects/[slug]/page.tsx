import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

const page = async ({ params }: { params: { slug: string } }) => {
  const projects = await prisma.project.findMany();

  console.log({ params, projects });

  return <div>{params.slug}</div>;
};

export default page;
