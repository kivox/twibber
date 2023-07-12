import { PrismaClient } from '@prisma/client'
import {dev} from "$app/environment";

const prisma = new PrismaClient({
    log: dev ? ['query', 'info', 'warn', 'error'] : ['error', "warn"],
})

export default prisma