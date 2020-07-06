const postDate = async (data, url) => {
  const resData = await fetch(url, {
    method: "POST",
    body: data,
  });
  return await resData.text();
};

const getDate = async (url) => {
  const resData = await fetch(url);

  if (!resData.ok) {
    throw new Error(`Could not fetch ${url}, status  ${res.status}`);
  }
  return await resData.json();
};

export { postDate, getDate };
