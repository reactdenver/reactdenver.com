import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import speaker from "./schemas/speaker";
import event from "./schemas/event";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, speaker, event],
};
