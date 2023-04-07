export function getTags(arr) {
  // const allTags2dArr = allPosts.map(({ tags }) => tags);
  // const allTags1dArr = [].concat(...allTags2dArr);
  // const uniqueTags = ['all', ...new Set(allTags1dArr)];

  const uniqueTags = ['all'];
  arr.forEach(({ tags }) =>
    tags.forEach((tag) => {
      if (!uniqueTags.includes(tag)) uniqueTags.push(tag);
    }),
  );

  return uniqueTags;
}
