
export const asideDataCleaner = data => (
  // const num = Math.floor(Math.random()*(data.count));
    { scroll: data.results[Math.floor(Math.random()*(data.count))].opening_crawl,
      title: data.results[Math.floor(Math.random()*(data.count))].title,
      year: data.results[Math.floor(Math.random()*(data.count))].release_date
    });






