import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

@Injectable()
export class NewsService {
    protected readonly feedUrls = [
        'https://www.google.com/alerts/feeds/01128833485371970034/10823445178016852784',
        'https://www.google.com/alerts/feeds/01128833485371970034/10995770086629020934',
        'https://www.google.com/alerts/feeds/01128833485371970034/7498494315114146445',
    ];

    async fetchFeeds(): Promise<any[]> {
        const newsList = [];
        for (const url of this.feedUrls) {
            try {
                const response = await fetch(url);
                const xml = await response.text();
                const parsedData = await this.parseXML(xml);
                newsList.push(...parsedData);
            } catch (error) {
                console.error(`Failed to fetch or parse feed from ${url}:`, error);
            }
        }
        return this.sortByPublished(newsList);
    }

    async parseXML(xml: string): Promise<any[]> {
        const result = await parseStringPromise(xml);
        const entries = result?.feed?.entry;
        if (!Array.isArray(entries)) {
            throw new Error('Invalid RSS feed format');
        }
        return entries.map((entry: any) => ({
            id: entry.id[0],
            title: entry.title[0]._,
            link: entry.link[0].$.href,
            published: entry.published[0],
            content: entry.content[0]._,
        }));
    }

    sortByPublished(newsList: any[]): any[] {
        return newsList.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
    }
}