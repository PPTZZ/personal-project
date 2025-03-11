import { addNewEntry, getSession } from "@/app/actions/actions";
import { formattedDate } from "@/app/lib/services";
import ConsummedProductsList from "@/app/ui/consummedProductsList";
import { redirect } from "next/navigation";

const Diary = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/");
  }
  const defaultDate = formattedDate();
  const userId = session?.userId || "";
  return (
    <div>
      <form action={addNewEntry}>
        <input
          type="date"
          name="entryDate"
          defaultValue={`${defaultDate}`}
          className="text-3xl"
        />
        <div className="flex">
          <input type="text" name="productName" placeholder="product name" />
          <input type="number" name="grams" placeholder="grams" />
          <button className="size-14 bg-primary text-5xl text-white rounded-full flex justify-center">
            +
          </button>
        </div>
      </form>
      <ConsummedProductsList userId={userId} />
    </div>
  );
};

export default Diary;
