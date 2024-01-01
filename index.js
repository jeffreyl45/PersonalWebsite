var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");


// control the tab changes under the About Me section
function opentab(tabName) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

var projectExpand = true;
function expandProjects(){
    var projects = document.getElementsByClassName("work");
    if (projectExpand === true){
        for (project of projects) {
            project.classList.remove("vanish");
        }
        projectExpand = false;
        seeMore.innerHTML = "See Less"
    } else {
        var count = 0;
        for (project of projects) {
            if (count > 2) {
                project.classList.add("vanish");
            }
            count = count + 1;
        }
        projectExpand = true;
        seeMore.innerHTML = "See More"
    }
}

var expandBlog = true;
function blogExpand(){
    var blogs = document.getElementsByClassName("blog");
    if (expandBlog === true){
        for (blog of blogs) {
            blog.classList.remove("vanish");
        }
        expandBlog = false;
        seeMoreBlogs.innerHTML = "See Less"
    } else {
        var count = 0;
        for (blog of blogs) {
            if (count > 2) {
                blog.classList.add("vanish");
            }
            count = count + 1;
        }
        expandBlog = true;
        seeMoreBlogs.innerHTML = "See More"
    }
}

function submitForm(){


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzlOHAY1jkrFBSCnA-SWcYp-sk3akDfyIxK6ol6yX1P6tiwgr_bfnUDVYmnxOhHTaS2/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Your Message Was Sent Successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
}
