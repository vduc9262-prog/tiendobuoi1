
const words = [
  {
    id: 1,
    word: "Cat",
    meaning: "mèo",
    category: "Con vật"
  },
  {
    id: 2,
    word: "Dog",
    meaning: "cún",
    category: "Con vật"
  },
  {
    id: 3,
    word: "Lemon tree",
    meaning: "cây chanh",
    category: "Cây cối"
  }
];

const renderWords = document.getElementById("renderWords");

const renderTable = () => {
  let html = "";

  words.forEach(item => {
    html += `
      <tr>
        <td class="word">${item.word}</td>
        <td class="meaning">${item.meaning}</td>
        <td class="category">${item.category}</td>
        <td class="actions">
          <button onclick="editWord(${item.id})" class="btn-edit">Edit</button>
          <button onclick="deleteWord(${item.id});" class="btn-delete">Delete</button>
        </td>
      </tr>
    `;
  });

  renderWords.innerHTML = html;
};

renderTable();


    let modal = document.getElementById('editModal');
    let addNewBtn = document.getElementById("btn-add");
    const closeBtn = document.getElementById('closeBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const saveBtn = document.getElementById('saveBtn');
    const modalTitle = document.getElementById('modalTitle');

    // Mở popup khi nhấn Add New Words
    addNewBtn.addEventListener("click", () => {
    
      modal.style.display = "inline-block";
      
    });

