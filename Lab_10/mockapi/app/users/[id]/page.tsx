import { Params } from "next/dist/server/request/params";

interface User {
    id: string;
    name: string;
    email: string;
}

async function getUserById(id: string){
    const res = await fetch(
        `https://693d4a39f55f1be793026821.mockapi.io/faculty/${id}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("User not found");
    }

    return res.json();
}
    type paramsPromise  = Promise<{id:string}>
export default async function Page({
    params,
}: {
    params: paramsPromise;
}) {
    const {id} = await params;
    const user = await getUserById(id);

    return (
        <div className="p-10">
            <h1>User Details</h1>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}
