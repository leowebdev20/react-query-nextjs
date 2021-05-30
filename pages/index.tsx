import Head from 'next/head'
import { ReactQueryCacheProvider, QueryCache, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import {ArticleCollection} from '../components/ArticleCollection'

export interface Article {
  title: string
  tag_list: string[]
  url: string
}

const queryCache = new QueryCache();
// const queryCache = new QueryClient({ queryCache });
// const queryClient = new QueryClient()

const toJSON = ( _: Response ) => _.json();

const fetcher = () => fetch('https://dev.to/api/articles').then(toJSON);

export default function Home() {
  const { data: articles, isLoading, error} = useQuery<Article[], Error>('articles', fetcher);

  if (isLoading) return 'Loading...';
  if (error) return error.message;


  return (
    <>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="max-w-4xl mx-auto mt-4">
      <ArticleCollection collection={articles}/>
    </div>
    </ReactQueryCacheProvider>
    <ReactQueryDevtools/>
    </>
  )
}