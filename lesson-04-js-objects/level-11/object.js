// TODO: Build an object from a written specification and export it as default.
// Example spec: book with title, author, pages, and a summary() method assigned from a named function.

function summary() {
  return "The book of life";
}

const book = {
  title: "The Holy Bible",
  author: "God through mankind",
  pages: 1500,
  summary: summary
};


export default book;
