'use strict';

let myForm = document.getElementById('foodForm');
let divEl = document.getElementById('table');

let tableHeadEl = document.createElement('thead');
divEl.appendChild(tableHeadEl);

let tableBodyEl = document.createElement('tbody');
divEl.appendChild(tableBodyEl);


let foodLovers = [];
let foodImage = ['shawarma.jpg','burger.jpg','pizza.jpg'];


function Food(customerName,foodType,img,price){
    this.customerName = customerName;
    this.foodType = foodType;
    this.img = 'img/' + img;
    this.price = price;

foodLovers.push(this);

}


function random(min,max){

        return Math.floor(Math.random() * (max - min + 1) + min); 
      }


      myForm.addEventListener('submit',handleSubmit);
     
       function handleSubmit(event) {

       event.preventDefault();

       let customerName = event.target.customerName.value;
       let foodType = event.target.foodType.value;
       let image ;
     
        if (foodType == 'shawarma')
        image = foodImage[0];
        if(foodType == 'burger' )
        image =foodImage[1];
        if(foodType === 'pizza' )
        image =foodImage[2];
      
        let price = random(20,50);

        
       new Food(customerName,foodType,image,price);

      
       render();
       settingItems();

       }
       
       let tableHead = ['Order Image','Order Details']

       function tableHeader(){
        
        let tableRow = document.createElement('tr');
        tableHeadEl.appendChild(tableRow);

        for (let i = 0; i < tableHead.length ; i++) {
            let tableData = document.createElement('td');
            tableRow.appendChild(tableData);
            tableData.textContent = `${tableHead[i]}`
            
        }

       }
       tableHeader();

       function render(){

            tableBodyEl.textContent = "";
            
            for (let i = 0; i < foodLovers.length; i++) {
                

                let tableRow1 = document.createElement('tr');
                tableBodyEl.appendChild(tableRow1);

                let tableData1 = document.createElement('td');
                tableRow1.appendChild(tableData1);

                let imgEl = document.createElement('img');
                tableData1.appendChild(imgEl);
                imgEl.setAttribute('src',foodLovers[i].img);


            let tableData2 = document.createElement('td');
            tableRow1.appendChild(tableData2);

            let pEl1 = document.createElement('p');
            tableData2.appendChild(pEl1);
            pEl1.textContent = 'Customer Name : ' + `${foodLovers[i].customerName}`

            let pEl2 = document.createElement('p');
            tableData2.appendChild(pEl2);
            pEl2.textContent = 'Food Type : ' + `${foodLovers[i].foodType}`


            let pEl3 = document.createElement('p');
            tableData2.appendChild(pEl3);
            pEl3.textContent ='Food Price : ' + `${foodLovers[i].price}`


            let pEl4 = document.createElement('p');
            tableData2.appendChild(pEl4);
            pEl4.textContent = 'X';
        
        
            pEl4.setAttribute('id', foodLovers[i].customerName);
            pEl4.addEventListener('click',removeItem);

            }

           }

          function settingItems(){

           let data = JSON.stringify(foodLovers);
           localStorage.setItem('food',data);

          }

          function gettingItems(){
              let stringObj = localStorage.getItem('food');
              let normalObj = JSON.parse(stringObj);

              if (normalObj !== null){

                  foodLovers = normalObj;
              }
              render();
          }


          function removeItem(event){

            let removeItem = event.target.id;

                
            for( let i = 0 ; i < foodLovers.length ; i++ ){
            if(foodLovers[i].customerName === removeItem){
                foodLovers.splice(i,1);
            }
            }

            
            settingItems();
            render();
            
            }
            

            btnDelete.addEventListener('click',clearAll);

            function clearAll(){

                document.getElementById('table').innerHTML = "";

        }
       
        gettingItems();



                

            

    



       
      

