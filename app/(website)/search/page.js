import { Suspense } from "react";
import Search from "./search";

export default async function SearchPage() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}

// export const revalidate = 60;
