import { addNewEntry, getSession } from "@/app/actions/actions";
import { formattedDate } from "@/app/lib/services";
import ConsummedProductsList from "@/app/ui/consummedProductsList";
import { redirect } from "next/navigation";

const Diary = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/");
  }
  const userId = session.userId;
  const defaultDate = formattedDate();
  return (
    <div className="w-3/5">
      <form action={addNewEntry}>
        <input
          type="date"
          name="entryDate"
          defaultValue={`${defaultDate}`}
          className="text-3xl"
        />
        <div className="flex mt-16 gap-12">
          <input
            className="border-b-2 w-60 placeholder:font-semibold"
            type="text"
            name="productName"
            placeholder="Enter roduct name"
          />
          <input
            className="border-b-2 w-28 placeholder:text-right placeholder:font-semibold"
            type="number"
            name="grams"
            placeholder="Grams"
          />
          <button className="size-14 bg-primary text-5xl text-white rounded-full flex justify-center aspect-square">
            +
          </button>
        </div>
      </form>
      <ConsummedProductsList />
    </div>
  );
};

export default Diary;
