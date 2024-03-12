function processSpoilers() {
    let optionsString = Cookies.get('options') ?? "{}"
    let optionsJson = JSON.parse(optionsString)

    Array.from(document.querySelectorAll("[data-spoiler]")).filter(spoilerFilter).forEach(createSpoiler)
    
    function spoilerFilter(element) {
        return optionsJson?.content_warnings?.includes(element.getAttribute("data-spoiler")) ?? false;
    }
}


function createSpoiler(element){
    {

        let type = element.tagName
        if(type=="IMG") type = "P"

        let spoiler = document.createElement(type)
        let content = document.createElement("span")

        content.innerHTML = element.innerHTML
        if(element.tagName == "IMG") content.append(element.cloneNode(true))
        spoiler.append(content)
        spoiler.classList = element.classList
        spoiler.classList.add("spoiler")
        spoiler.classList.add("hidden")
        spoiler.setAttribute("data-spoiler",element.getAttribute("data-spoiler"))
        spoiler.setAttribute("tab-index", 0);
        spoiler.addEventListener("click", handleSpoiler)

        element.replaceWith(spoiler)
    }
}

function handleSpoiler(evt) {
    const wrapper = evt.currentTarget;
    const content = wrapper.children[0];
  
    wrapper.classList.toggle("hidden");
  
    if (wrapper.classList.contains("hidden")) {
      wrapper.setAttribute("aria-expanded", false);
      wrapper.setAttribute("role", "button");
      wrapper.setAttribute("aria-label", `Content Contains: ${wrapper.getAttribute("data-spoiler")}`);
  
      content.setAttribute("aria-hidden", true);
    } else {
      wrapper.setAttribute("aria-expanded", true);
      wrapper.setAttribute("role", "presentation");
      wrapper.removeAttribute("aria-label");
  
      content.setAttribute("aria-hidden", false);
    }
  }

window.addEventListener("DOMContentLoaded",processSpoilers)