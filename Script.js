

const bouton = document.querySelector('.bouton')
const DivImage = document.querySelector('.image')

bouton.addEventListener('click', function(){
    
    let inputDonne = document.querySelector('.input')
    let input = document.querySelector('.input').value.trim() 

    fetch(`https://dog.ceo/api/breed/${input}/images`)
    .then(response => {
        if(response.ok){
            response.json()
            .then(data => {                      
                    for (let i = 0; i < 8; i++) { 
                        console.log(data);                       
                        let image = document.createElement('img')
                        image.style.width = "320px"
                        image.style.height = "250px"
                        image.src = data.message[i]
                        DivImage.appendChild(image)  
                                      
                }                         
            })
        } else {
            let h2 = document.createElement("h2")
            h2.textContent = "Race de chien introuvable !"
            DivImage.appendChild(h2)
        }
    })    
})