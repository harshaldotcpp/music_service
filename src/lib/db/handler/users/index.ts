import db from "@/lib/db";
import { users } from "@/lib/db/schema/users";
import { eq, sql } from "drizzle-orm";

async function getUserByUsername(username: string) {
    const query = sql`select * from ${users} where ${users.username} = ${username}`;
    const user = await db.execute(query);
    return user;
}

async function getUserByEmail(email: string) {
    const user = await db.select().from(users).where(eq(users.email, email));
    return user;
}

async function usernameExist(username: string): Promise<boolean> {
    const user = await getUserByUsername(username);
    if (user.length === 0) return false;
    return true;
}

async function emailExist(email: string): Promise<boolean> {
    const user = await getUserByEmail(email);
    if (user.length === 0) return false;
    return true;
}

async function registerUser(userData: User): Promise<UserRegisterReport> {
    const isUsernameExist = await usernameExist(userData.username);
    const isEmailExist = await emailExist(userData.email);
    if (isUsernameExist)
        return { didUserRegister: false, report: "username already exist" };
    if (isEmailExist)
        return { didUserRegister: false, report: "email already exist" };

    /*
     *
     * inserting user into database
     *
     */

    const user = await db.insert(users).values({
        username: userData.username,
        email: userData.email,
        password: userData.password,
    });

    return {
        didUserRegister: true,
        report: "successfully signup",
    };
}

export { registerUser, getUserByUsername };
