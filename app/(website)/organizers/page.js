import { getAllOrganizers } from "@/lib/sanity/client";
import Organizers from "./organizers";

export default async function OrganizersPage() {
  const organizers = await getAllOrganizers();
  return <Organizers organizers={organizers} />;
}

export const revalidate = 60;
