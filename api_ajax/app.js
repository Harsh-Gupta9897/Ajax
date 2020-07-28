//load Jokes

document.getElementById('get-jokes').addEventListener('click',getJokes);

function getJokes(e){
    const number  = document.querySelector('input[type="number"]').value;    
    const xhr = new XMLHttpRequest();
    const url = "";

    // open method for xhr
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

    //optional -used for spinners/loaders

    xhr.onprogress = function(){
        console.log('progres')
        document.getElementById('Jokes').innerHTML='Loading....'
    }


    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);

            let output ='';
            if(response.type=='success'){
            for(i=0;i<number;i++){
                output+=`
                <li>Joke: ${response.value[i].joke}</li>
                 `;
                }
            }
            else{
                output += '<li>Something went wrong</li>'
            }
        
            document.getElementById('Jokes').innerHTML= output;

            console.log(response.value[0].joke);

        }
    }

    xhr.send();
    // Http status
    //  200: ok
    //  403: forbidden
    // 404 : Not found
    e.preventDefault();
}





