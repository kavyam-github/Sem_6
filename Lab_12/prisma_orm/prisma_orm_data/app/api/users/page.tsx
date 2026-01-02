import { userdetails } from "@/app/generated/prisma/browser"
import { prisma } from "@/app/lib/prisma"
import Link from "next/link"

export default async function UserList() {
    const data = await prisma.userdetails.findMany()
    return (
        <div>
            <h1>Product List</h1>
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>UserName</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((u: userdetails) => (
                        <tr key={u.userID}>
                            <td>{u.userID}</td>
                            <td>{u.UserName}</td>
                            <td><Link href={"/usersList/" + u.userID}>Detail</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}