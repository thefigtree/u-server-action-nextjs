// import { addPerson } from "../actions/person";
import { addPerson } from "@/app/actions/person";
import SubmitButton from "./submit-button";

export default function FormEditor() {
  return (
    <>
      <form
        action={async (formData: FormData) => {
          "use server";
          await addPerson(formData);
        }}
        className="space-y-4 p-4"
      >
        <input
          type="text"
          name="personName"
          id="personName"
          placeholder="Enter a Person"
          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md placeholder-gray-400 text-white"
          autoComplete="off"
        />
        <SubmitButton />
      </form>
    </>
  );
}
