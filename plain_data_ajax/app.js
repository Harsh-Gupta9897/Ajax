document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    
    const xhr = new XMLHttpRequest();

    // open method for xhr
    xhr.open('GET','data.txt',true);


    //optional -used for spinners/loaders

    xhr.onprogress = function(){
        console.log('progres')
        document.getElementById('output').innerHTML='Loading....'
    }

    // xhr.onreadystatechange = function(){
    //     console.log('ReadyState' ,xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById('output').innerHTML=this.responseText

            console.log(this.responseText);

        }
    }

xhr.send();
    // Http status
    //  200: ok
    //  403: forbidden
    // 404 : Not found
}


