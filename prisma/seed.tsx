import { hash } from "bcrypt";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  const password = await hash("test", 12);
  const user = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      email: "test@test.com",
      name: "Test User",
      password: password,
    },
  });
  const adminUser = await prisma.user.upsert({
    where: { email: "ventare@outlook.com" },
    update: {},
    create: {
      email: "ventare@outlook.com",
      name: "Admin User",
      role: "ADMIN",
      password: password,
    },
  });
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });