import { FC } from "react";
import { useMyTwitterList } from "../api";

export const Home: FC = () => {
    const { data: MyTwitterList, error, isLoading } = useMyTwitterList();

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    return (
        <div>
            <ul>
            {MyTwitterList?.map((item) => (
                <li key={item.id}>
                    <label htmlFor={String(item.id)}>{item.text}</label>
                </li>
            ))}
            </ul>
        </div>
    );
};
