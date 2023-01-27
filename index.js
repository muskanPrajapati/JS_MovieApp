let slideArray = [
    "https://www.pixel4k.com/wp-content/uploads/2018/09/x-men-days-of-future-past-banner_1536361949.jpg",
    "https://www.heyuguys.com/images/2011/11/Snow-White-and-the-Huntsman-Banner.jpg",
    "http://3.bp.blogspot.com/_15lMdxXGHfs/SwuerTSEGZI/AAAAAAAAASE/XZmCbRdDAUI/s1600/twilight+new+moon+banner.jpg",
    "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2021/03/godzilla-vs-kong-new-poster-scaled.jpg",
    "https://a-static.besthdwallpaper.com/mulan-sword-with-snowy-mountains-background-wallpaper-1920x1080-42030_48.jpg",
  ];

let container = document.getElementById("slideshow")
let i = 0;
setInterval(function(){
        if(i === slideArray.length){             
            i = 0;
        }
        let img = document.createElement("img");
        img.setAttribute("class", "slide")
        img.src = slideArray[i];
        container.innerHTML = null;
        container.append(img);
        i++
    },2000)    


const object =  [
    {
        mname :"twilight",
        releaseDate : "2009",
        poster: "http://3.bp.blogspot.com/_15lMdxXGHfs/SwuerTSEGZI/AAAAAAAAASE/XZmCbRdDAUI/s1600/twilight+new+moon+banner.jpg",
        rating: "5.3",
    },
    {
        mname :"Notebook",
        releaseDate : "2004",
        poster:"https://i.pinimg.com/originals/9f/76/d2/9f76d27077b39f3a1af5692bab09d67d.jpg",
        rating: "8.4",
    },
    {
        mname: "Midway",
        releaseDate: "2020",
        poster:
          "https://resizing.flixster.com/BuUaTkNqYYRsQB8wRhC9JtyCNAc=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzkxYmU1Mjk4LTUwZDMtNGRiNi04NjMxLTU3YzI0ZDQ3N2Q2ZC53ZWJw",
        rating: "8.2",
      },
      {
        mname: "Logan",
        releaseDate: "2017",
        poster:
          "https://lumiere-a.akamaihd.net/v1/images/logan_584x800_9a5af33a.jpeg?region=0%2C0%2C584%2C800",
        rating: "9.9",
      },
      {
        mname: "Spider- Man: Homecoming",
        releaseDate: "2017",
        poster:
          "https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_.jpg",
        rating: "9.1",
      },
      {
        mname: "The Dark Knight(2008)",
        releaseDate: "2008",
        poster:
          "https://images-na.ssl-images-amazon.com/images/I/91ebheNmoUL._RI_.jpg",
        rating: "9.2",
      },
      {
        mname: "Seven Samurai",
        releaseDate: "1956",
        poster: "https://flxt.tmsimg.com/assets/p5588_p_v10_av.jpg",
        rating: "10",
      },
      {
        mname: "Assassin",
        releaseDate: "2018",
        poster:
          "https://assets.mubicdn.net/images/notebook/post_images/19893/images-w1400.jpg?1449196747",
        rating: "10",
      },
      {
        mname: "Avengers: Infinity War",
        releaseDate: "2019",
        poster:
          "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/13/1522099265-avengers3.jpg?resize=480:*",
        rating: "8.7",
      },
      {
        mname: "Matrix Revolution",
        releaseDate: "2003",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        rating: "8",
      },
      {
        mname: "Deadpool",
        releaseDate: "2016",
        poster:
          "https://i.pinimg.com/originals/d3/e0/38/d3e038c795b25d7a78a3cfe9c13bd2d2.jpg",
        rating: "8.7",
      },
      {
        mname: "The Sixth Sense",
        releaseDate: "1999",
        poster: "https://flxt.tmsimg.com/assets/p23611_p_v10_ag.jpg",
        rating: "8.5",
      },
      {
        mname: "The Lord of the Rings",
        releaseDate: "2001",
        poster:
          "https://images-na.ssl-images-amazon.com/images/I/A1yy50fuVnL._RI_.jpg",
        rating: "9.4",
      },
      {
        mname: "Parasite",
        releaseDate: "2019",
        poster: "https://i.ytimg.com/vi/w_0KJAzyUJc/maxresdefault.jpg",
        rating: "9.5",
      },
      {
        mname: "Thor: Ragnarok",
        releaseDate: "2017",
        poster:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F09%2Fcr_krackle_thor_v2_sm-2000.jpg",
        rating: "9.3",
      },
      {
        mname: "X - Men: Days of Future",
        releaseDate: "2014",
        poster: "https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",
        rating: "8.9",
      },
  
      {
        mname: "A Beautiful Mind",
        releaseDate: "2001",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        rating: "8.2",
      },
      {
        mname: "Venom",
        releaseDate: "2018",
        poster:
          "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/venom_onesheet_1400x2100_rated.png?itok=0tO6umMg",
        rating: "8.4",
      },
  
      {
        mname: "Tenet",
        releaseDate: "2021",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        rating: "9.8",
      },
      {
        mname: "Ip Man",
        releaseDate: "2008",
        poster:
          "http://www.nerdly.co.uk/wp-content/uploads/2017/01/ip-man-2-dvd.jpg",
        rating: "8.6",
      },
]

if (localStorage.getItem("movieData") == null) {
    localStorage.setItem("movieData", JSON.stringify(object));  
}

let movieData = JSON.parse(localStorage.getItem("movieData"));

for(let i = 0; i<movieData.length; i++) {
    let name = movieData[i].mname;
    let date = movieData[i].releaseDate;
    let rating = movieData[i].rating;
    let poster = movieData[i].poster;
    showData(name, date, rating,poster);
}

function showData(name, date, rating, poster) {
    let movieGrid = document.getElementById("movieGrid");
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let img = document.createElement("img");
    img.setAttribute("class", "image")
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    img.src = `${poster}`;
    p1.innerText = `Movie Name : ${name}`;
    p2.innerText = `Releasing Date : ${date}`
    p3.innerText = `Movie Rating : ${rating}`;

    card.append(img, p1, p2, p3);
    movieGrid.append(card)
}

// sort function
function dRating(){
  console.log("defult clicked");
  let movieData = JSON.parse(localStorage.getItem("movieData"));

  let movieGrid = document.getElementById("movieGrid");
  movieGrid.innerHTML= null;

    for(let i = 0; i<movieData.length; i++) {
        let name = movieData[i].mname;
        let date = movieData[i].releaseDate;
        let rating = movieData[i].rating;
        let poster = movieData[i].poster;
        showData(name, date, rating,poster);
     }
}

function sortHigh(){
  console.log("H TO L CLICKED");
  let high = JSON.parse(localStorage.getItem("movieData"));

    high = high.sort(function (a, b) {
      return b.rating - a.rating;
    });

    let movieGrid = document.getElementById("movieGrid");
    movieGrid.innerHTML= null;
    for(let i = 0; i<high.length; i++) {
      let name = high[i].mname;
      let date = high[i].releaseDate;
      let rating = high[i].rating;
      let poster = high[i].poster;
      showData(name, date, rating, poster);
  }
}

function sortLow(){
  console.log("L TO H clicked");
  let low = JSON.parse(localStorage.getItem("movieData"));

    low = low.sort(function (a, b) {
      return a.rating - b.rating;
    });

    let movieGrid = document.getElementById("movieGrid");
    movieGrid.innerHTML= null;

    for(let i = 0; i<low.length; i++) {
      let name = low[i].mname;
      let date = low[i].releaseDate;
      let rating = low[i].rating;
      let poster = low[i].poster;
      showData(name, date, rating,poster);
  }
}
