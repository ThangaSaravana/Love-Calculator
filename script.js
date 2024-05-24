
let butt = document.querySelector('button')
butt.addEventListener("click",check)

function check(){

    let words = document.getElementById('text').value
    let crtname = words.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    console.log(crtname)

    let result = '';
    let imgurl = '';

    if(crtname==='lavanya' || crtname==='rlavanya'){
            result= "My Love for you is 110%"
            imgurl= "Saravana.jpeg"
    }
    else if(crtname === 'umasanthiya'){
        result= "I hate you"
    }
    else if(crtname === 'uma'){
        result= "I hate you"
    }
    else if(crtname === 'santhiya'){
        result= "I hate you"
    }
    else if(crtname === 'prabha'){
        result= "I hate you"
    }
    else if(crtname === 'prabhavathy'){
        result= "I hate you"
    }
    else if(crtname === 'merlin'){
        result= "I hate you"
    }
    else if(crtname === 'merlinsantherviolet'){
        result= "I hate you"
    }
    else{
        result =" love you more than 50%"
    }
  document.getElementById('result').textContent=result;


let imgcontainer = document.getElementById('imageContainer')
imgcontainer.innerHtml='';

    if(imgurl){
        let img= document.createElement('img')
        img.src=imgurl;
        img.alt="saravanas image"
        imgcontainer.appendChild(img)
    }
}


// function check() {
//     let words = document.getElementById('text').value;
//     let crtname = words.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     console.log(crtname)

//     let result = '';

//     if (crtname === 'lavanya') {
//         result = "My Love for you is 110%";
//     } else if (crtname === 'umasanthiya') {
//         result = "I hate you";
//     } else if (crtname === 'uma') {
//         result = "I hate you";
//     } else if (crtname === 'santhiya') {
//         result = "I hate you";
//     } else {
//         result = "love you more than 50%";
//     }

//     document.getElementById('result').textContent = result;
// }


    // Display the image if imageUrl is set
    // let imageContainer = document.getElementById('imageContainer');
    // imageContainer.innerHTML = ''; // Clear previous image
    // if (imageUrl) {
    //     let img = document.createElement('img');
    //     img.src = imageUrl;
    //     img.alt = 'Result Image';
    //     imageContainer.appendChild(img);
    // }



