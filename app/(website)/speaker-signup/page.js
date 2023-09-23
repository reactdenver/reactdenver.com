import { getSettings } from "@/lib/sanity/client";
import SpeakerSignup from "./speaker-signup";

export default async function SpeakerSignupPage() {
  const settings = await getSettings();
  return <SpeakerSignup settings={settings} />;
}

// export const revalidate = 60;
