import bcrypt from 'bcrypt';

const hashedPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        return hashPassword;
    } catch (error) {
        console.log(error);
    }
}

export { hashedPassword };