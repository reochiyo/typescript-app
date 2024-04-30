import useSWR from "swr";
import { MyTwitter } from "../../types";
import { fetcher } from "./fetcher";

export const useMyTwitterList = () => useSWR<MyTwitter[]>("/", fetcher);