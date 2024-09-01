var Quote=[
    {'quote':"“Resentment is like drinking poison and waiting for your enemies to die.”" ,
     'author':"--Nelson Mandela"   
    },
    {'quote':"“Be the change that you wish to see in the world.”",
     'author':"--Mahatma Gandhi"   
    },
    {'quote':"“A friend is someone who knows all about you and still loves you.”",
     'author':"--Elbert Hubbard"   
    },
    {'quote':"“Its not what happens to you, but how you react to it that matters.”",
     'author':"--Epictetus"   
    },
]
function getRondom(){
    var num = Math.floor(Math.random()*Quote.length);
    console.log("hello")
    document.getElementById('quote').innerHTML = Quote[num].quote;
    document.getElementById('author').innerHTML = Quote[num].author;
}