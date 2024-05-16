import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const texts = ['やっほー', 'うほうほ', 'っぽぽぽっぽー', 'わーい']
    for(const text of texts){
        const init_text = await prisma.text.create({
            data: {
                text: text,
            },
        });
        console.log({ init_text })
    }
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })