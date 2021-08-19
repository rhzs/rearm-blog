const { posts } = require("../posts");
const max = 10; // max returned posts

module.exports = () => `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Rheza Satria</title>
    <subtitle>Essays</subtitle>
    <link href="https://rearm.id/atom" rel="self"/>
    <link href="https://rearm.id/"/>
    <updated>${posts[0].date}</updated>
    <id>https://rearm.id/</id>
    <author>
      <name>Rheza Satria</name>
      <email>rheza@rearm.id</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://rearm.id/${post.date.match(/\d{4}/)[0]}/${
        post.id
      }"/>
          <updated>${post.date}</updated>
        </entry>`;
    }, "")}
  </feed>
`;
