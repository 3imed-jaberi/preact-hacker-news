import { useEffect, useState } from 'preact/hooks';
import NewsItem from './components/NewsItem';
import { getNewStories } from './services';

function App () {
  const [allNewsRefs, setAllNewsRefs] = useState<number[]>([])
  const [news, setNews] = useState<number[]>([])

  const onScroll = () => {
    // isPassMaxOffsetHeightValue --condition
    if (window.innerHeight + window.pageYOffset + 200 >= document.body.offsetHeight) loadMoreNews();
  };

  const loadMoreNews = (size = 10) => {
    const nextNews = allNewsRefs.splice(0, size)
    setNews(news => [...news, ...nextNews])
  };

  useEffect(() => {   
    (async () => {
      // fetch all news
      const _allNewsRefs = await getNewStories();
      // save all news to state
      setAllNewsRefs(_allNewsRefs!)
      // dispaly only 20 news
      loadMoreNews(20);
      // quick way to handle the scroll event to display more 10 news.
      window.addEventListener('scroll', onScroll);
    })()
  }, [])

  return (
    <div className="container">
      <header>Hacker News</header>
      <>
        { news.map((item, index) => <NewsItem key={`${item}#${index}`} id={item} />) }
      </>
    </div>
  );
}

export default App
