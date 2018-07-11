const remark = require('remark');
const parser = require('remark-parse');
const frontmatter = require('remark-frontmatter');
const guide = require('remark-preset-lint-markdown-style-guide');
const parseFrontmatter = require('remark-parse-yaml');
const html = require('remark-html');
const vfile = require('to-vfile');

const a = remark()
  .use(guide)
  .use(parser)
  .use(frontmatter, ['yaml'])
  .use(parseFrontmatter)
  .use(html)
  .use(logger)
  .process(vfile.readSync('README.md'));

function logger() {
  return (node, file) => {
    const { children } = node;
    const yaml = children.filter(n => n.type === 'yaml')[0];
    file.data.meta = yaml.data.parsedValue;
    return node;
  };
}

console.log(a);
