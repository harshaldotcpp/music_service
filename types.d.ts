type User = {
    username: string;
    email: string;
    password: string;
};

interface UserRegisterReport {
    didUserRegister: boolean;
    report: string;
}
