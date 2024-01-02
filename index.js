let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");


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

let projectExpand = true;
function expandProjects() {
    const getExpansion = () => projectExpand;
    const setExpansion = value => {
        projectExpand = value;
    }
    expand('work', getExpansion, setExpansion, seeMore);
}

function expand(className, getExpansion, setExpansion, seeMoreElement) {
    const elements = document.getElementsByClassName(className);
    if (getExpansion()) {
        for (element of elements) {
            element.classList.remove("vanish");
        }
        setExpansion(false);
        seeMoreElement.innerHTML = "See Less"
    } else {
        let count = 0;
        for (element of elements) {
            if (count > 2) {
                element.classList.add("vanish");
            }
            count = count + 1;
        }
        setExpansion(true);
        seeMoreElement.innerHTML = "See More"
    }    
}

let expandBlog = true;
function blogExpand(){
    const getExpansion = () => expandBlog;
    const setExpansion = value => {
        expandBlog = value;
    }
    expand('expandBlog', getExpansion, setExpansion, seeMoreBlogs);
}

function submitForm(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzlOHAY1jkrFBSCnA-SWcYp-sk3akDfyIxK6ol6yX1P6tiwgr_bfnUDVYmnxOhHTaS2/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    const submitButton = document.getElementById("submitButton")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      submitButton.innerHTML = "Submitting...";
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Your Message Was Sent Successfully!"
          setTimeout(function(){
              msg.innerHTML = ""
          }, 5000)
          form.reset();
          submitButton.innerHTML = "Submit";
        })
        .catch(error => console.error('Error!', error.message))
    })
  }

const sideMenu = document.getElementById("sideMenu");
function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}