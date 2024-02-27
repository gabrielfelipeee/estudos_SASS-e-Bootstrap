import { useEffect, useState } from "react";

import { IArticle } from "../../shares/interfaces/IArticle";

import Article from "../Article";


const ArticleList = () => {
    const [data, setData] = useState<IArticle[]>([]);


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/cardozov/alura-newsletter/aula3/articles.json')
            .then(res => res.json())
            .then((data: IArticle[]) => setData(data))
    }, []);

    return (
        <div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-2xl m-auto lg:max-w-[1000px]"
        >
            {
                data.map((article, index) => <Article key={index} {...article} />)
            }
        </div>
    )
};
export default ArticleList;
