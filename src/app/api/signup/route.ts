import { NextResponse } from "next/server";
import { registerUser } from "@/lib/db/handler/users/";

export async function POST(request: Request) {
    const data = await request.json();

    const userData: User = {
        username: data.username,
        email: data.email,
        password: data.password,
    };

    const registerReport: UserRegisterReport = await registerUser(userData);
    return NextResponse.json({
        message: registerReport.report,
    });
}
