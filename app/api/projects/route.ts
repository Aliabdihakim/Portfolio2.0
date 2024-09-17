import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client
const prisma = new PrismaClient();

// API handler to fetch all projects
export async function GET() {
  const projects = await prisma.project.findMany(); // Fetch projects
  return NextResponse.json(projects); // Return data as JSON
}
