import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Book } from '../book';
import {Button,Spinner} from '@chakra-ui/react'

const BooksComponent = () => {
    // const [books, setBooks] = useState<Book[] | undefined>();

    const { data, error, isLoading,refetch } = useQuery<Book[]>(['books_query'], async () => {
        const response = await fetch("http://localhost:4000/api/books");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // setBooks(data); // Set books state
        console.log(data)
        return data;
    });
    if (isLoading) return <Spinner/>;
    return (
        <>
        <div>
            <Button onClick={()=>refetch()}>REFETCH</Button>
            <h1>Books</h1>
            {data && data.map(book => (
                <div key={book.name}>
                    <h2>Book Id: {book.id}</h2>
                    <h2>Book name: {book.title}</h2>
                    <h2>Book title: {book.name}</h2>
                </div>
            ))}
        </div>
        </>
    );
};

export default BooksComponent;
