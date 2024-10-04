import { sql } from "@vercel/postgres";
import { addPerson } from "./actions/person";
import RemoveButton from "@/components/remove-button";
import FormEditor from "@/components/form-editor";

// v2
export default async function Home() {
  // API
  // -> 데이터 요청, 데이터를 변경, 삭제

  const { rows } = await sql`SELECT * FROM Person`;

  return (
    <div className="bg-zinc-900 min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col gap-4 w-[400px]">
        {/* Form Container */}
        <div className="w-full max-w-md bg-gray-700 rounded-xl shadow-md">
          <FormEditor></FormEditor>
        </div>

        {/* List Container */}
        <div className="w-full max-w-md rounded-md shadow-md flex flex-col gap-4">
          {rows &&
            rows.map((row, index) => (
              <div
                key={index}
                className="text-white space-y-4 p-4 bg-gray-700 flex justify-between"
              >
                {/* Replace with dynamic content */}
                {row.name}
                <RemoveButton name={row.name}></RemoveButton>
              </div>
            ))}

          {/* Repeat for each person */}
        </div>
      </div>
    </div>
  );
}
