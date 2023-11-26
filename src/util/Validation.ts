const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Password criteria: at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
const passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export interface MessageState {
    message: string;
    isError: boolean;
}

export const validateEmail = (email: string): MessageState => {
    const isValidate = emailPattern.test(email);
    return {
        message: isValidate ? '' : '이메일을 다시한번 확인해주세요.',
        isError: !isValidate
    }
};

export const validatePassword = (password: string): MessageState => {
    const isValidate = passwordPattern.test(password);
    return {
        message: isValidate ? '' : '영문, 숫자, 특수문자 형식으로 다시 입력해주세요.',
        isError: !isValidate
    }
}
