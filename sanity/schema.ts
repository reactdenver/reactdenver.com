import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import post from "./schemas/post";
import author from "./schemas/author";
import speaker from "./schemas/speaker";
import event from "./schemas/event";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, blockContent, speaker, event],
};
