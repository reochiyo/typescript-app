export const fetcher = async (path: string) => {
    try {
        const res = await fetch("/api" + path);
        return res.json();
    } catch (error) {
        alert(error);
    }
};