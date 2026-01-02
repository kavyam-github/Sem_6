interface User {
  id: string;
  name: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://693d4a39f55f1be793026821.mockapi.io/faculty", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HomePage() {
  const users = await getUsers();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Users List
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  <td className="p-3">{user.id}</td>
                  <td className="p-3 font-medium">{user.name}</td>
                  <td className="p-3 text-gray-600">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
