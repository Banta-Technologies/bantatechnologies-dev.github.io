const calculateReadingTime = (content) => {
  const strippedContent = content.replace(/<.*?>/g, "").replace(/```[\s\S]*?```/g, "").replace(/import .*?;/g, "").replace(/#/g, "").replace(/[*_`~[\]]/g, "");
  const wordCount = strippedContent.split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 200;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  calculateReadingTime
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, calculateReadingTime as c };
