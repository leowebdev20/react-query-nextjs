import { Article } from "../pages"

export const ArticleCollection = ({ collection }: {collection: Article[]}) => {
    return (
        <>
        <div className="bg-blue-300 shadow rounded">
            <ul className="divide-y divide gray-200">
            {collection.map( article => 
                <li>
                    <a href={article.url} target="_blank" rel="noreferrer noopener" className="block hover:bg-blue-400">
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                                <div className="text-lg text-white font-bold">
                                 {article.title}
                                </div>
                                <div className="ml-2">
                                    {article.tag_list.map(tag => 
                                        <div className="ml-1 inline-flex px-2 text-xs rounded-full bg-green-400 text-gray-100">
                                            {tag}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
             )}
            </ul>
        </div>
        </>
    )
}