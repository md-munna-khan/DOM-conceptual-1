let quotesArray = [
    { queto: "To be or not to be, that is the question.", author: "William Shakespeare" },
    { queto: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { queto: "I think, therefore I am.", author: "René Descartes" },
    { queto: "The unexamined life is not worth living.", author: "Socrates" },
    { queto: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { queto: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
    { queto: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { queto: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { queto: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { queto: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
    { queto: "I have a dream.", author: "Martin Luther King Jr." },
    { queto: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { queto: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { queto: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { queto: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { queto: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { queto: "Get busy living or get busy dying.", author: "Stephen King" },
    { queto: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { queto: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
    { queto: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" }
];



document.getElementById("queto").addEventListener("click",function(){
    const p = document.getElementById("quote-p")
   const h2 = document.getElementById("name");
   const randomIndex = Math.floor(Math.random() * quotesArray.length)
   console.log(quotesArray [randomIndex])
   p.innerText = quotesArray [randomIndex].queto;
   h2.innerText = quotesArray [randomIndex].author;
})