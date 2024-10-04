"use client";

import { deletePerson } from "../app/actions/person";

export default function RemoveButton({ name }: { name: string }) {
  return (
    <>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => deletePerson(name)}
      >
        Remove
      </button>
    </>
  );
}
