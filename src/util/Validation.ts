const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Password criteria: at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
const passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validateEmail = (email: string): boolean => {
    return emailPattern.test(email);
};

export const validatePassword = (password: string): boolean => {
    return passwordPattern.test(password);
}
