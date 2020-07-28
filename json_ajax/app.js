document.getElementById('button1').addEventListener('click',loadCustomer);

function loadCustomer(e){
    
    const xhr = new XMLHttpRequest();

    // open method for xhr
    xhr.open('GET','customer.json',true);


    //optional -used for spinners/loaders

    xhr.onprogress = function(){
        console.log('progres')
        document.getElementById('Customer').innerHTML='Loading....'
    }

    // xhr.onreadystatechange = function(){
    //     console.log('ReadyState' ,xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onload = function(){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);
            document.getElementById('Customer').innerHTML= customer.name;

            console.log(this.responseText);

        }
    }

xhr.send();
    // Http status
    //  200: ok
    //  403: forbidden
    // 404 : Not found
}


//load Customers

document.getElementById('button2').addEventListener('click',loadCustomers);

function loadCustomers(e){
    
    const xhr = new XMLHttpRequest();

    // open method for xhr
    xhr.open('GET','customers.json',true);


    //optional -used for spinners/loaders

    xhr.onprogress = function(){
        console.log('progres')
        document.getElementById('Customers').innerHTML='Loading....'
    }

    // xhr.onreadystatechange = function(){
    //     console.log('ReadyState' ,xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);

            let output ='';

            customers.forEach(
                (customer)=> {
                    output+=`
                    <ul>
                    <li>Id: ${customer.id}</li>
                    <li>NAME: ${customer.name}</li>
                    <li>COMP     xz ANY: ${customer.company}</li>
                    <li>PHONE: ${customer.phone}</li>
                    </ul>
                    `;
                }
            );
        
            document.getElementById('Customers').innerHTML= output;

            console.log(this.responseText);

        }
    }

xhr.send();
    // Http status
    //  200: ok
    //  403: forbidden
    // 404 : Not found
}





