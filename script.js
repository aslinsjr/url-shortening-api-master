console.log(axios)

const shorteningInput = document.querySelector("#short-link")
const shorteningButton = document.querySelector("#shorten-btn")


shorteningInput.addEventListener("change", (e) => {
    console.log(e.target.value)
})

let longUrl = "https://axios-http.com/ptbr/docs/post_example"

function shorteningUrl(longUrl) {
    axios.post("https://cleanuri.com/api/v1/shorten", {
        url: longUrl
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
    });
}

shorteningUrl(longUrl)