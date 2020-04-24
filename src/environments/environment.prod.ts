const baseUri = `http://localhost`;
const port = `8765`
const name = 'posts';

export const environment = {
  production: true,
  postUri: `${baseUri}:${port}/post-service/${name}/`,
  commentUri: `${baseUri}:${port}/comment-service/${name}/`
};