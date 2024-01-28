const submitButton = document.getElementById("submit")
const upButton = document.getElementById("up")
const downButton = document.getElementById("down")


let form = document.getElementById('form')
let thumbnailcontainer = document.getElementById("thumbnail-container")
let displayImage = document.getElementById("display")
let currentImageIndex = 0
let img = document.getElementById("wallpaper")

let wallpaper = {
    url: "https://images.unsplash.com/photo-1534211698458-e2be12c1a94c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"
}

let images = [
    {
        url: "https://images.unsplash.com/photo-1542650834-a6d409a09ae9?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw0Nzg1OTA0fHxlbnwwfHx8fHw%3D",
        alt: "image of a flowers in a vase"
    },
    {
        url: "https://images.unsplash.com/photo-1628927124608-d7d7ea5ea34a?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw0Nzg1OTA0fHxlbnwwfHx8fHw%3D",
        alt: "image of a florist worktop "
    },
    {
        url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0d29ya3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "image of a painting:flowers and fruit in a vase"
    },
    {
        url: "https://images.unsplash.com/photo-1649169092695-48182e8726fa?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NDc4NTkwNHx8ZW58MHx8fHx8",
        alt: "image of a bouqete of flowers "
    },
]

const createThumbnails = (arrayofimages) => {
    arrayofimages.forEach(image => {
        let imgElement = document.createElement("img")
        imgElement.src = image.url
        imgElement.alt = image.alt
        imgElement.addEventListener("click", () => (
            createDisplayImg(image)
        ))
        thumbnailcontainer.appendChild(imgElement)
    })

}


function createDisplayImg(image) {
    displayImage.innerHTML = ""

    let displayContainer = document.createElement("img")
    displayContainer.src = image.url
    displayContainer.alt = image.alt

    displayImage.appendChild(displayContainer)

}
createThumbnails(images)




up.addEventListener('click', function () {
    // selectNextImage(1)
    selectImage[1]
})

down.addEventListener('click', function () {
    // selectNextImage(-1)
    selectImage[-1]
})

function selectImage(index) {
    currentImageIndex += index

    if (currentImageIndex >= images.length) currentImageIndex = 0
    if (currentImageIndex < 0) currentImageIndex = images.length - 1
    console.log(currentImageIndex)
    updateDisplayImage(images[currentImageIndex])
}

// selectNextImage()




// async function search(queryParam) {
//     let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=RZVyreg1HafjJgNmUWlqtyEAGvi4SkQ4qLRN6bvYjnY`)
//     console.log = (response)
//     let data = await response.json()

//     let img = document.createElement("img")
//     img.src = data.results[0].urls.raw
//     img.alt = image.alt_description

//     imagecontainer.appendChild(img)
//     annouceAltText(image.alt_description)
// }

// function createImages(image) {
//     imagecontainer.innerHTML = ''
//     let imgTag = document.createElement('img')
//     imgTag.src = image.urls.raw
//     imgTag.alt = image.alt_description // alt tag for screenreaders

//     imagecontainer.appendChild(imgTag)
//     annouceAltText(image.alt_description)

// }

// function annouceAltText(altText) {
//     announcer.textContent = `New image displayed: ${altText}`
// }

// submitButton.addEventListener('click', function () {
//     if (images.length > 0) {
//         currentImgIndex = Math.floor(Math.random() * images.length);
//         createImages(images[currentImgIndex])
//         // console.log("submit")
//     }
// })




