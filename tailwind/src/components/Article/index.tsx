import { IArticle } from "../../shares/interfaces/IArticle";

const Article = ({ title, text, tags, image, alt }: IArticle) => {
    return (
        <div
            className="flex gap-2 flex-col items-center p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-lg shadow-lg hover:sm:shadow-gray-800 hover:sm:shadow-lg"
        >
            <h3
                className="text-xl text-alura-200 dark:text-gray-200 font-bold">
                {title}
            </h3>
            <div className="hidden sm:flex gap-2 pr-5 w-full justify-end">
                {
                    tags.map(tag =>
                        <span
                            key={tag}
                            className="alura-tag"
                        >
                            {tag}
                        </span>)
                }
            </div>
            <div
                className="grid gap-1 "
            >
                {
                    text.map((content, index) =>
                        <p
                            className="text-alura-200 dark:text-gray-300 line-clamp-6 sm:line-clamp-none"
                            key={index}
                        >
                            {content}
                        </p>
                    )
                }
                {image && <img src={image} />}
                {image && alt && <span className="sr-only">{alt}</span>}
            </div>
        </div>
    )
};
export default Article;
