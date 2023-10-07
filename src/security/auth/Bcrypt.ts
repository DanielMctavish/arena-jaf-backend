import bcrypt from 'bcrypt'

export const verifyPassword = async (password: string, truePassword: string) => {
    const bcryptResult = await bcrypt.compare(password, truePassword)
    return bcryptResult;
}
