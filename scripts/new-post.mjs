#!/usr/bin/env node
import readline from "readline";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.resolve(__dirname, "../src/posts");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(question) {
  return new Promise((resolve) => rl.question(question, (answer) => resolve(answer.trim())));
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function formatTags(raw) {
  return raw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

function buildFrontmatter(title, date, description, tags) {
  const tagList = tags.map((t) => `"${t}"`).join(", ");
  return `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: [${tagList}]
draft: true
---`;
}

const BODY_TEMPLATE = `
## Introduction

<!-- Write your intro here -->

## Section One

<!-- ... -->

## Conclusion

<!-- ... -->
`;

async function main() {
  console.log("\nNew blog post\n");

  const title = await ask("Title: ");
  if (!title) {
    console.error("Title is required.");
    process.exit(1);
  }

  const description = await ask("Description: ");
  if (!description) {
    console.error("Description is required.");
    process.exit(1);
  }

  const rawTags = await ask("Tags (comma-separated): ");
  const tags = formatTags(rawTags);

  rl.close();

  const date = today();
  const slug = slugify(title);
  const filename = `${date}-${slug}.md`;
  const filepath = path.join(POSTS_DIR, filename);

  if (fs.existsSync(filepath)) {
    console.error(`\nFile already exists: ${filepath}`);
    process.exit(1);
  }

  const content = `${buildFrontmatter(title, date, description, tags)}\n${BODY_TEMPLATE}`;
  fs.writeFileSync(filepath, content, "utf8");

  console.log(`\nCreated: src/posts/${filename}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
