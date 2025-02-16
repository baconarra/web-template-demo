/* eslint-disable */

import * as generate from "./task.json";
import fs from "fs";

const baseUrl = process.env.STRAPI_ENDPOINT;
const token = process.env.STRAPI_AUTH;
const companyName = process.env.COMPANY_NAME;

if (!baseUrl) {
  throw new Error("STRAPI_ENDPOINT is not defined");
}

const ignore_keys = [
  "documentId",
  "id",
  "createdAt",
  "updatedAt",
  "publishedAt",
  "formats",
  "hash",
  "provider",
  "provider_metadata",
  "locale",
];

(async function () {
  for (const task of generate.targets) {
    const url = `${baseUrl}/${companyName ? companyName + "-" : ""}${
      task.endpoint
    }`;
    console.log(url);
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    const data = json.data ?? json;

    if (Array.isArray(data)) {
      // Collection Type
      const obj = data.map((obj) => trimObject(obj));
      fs.writeFileSync(`${generate.dest}${task.output}`, JSON.stringify(obj));
    } else {
      // Single Type
      const obj = trimObject(data);
      fs.writeFileSync(`${generate.dest}${task.output}`, JSON.stringify(obj));
    }
  }
})();

function trimObject(obj: Record<string, any>): Record<string, any> {
  for (const key of ignore_keys) {
    delete obj[key];
  }

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key] = obj[key].map((item: any) =>
        typeof item === "object" && item !== null ? trimObject(item) : item
      );
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      obj[key] = trimObject(obj[key]);
    }
  }
  return obj;
}
