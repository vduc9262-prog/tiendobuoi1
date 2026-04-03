
let items = [
  {
    id:1,
    name: "Con vật",
    description: "", 

  },
  {
    id:2,
    name: "Cây cối",
    description: "",

  }
];


let SaveData = ()=> {
    localStorage.setItem("listItems",JSON.stringify(items)) || [];
}

let loadData = () => {

     let data = localStorage.getItem("listItems");
     if(data){
       items = JSON.parse(data);
     }
};


let renderCate = document.getElementById("render");

const RenderItems = () => {
   let render = ``;
   items.forEach((el) => {
    render += `
    <tr>
      <td class="name">${el.name}</td>
      <td>${el.description}</td>
          <td class="actions">
            <button onclick="openEdit(${el.id})"  class="edit" id="EditCaterios">Edit</button>
            <button onclick="openDelete(${el.id})" class="delete" id="PopupdeleteCaterios">Delete</button>
          </td>
    </tr>
    `
   });
   renderCate.innerHTML = render;
   SaveData();
};


RenderItems();




    let modal = document.getElementById('PopAdd');
    let addNewBtn = document.getElementById("addBtn");
    let closeBtn = document.getElementById('closeBtn');
    let cancelBtn = document.getElementById("cancelBtn");
    let saveBtn = document.getElementById('saveBtn');
    let modalTitle = document.getElementById('modalTitle');
    let SaveAdd = document.getElementById("saveBtn");
    let NameAdd = document.getElementById("wordInput");
    let DeripAdd = document.getElementById("meaningInput");


const close_1 = () => {
    modal.style.display = 'none';
};

addNewBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener('click', close_1);
cancelBtn.addEventListener('click', close_1);



SaveAdd.addEventListener("click",(e)=> {
e.preventDefault();
const addItems = () => {
  let NameInput = NameAdd.value.trim();
  let DrepInput = DeripAdd.value.trim();

  const NewCaterios = {
    id: Date.now(),
    name:NameInput,
    description:DrepInput,
  }

  items.push(NewCaterios);
  SaveData();
  RenderItems();

};

addItems();

})

  let deleteModal = document.getElementById("popUpDeleteWord");
  let deletePo = document.getElementById("PopupdeleteCaterios");
  let confirmBtn = document.getElementById("confirmDeleteBtn");
  let closeDe = document.getElementById("closeDeleteBtn");
  let cancelDele = document.getElementById("cancelDelete")

 const close_2 = () => {
    deleteModal.style.display = "none";
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
   let Edit =document.getElementById("EditCaterios")

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

};

let openDelete = (id) => {

    document.getElementById("popUpDeleteWord").style.display = "flex";
   
}; 

confirmBtn.addEventListener("click",(id)=> {

    let DeleteADD = items.findIndex((s) => s.id === id);
    items.splice(DeleteADD,1);
    SaveData();
    RenderItems();
    deleteModal.style.display = "none";
    
});