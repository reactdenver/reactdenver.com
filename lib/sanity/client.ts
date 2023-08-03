import { apiVersion, dataset, projectId, useCdn } from "./config";
import {
  eventquery,
  paginatedeventsquery,
  configQuery,
  singleeventquery,
  patheventquery,
  allspeakersquery,
  speakersquery,
  eventsbyspeakerquery,
} from "./groq";
import { createClient } from "next-sanity";

if (!projectId) {
  console.error(
    "The Sanity Project ID is not set. Check your environment variables."
  );
}

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;

export const fetcher = async ([query, params]) => {
  return client ? client.fetch(query, params) : [];
};

export async function getAllEvents() {
  if (client) {
    return (await client.fetch(eventquery)) || [];
  }
  return [];
}

export async function getSettings() {
  if (client) {
    return (await client.fetch(configQuery)) || [];
  }
  return [];
}

export async function getEventBySlug(slug) {
  if (client) {
    return (await client.fetch(singleeventquery, { slug })) || {};
  }
  return {};
}

export async function getAllEventSlugs() {
  if (client) {
    const slugs = (await client.fetch(patheventquery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export async function getAllSpeakersSlugs() {
  if (client) {
    const slugs = (await client.fetch(speakersquery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export async function getSpeakerEventsBySlug(slug) {
  if (client) {
    return (await client.fetch(eventsbyspeakerquery, { slug })) || {};
  }
  return {};
}

export async function getAllSpeakers() {
  if (client) {
    return (await client.fetch(allspeakersquery)) || [];
  }
  return [];
}

export async function getPaginatedEvents(limit) {
  if (client) {
    return (
      (await client.fetch(paginatedeventsquery, {
        pageIndex: 0,
        limit: limit,
      })) || {}
    );
  }
  return {};
}
