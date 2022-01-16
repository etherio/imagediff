
(async () => {
  const { title, released } = await Server.getSeriesDetails(series_id);
  const { video_id } = await Facebook.uploadVideo({
    title: `${title} (${released}) - Episode ${episode} [Sub:${subtitle}]`,
    stream: createReadStream(videoPath),
    id: FACEBOOK_PAGE_ID,
    token: FACEBOOK_PAGE_TOKEN
  });
  await Server.createSeriesEpisode({
    series_id,
    video_id,
    episode,
    subtitle
  });
})();
