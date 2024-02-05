import React, { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

function BookSearch() {
    const [bookName, setBookName] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false); // Added loading state
    const [currentPage, setCurrentPage] = useState(0);
    const resultsPerPage = 10;

    const handleSearch = async (page = 0) => {
        setLoading(true); // Start loading
        const startIndex = page * resultsPerPage;
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(bookName)}&startIndex=${startIndex}&maxResults=${resultsPerPage}`
            );
            let books = response.data.items ? response.data.items.map((item, index) => ({
                ...item,
                isExpanded: false,
                // Use the map function's index directly for numbering, adjusted by 1 to start from 1 instead of 0
                index: index + 1,
            })) : [];
    
            // Sort the books array alphabetically by title
            books = books.sort((a, b) => {
                const titleA = a.volumeInfo.title.toUpperCase(); // ignore upper and lowercase
                const titleB = b.volumeInfo.title.toUpperCase(); // ignore upper and lowercase
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }
    
                // titles must be equal
                return 0;
            });
    
            setSearchResults(books);
            setCurrentPage(page);
        } catch (error) {
            console.error('Error fetching data:', error.message);
            setSearchResults([]);
        } finally {
            setLoading(false); // End loading
        }
    };
    

    const toggleExpand = (index) => {
        const updatedResults = searchResults.map((item, idx) => ({
            ...item,
            isExpanded: idx === index ? !item.isExpanded : item.isExpanded,
        }));
        setSearchResults(updatedResults);
    };

    const handleNextPage = () => {
        handleSearch(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            handleSearch(currentPage - 1);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(currentPage);
        }
    };

    return (
        <Container style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <h1>Book Search</h1>
                <input
                    type="text"
                    placeholder="Enter a book name"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch(currentPage)}
                    style={{ marginBottom: '10px' }}
                />
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button onClick={() => handleSearch(currentPage)} style={{width: '20%'}}>Search</Button>
                    <Button onClick={handlePreviousPage} disabled={currentPage === 0 }style={{width: '20%'}}>Previous</Button>
                    <Button onClick={handleNextPage} disabled={searchResults.length < resultsPerPage} style={{width: '20%'}}>Next</Button>
                </div>
            </div>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <Spinner animation="border" />
                </div>
            ) : (
                <Row xs={1} md={2} lg={3} className="g-4">
                    {searchResults.map((item, index) => (
                        <Col key={index}>
                            <Card style={{ marginBottom: '1rem', backgroundColor: '#f7fbff' }} onClick={() => toggleExpand(index)}>
                                <Card.Img variant="top" src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title} style={{ height: '20%', objectFit: 'contain' }} />
                                <Card.Body >
                                    <Card.Title>{`${item.index}. ${item.volumeInfo.title}`}</Card.Title>
                                    <Card.Text>
                                        {item.volumeInfo.authors && `Author(s): ${item.volumeInfo.authors.join(', ')}`}
                                        {item.isExpanded && (
                                            <>
                                                <br />
                                                <Card.Text>{item.volumeInfo.description}</Card.Text>
                                                <Card.Text>Published Date: {item.volumeInfo.publishedDate}</Card.Text>
                                                <Card.Text>Genre: {item.volumeInfo.categories?.join(', ')}</Card.Text>
                                            </>
                                        )}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default BookSearch;