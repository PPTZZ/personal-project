import { ReactNode } from "react";

interface SecondaryLayoutProps {
  children: ReactNode;
}

export default function SecondaryLayout ({ children }: SecondaryLayoutProps) {
  return (
    <div>
      <main className="flex flex-col lg:flex-row pt-36">
        {children}
        <div className="lg:w-2/5 flex sm:px-8 lg:flex-col gap-20 py-20 lg:items-baseline pt-5">
          <div className="lg:ml-32 w-2/5 lg:w-full">
            <p className="font-bold text-textColor">Summary for date</p>
            <p className="w-full text-secondary font-semibold sm:py-2">Left</p>
            <p className="w-full text-secondary font-semibold sm:py-2">
              consumed
            </p>
            <p className="w-full text-secondary font-semibold sm:py-2">
              daily rate
            </p>
            <p className="w-full text-secondary font-semibold sm:py-2">
              n% of normal
            </p>
          </div>
          <div className=" w-2/5 lg:mt-10">
            <p className="font-bold text-textColor">Food not recomended</p>
          </div>
        </div>
      </main>
    </div>
  );
}
