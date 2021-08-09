import { useEffect } from 'preact/hooks';

import NewsItem from './components/NewsItem';
import { useGlobalState } from './hooks';
import { getNewStories } from './services';

function App () {
  const [globalState, snapState] = useGlobalState()

  const onScroll = () => {
    // isPassMaxOffsetHeightValue --condition
    if (window.innerHeight + window.pageYOffset + 200 >= document.body.offsetHeight) loadMoreNews();
  };

  const loadMoreNews = (size = 10) => {
    const nextNews = globalState.allNews.splice(0, size)
    globalState.displayedNews.push(...nextNews)
  };

  useEffect(() => {   
    (async () => {
      // fetch all news
      const allNewsRefs = await getNewStories();
      console.log('----<', allNewsRefs);
      
      // save all news to state
      globalState.allNews.push(...(allNewsRefs as number[]))
      // dispaly only 20 news
      loadMoreNews(20);
      // quick way to handle the scroll event to display more 10 news.
      window.addEventListener('scroll', onScroll);
    })()
  }, [])

  // TODO: add new component named News and render all news from global state :D!
  return (
    <div className="container">
      <header>Hacker News</header>
      <>
        { snapState.displayedNews.map((item, index) => <NewsItem key={`${item}#${index}`} id={item} />) }
      </>
    </div>
  );
}

export default App
