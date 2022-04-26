import React, { useState } from 'react';
import About from './components/about';
import Nav from './components/Nav';
import Gallary from './components/Gallary';
import ContactForm from './components/Contact';

//initial value of contactSelected is false to prevent contact form from showing when user loads page. Gallery will be the first thing a user sees 
function App() {
  
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects' },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
      <div>
        <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Nav>
        <main>
          {!contactSelected ? (
            <>
            <Gallary currentCategory={currentCategory}></Gallary>
            <About></About>
            </>
          ) : (
              <ContactForm></ContactForm>
          )}
        </main>
      </div>
  );
}

export default App;
