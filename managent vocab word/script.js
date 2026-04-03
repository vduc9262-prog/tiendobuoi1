
let words = [
 {
    id: "1",
    word: "Cat",
    meaning: "mèo",
    categoryId: "animal",
    example: "The cat is sleeping on the sofa."
  },
  {
    id: "2",
    word: "Dog",
    meaning: "chó",
    categoryId: "animal",
    example: "My dog loves playing in the park."
  },
  {
    id: "3",
    word: "Tree",
    meaning: "cây",
    categoryId: "plant",
    example: "This tree is very tall."
  },
  {
    id: "4",
    word: "Flower",
    meaning: "hoa",
    categoryId: "plant",
    example: "She picked a beautiful flower."
  }
];


const Savedata = () => {
    localStorage.setItem("listwords",JSON.stringify(words)) || [];
}


const loadData = () => {
    const saved = localStorage.getItem("listwords");
    if (saved) {
        words = JSON.parse(saved);
    }
};






const renderWords = document.getElementById("renderWords");

const renderTable = () => {
  let html = ""

  words.forEach((item) => {
    html += `
      <tr>
        <td class="word">${item.word}</td>
        <td class="meaning">${item.meaning}</td>
        <td class="category">${item.categoryId}</td>
        <td class="actions">
          <button onclick="openEdit('${item.id}')" class="btn-edit" id="Edit" >Edit</button>
          <button onclick="openDelete('${item.id}')" class="btn-delete" id="Popupdelete">Delete</button>
        </td>
      </tr>
    `

  });
 renderWords.innerHTML = html;
 Savedata();
};

renderTable();



    let modal = document.getElementById('PopAdd');
    let addNewBtn = document.getElementById("btn-add");
    let closeBtn = document.getElementById('closeBtn');
    let cancelBtn = document.getElementById("cancelBtn");
    let saveBtn = document.getElementById('saveBtn');
    let modalTitle = document.getElementById('modalTitle');


const close_1 = () => {
    modal.style.display = 'none';
};

addNewBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener('click', close_1);
cancelBtn.addEventListener('click', close_1);


    let SaveAdd = document.getElementById("saveBtn");
    let CategoryAdd = document.getElementById("categoryInput")
    let NameAdd = document.getElementById("wordInput");
    let DeripAdd = document.getElementById("meaningInput");


SaveAdd.addEventListener("click",(e)=> {
e.preventDefault();
const addItems = () => {
  let NameInput = NameAdd.value.trim();
  let DrepInput = DeripAdd.value.trim();
  let CategInput = CategoryAdd.value.trim();

  let NewWords = {
    id: Date.now(),
    word:NameInput,
    meaning:DrepInput,
    categoryId:CategInput,
  }

  words.push(NewWords);
  Savedata();
  renderTable();

};

addItems();



})




  let deleteModal = document.getElementById("popUpDeleteWord");
  let deletePo = document.getElementById("Popupdelete");
  let confirmBtn = document.getElementById("confirmDeleteBtn");
  let closeDe = document.getElementById("closeDeleteBtn");
  let cancelDele = document.getElementById("cancelDelete")

 const close_2 = () => {
    deleteModal.style.display = 'none';
};

deletePo.addEventListener("click", () => {
   deleteModal.style.display = "flex";
});

cancelDele.addEventListener('click', close_2);
closeDe.addEventListener('click', close_2);


   let buttonX = document.getElementById("close_edit");
   let buttonCancel = document.getElementById("btn_cancelEditWord");
   let UpdateAll =document.getElementById("popUpEdit");
   let boxUpdate = document.getElementById("modal_box");
   let Edit =document.getElementById("Edit");
   let inputWord = document.getElementById("editInputWord");
   let inputMeaning = document.getElementById("editInputMeaning");
   let inputCategory = document.getElementById("editInputCategory");
   let SaveUpdate = document.getElementById("btn_saveEditWord");

   

   const close_3 = () => {
    UpdateAll.style.display = 'none';
};

Edit.addEventListener("click", () => {
    UpdateAll.style.display = "flex";
});

buttonX.addEventListener('click', close_3);
buttonCancel.addEventListener('click', close_3);

  



  let openEdit = (id) => {
    document.getElementById("popUpEdit").style.display = "flex";


let EditID;


EditID = id;

let findWord = words.find((s) => s.id === id);

inputWord.value = findWord.word;
inputMeaning.value = findWord.meaning;
inputCategory.value = findWord.categoryId;



SaveUpdate.addEventListener("click",(id) => {


const handeleUpWord = () => {
    let indexWord = words.findIndex((s) => s.id === EditID);

    words[indexWord].word = inputWord.value;
    words[indexWord].meaning = inputMeaning.value;
    words[indexWord].categoryId = inputCategory.value;
  Savedata();
  renderTable();
   UpdateAll.style.display = "none";
};

handeleUpWord();

});

};











let openDelete = (id) => {
    document.getElementById("popUpDeleteWord").style.display = "flex";

};

confirmBtn.addEventListener("click",(id)=> {

    let DeleteADD = words.findIndex((s) => s.id === id);
    words.splice(DeleteADD,1);
    Savedata();
    renderTable();
    deleteModal.style.display = "none";
    
});

