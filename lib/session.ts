// app/lib/session.ts
import 'server-only'
import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'


const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)


export type SessionPayload = { userId: string }


export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
    try {
        const { payload } = await jwtVerify(session, encodedKey, { algorithms: ['HS256'] })
        return payload as SessionPayload & { exp: number; iat: number }
    } catch {
        return null
    }
}


export async function createSession(userId: string) {
    const cookieStore = await cookies()
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt({ userId })
    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires,
        sameSite: 'lax',
        path: '/',
    })
}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}


export async function updateSession() {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')?.value
    const payload = await decrypt(session)
    if (!session || !payload) return null
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires,
        sameSite: 'lax',
        path: '/',
    })
}