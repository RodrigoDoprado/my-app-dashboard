
import { Api } from "../../service";

export async function LoginRequest(email: string, password: string) {
    try {
        const request = await Api.post("account/login", { email, password })
        return request.data;
    } catch (error) {
        alert("Desculpa tente outra vez!")
    }
}