function socialMedia(url) {
  if (url.includes('instagram.com')) return 1;
  if (url.includes('reddit.com')) return 2;
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 3;
  if (url.includes('x.com')) return 4;
  return 0;
}

export { socialMedia };
