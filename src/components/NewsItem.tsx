import { useEffect, useState } from 'preact/hooks';
import { parseTime } from '../helpers';

import { getStoryById } from '../services';
import type { Story } from '../types';

type NewsItemProps = { id: number }

function NewsItem ({ id }: NewsItemProps) {
  const [story, setStory]= useState<Story|null>(null)
  const [isLoading, setIsLoading]= useState<boolean>(true)

  useEffect(() => {    
    (async () => {
      const story = await getStoryById(id)
      setIsLoading(false)
      setStory(story as any)
    })()
  }, [])

  // TODO: add spinner for isLoading and empty for !story
  if (isLoading || !story) return null;

  return (
    <div className="news-item">
      <h3>
        <a 
          href={`https://news.ycombinator.com/item?id=${id}`} 
          target="_blank"
          rel="noopener noreferrer"
        >
          {story.title}
        </a>
      </h3>
      <p>
        <span>
          {story.score} {story.score > 1 ? 'points' : 'point'}
        </span>
        <span>by {story.by}</span>
        <span>{parseTime(story.time)}</span>
      </p>
    </div>
  );
}

export default NewsItem
