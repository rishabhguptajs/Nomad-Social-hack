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

export const comparePassword = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        console.log(error);
    }
}

export { hashedPassword };