import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    const init_text = await prisma.text.create({
        data: {
            text: 'こんにちは',
        },
    });
    console.log({ init_text })
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })