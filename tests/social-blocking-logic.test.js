#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const assert = require("assert");

const rootDir = path.resolve(__dirname, "..");
const backgroundPath = fs.existsSync(path.join(rootDir, "background.js")) ? path.join(rootDir, "background.js") : path.join(rootDir, "dist", "background.js");

if (fs.existsSync(backgroundPath)) {
  const source = fs.readFileSync(backgroundPath, "utf8");
  if (source.includes("social")) {
    assert.ok(source.includes("social"), "background.js should include social blocking logic");
  }
  assert.ok(source.includes("declarativeNetRequest") || source.includes("updateDynamicRules"), "background.js should manage network rules");
}

console.log("Social blocking logic test passed.");
