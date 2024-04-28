import useSWR from "swr";
import { Todo } from "../../types";
import { fetcher } from "./fetcher";

export const useTodoList = () => useSWR<Todo[]>("/todo-list", fetcher);