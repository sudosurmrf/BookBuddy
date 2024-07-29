const apiUrl = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

const fetchBooks = async () => {
  try {
    const response = await fetch(`${apiUrl}/books`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

const fetchBookDetails = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/books/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

const updateBookAvailability = async (id, available, token) => {
  try {
    const response = await fetch(`${apiUrl}/books/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ available }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the update book availability operation:', error);
    throw error;
  }
};

const register = async (firstname, lastname, email, password) => {
  try {
    const response = await fetch(`${apiUrl}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, lastname, email, password }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the register operation:', error);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the login operation:', error);
    throw error;
  }
};

const getUserDetails = async (token) => {
  try {
    const response = await fetch(`${apiUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch user details operation:', error);
    throw error;
  }
};

export { fetchBooks, fetchBookDetails, updateBookAvailability, register, login, getUserDetails };
