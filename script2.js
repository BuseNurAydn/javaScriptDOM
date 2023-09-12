//ELEMAN EKLEME İŞLEMİ 

//1-ELEMANLARI SEÇİYORUZ
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const taskList = document.querySelector("#task-list");
const btnDeleteAll = document.querySelector("#btnDeleteAll");

//ÇALIŞMA : LİSTEDEKİ ELEMANLARI DİZİDEN SAYFAYA AKTARMA
const items = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"];

loadItems();

function loadItems() {
    items.forEach(function (item) {
        createItem(item);
    })
}
function createItem(text) {
    //li oluşturalım
    const li = document.createElement("li");
    const node = document.createTextNode(text);
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(node);   //BAĞLAMAK İÇİN


    // a oluşturalım
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';  //icon

    li.appendChild(a); //a'yı li'ye ekledik  (çocuğu)
    taskList.appendChild(li);  //li'yi ul'ye ekledik

}


//2-ELEMANLARI SEÇTİKTEN SONRA OLAYLARI YAZICAZ

form.addEventListener("submit", addNewItem);

function addNewItem(e) {    // veriyi yazıp enter tuşuna bastığımızda console da submit yazdı. Butona tıkladığımızda submit gerçekleşmedi.Bu yüzden Butonun type özelliğini submit yapıyoruz!!!
    if (input.value === '') {
        alert("Veri girişi yapınız!");
    }
    // console.log("submit"); 

    createItem(input.value);

    /*
        //3-LİSTEYE(ul) ELEMAN(li) EKLEMEK İÇİN ;
    
        //li oluşturalım
        const li = document.createElement("li");
        const node = document.createTextNode(input.value);
        li.className = "list-group-item list-group-item-secondary";
        li.appendChild(node);   //BAĞLAMAK İÇİN
    
    
        // a oluşturalım
        const a = document.createElement("a");
        a.classList = "delete-item float-right";
        a.setAttribute("href", "#");
        a.innerHTML = '<i class="fas fa-times"></i>';  //icon
    
        li.appendChild(a); //a'yı li'ye ekledik  (çocuğu)
        taskList.appendChild(li);  //li'yi ul'ye ekledik
    
    */

    e.preventDefault();  //SAYFA YENİLEMESİNİ ÖNLEMEK İÇİN
}


//ELEMAN SİLME İŞLEMİ

taskList.addEventListener("click", deleteItem);

function deleteItem(e) {
    if (e.target.className === "fas fa-times") {
        //Tıklandıktan sonraki hedef kısım iconun class nameyle aynıysa yani icona tıklandıysa demek
        if (confirm("Silmek istediğinize emin misiniz?")) {
            e.target.parentElement.parentElement.remove(); // li'ye ullaştık ve sildik

        }
    }

    e.preventDefault();
}


//TÜM ELEMANLARI SİLME İŞLEMİ

btnDeleteAll.addEventListener("click", deleteAllItems);

function deleteAllItems(e) {
    if (confirm("Tüm elemanları silmek istediğinize emin misiniz?")) {
        taskList.childNodes.forEach(function (item) {
            if (item.nodeType === 1) { //sadece li'leri ifade ediyoruz
                item.remove();
            }
        })

    }
    //   taskList.innerHTML="";   2.YOL

}
