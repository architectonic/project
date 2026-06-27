#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(`architectonic-project

Runtime-neutral project operating-unit package for human-agent collaboration.

Usage:
  npx architectonic-project
  npx architectonic-project help

This package currently reserves the public package name and ships the
canonical project bundle in Markdown.`);
  process.exit(0);
}

console.log("architectonic-project");
console.log("");
console.log("Project bundle for source-grounded project understanding, decisions, ontology, and handoff.");
console.log("See README.md and START_HERE.md in the package contents.");
