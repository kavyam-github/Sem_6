interface Details {
  StudentID: number;
  StudentName: string;
  Sem: number;
  Batch: string;
}

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/details");
  console.log(res);
  
   const items: Details[] = await res.json();

  return (
    <div>
      <h2>Student Details</h2>

      <ul>
        {items.map((i) => (
          <li key={i.StudentID}>
            <strong>ID:</strong> {i.StudentID} <br />
            <strong>Name:</strong> {i.StudentName} <br />
            <strong>Semester:</strong> {i.Sem} <br />
            <strong>Batch:</strong> {i.Batch}
          </li>
        ))}
      </ul>
    </div>
  );
}
