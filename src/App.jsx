import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'


function App() {
  const [bookTitles, setBookTitles] = useState([]);
  const [bookId, setBookId] = useState('');
  const [userNameInfo, setUserNameInfo] = useState('');


  useEffect(() => {
    const apiCall = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`)
      const responseJson = await response.json();
      setBookTitles(responseJson.books.map(book => book.title));
      console.log(bookTitles);
    }
    apiCall();
  },[])


 

  return (
    <>
     
      <Routes>
        <Route to="/" element='Home'>Home</Route>
      </Routes>
     <ul>
      {bookTitles.map((title, index) => (
        <li key={index}>{title}</li>
      ))}
     </ul>
    </>
  );
}

export default App
