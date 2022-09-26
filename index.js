console.log("Working");
let quoteIndex=0;
let quotes=[
    {quoteName:"I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.",writer:"-Ray Kroc",href:"https://en.wikipedia.org/wiki/Ray_Kroc",imagePath:"Images/Ray-Kroc.jpg"},

    {quoteName:"Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.",writer:"-Michelle Obama",href:"https://en.wikipedia.org/wiki/Michelle_Obama",imagePath:"Images/Michelle_Obama.jpg"},

    {quoteName:"The greatest glory in living lies not in never falling, but in rising every time we fall.",writer:"-Nelson Mandela",href:"https://en.wikipedia.org/wiki/Nelson_Mandela",imagePath:"Images/Nelson_Mandela.jpg"},

    {quoteName:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",writer:"-Steve Jobs",href:"https://en.wikipedia.org/wiki/Steve_Jobs",imagePath:"Images/Steve_Jobs.jpg"},

    {quoteName:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",writer:"-James Cameron",href:"https://en.wikipedia.org/wiki/James_Cameron",imagePath:"Images/James Cameron.jpg"},

    {quoteName:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",writer:"-Mother Teresa",href:"https://en.wikipedia.org/wiki/Mother_Teresa",imagePath:"Images/Mother_Teresa.jpg"},

    {quoteName:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",writer:"-Benjamin Franklin",href:"https://en.wikipedia.org/wiki/Benjamin_Franklin",imagePath:"Images/Benjamin Franklin.jpg"},

    {quoteName:"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",writer:"-Helen Keller",href:"https://en.wikipedia.org/wiki/Helen_Keller",imagePath:"Images/Helen Keller.jpg"},

    {quoteName:"Only a life lived for others is a life worthwhile.",writer:"-Albert Einstein",href:"https://en.wikipedia.org/wiki/Albert_Einstein",imagePath:"Images/Albert Einstein.jpg"},

    {quoteName:"Life itself is the most wonderful fairy tale.",writer:"-Hans Christian Andersen",href:"https://en.wikipedia.org/wiki/Hans_Christian_Andersen",imagePath:"Images/HC Anderson.jpg"},

    {quoteName:"Anger is the ultimate destroyer of your own peace of mind.",writer:"-Dalai Lama",href:"https://en.wikipedia.org/wiki/Dalai_Lama",imagePath:"Images/Dalai Lama.jpg"},

]
setInterval(() => {

    //changing the quote
    let quote=document.getElementById('quote');
    quote.innerHTML=quotes[quoteIndex].quoteName;

    //changing the writer name
    let writer=document.getElementById('link_writer');
    writer.innerHTML=quotes[quoteIndex].writer;

    //changing writer's biography link
    link_writer.href=quotes[quoteIndex].href;

    //changing the image
    let imag=document.querySelector('img');
    imag.src=quotes[quoteIndex].imagePath;
    if(quoteIndex<=9){
        quoteIndex=quoteIndex+1;
    }
    else{
        quoteIndex=0;
    }
}, 4000);