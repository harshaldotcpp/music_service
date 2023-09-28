function validatePassword(password: string): boolean {
    if (password.length < 7) return false;
    return true;
}

function validateEmail(email: string): boolean {
    const regax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regax.test(email);
}

function validateUsername(username: string): boolean {
    /* regax testing
     * - username must have more then 3 consecative alphabet
     * - it can only contains numbers alphabet and (@,_)
     * - length should be between 3 to 50 characters
     *
     */

    if (username.length === 0) return false;

    const regax =
        /^(?=.{3,50}$)((@|_|[0-9a-zA-z])*[a-zA-Z]{3}(@|_|[0-9a-zA-Z])*)$/;

    return regax.test(username);
}

function confirmPassword(password: string, confirmPassword: string): boolean {
    if (password === confirmPassword) return true;
    return false;
}

function validateSignupForm(signupForm: SignupForm): Validation {
    if (!validateEmail(signupForm.email))
        return {
            success: false,
            message: "invalid email",
        };
    if (!validateUsername(signupForm.username))
        return {
            success: false,
            message:
                signupForm.username.length === 0
                    ? "username is missing"
                    : "username is invalid",
        };
    if (!validatePassword(signupForm.password))
        return {
            success: false,
            message: "minimum password length must be 7",
        };

    if (!confirmPassword(signupForm.password, signupForm.confirmPassword))
        return {
            success: false,
            message: "password doesnt match",
        };

    return {
        success: true,
        message: "valid form",
    };
}

type Validation = {
    success: boolean;
    message: string;
};

type SignupForm = {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
};

export { validateSignupForm };
