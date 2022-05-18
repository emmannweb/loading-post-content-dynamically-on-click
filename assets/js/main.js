//fetch data
function fetchBookData(){
  fetch('http://localhost/fetchapi/wp-json/wp/v2/books')
  .then(function(response){
    return response.json();
  })
  .then(function(book){
    //console.log(book);
    appendData(book);
  })
  .catch(function(error){
    console.log(error);
  })
}


//manipulate the dom
function appendData(data){
  if (data){
      data.forEach((d, i)=>{
        //console.log("console data", d.title);
          var ulElement = document.getElementById('post_title');
          let li = document.createElement("li");
          // id single post type
          let Id = d.id;
          //console.log(Id);
          let html = ` <a class="btn btn-default btn-block" onclick="singlePostBook(${Id})">` + d.title.rendered + "</a>";
          li.innerHTML = html;
          ulElement.appendChild(li);
      })
  }
}


//load single post_type content
function singlePostBook(id){
  if (id){
    fetch(`http://localhost/fetchapi/wp-json/wp/v2/books/${id}`)
    .then(function(response){
      return response.json();
    })
    .then(function(singleBook){
      console.log("single book", singleBook);
      var post = document.querySelector('.post_content_render');
      post.innerHTML = singleBook.content.rendered;

    })
    .catch(function(error){
      console.log(error);
    })
  }
}

fetchBookData();
