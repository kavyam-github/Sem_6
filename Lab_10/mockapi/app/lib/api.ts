// lib/api.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

const BASE_URL = "https://693d4a39f55f1be793026821.mockapi.io/faculty";

export async function getAllUsers(): Promise<User[]> {
  const res = await fetch(BASE_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function getUserById(id: string): Promise<User> {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("User not found");
  return res.json();
}
