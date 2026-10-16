import type { book } from "@/types/book";

export async function GetBooks(limit: number = 20) {
    const response = await fetch(
        `https://openlibrary.org/search.json?title=the&limit=${limit}&page=1&fields=key,title,author_name,cover_i`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch books");
    }

    const data = await response.json();

    return data.docs as book[];
}