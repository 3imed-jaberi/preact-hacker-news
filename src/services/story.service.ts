import type { Story } from './../types';

/**
 * public hacker-news api
 * @link https://github.com/HackerNews/API
 */
const HACKER_NEWS_API_ENDPOINT = 'https://hacker-news.firebaseio.com/v0';

/**
 * returns the list of new stories' ids from hackernews
 */
export async function getNewStories(): Promise<number[]|null> {
	try {
		const response = await fetch(`${HACKER_NEWS_API_ENDPOINT}/newstories.json`);
		const json = await response.json();
		return json;
	} catch (error) {
		console.error(error);
		return null;
	}
}

/**
 * returns the hackernews story for the given id
 * @param {number} id
 */
export async function getStoryById(id: number): Promise<Story|null> {
	try {
		const response = await fetch(`${HACKER_NEWS_API_ENDPOINT}/item/${id}.json`);
		const json = await response.json();
		return json;
	} catch (error) {
		console.error(error);
		return null;
	}
}
