import bcrypt from 'bcrypt'

export const verifyPassword = async (password: string, truePassword: string) => {

    const bcryptResult = await bcrypt.compare(password, truePassword)
    console.log('observando resultado bcrypt -> ', bcryptResult, password);

    return bcryptResult;
}
