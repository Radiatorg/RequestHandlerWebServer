import type { LoginRequest, LoginResponse } from "../types/auth";

export async function login(data: LoginRequest): Promise<LoginResponse> {
  console.log("fetch", data);
const res = await fetch("http://localhost:8080/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});

if (!res.ok) throw new Error(await res.text());

return res.json();
}