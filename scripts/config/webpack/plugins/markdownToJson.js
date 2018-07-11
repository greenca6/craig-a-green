const fs = require('fs-utils');
const path = require('path');
const remark = require('remark');
const parser = require('remark-parse');
const frontmatter = require('remark-frontmatter');
const guide = require('remark-preset-lint-markdown-style-guide');
const parseFrontmatter = require('remark-parse-yaml');
const html = require('remark-html');
const vfile = require('to-vfile');


class MarkdownToJson {
  constructor({ markdownDir }) {
    this.markdownDir = markdownDir;

    if (!fs.existsSync(this.markdownDir)) {
      throw new Error(`Failed to initialize MarkdownToJson plugin, directory not found: ${this.markdownDir}`);
    }
  }

  apply(compiler) {
    // Find all md files
    // Add each to list of file dependencies so webpack will reload on changes
    // For each
      // Parse file, get it's JSON content
      // Minimum is a `title` field in the `meta` property
      // Add this to local array of markdownToJson content (include `meta`data as well as the `content` which is a HTML string)
    const files = fs.glob.sync(`${path.resolve(this.markdownDir)}/*.md`);

    compiler.plugin('emit', (compilation, callback) => {
      // Add the markdown files to the watch list
      compilation.fileDependencies.push(...files);
    });
  }
}

module.exports = MarkdownToJson;
