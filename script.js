async function debugAPIs() {
  const catRes = await fetch("https://openapi.programming-hero.com/api/categories");
  const catData = await catRes.json();
  console.log("Categories API:", catData);

  const allRes = await fetch("https://openapi.programming-hero.com/api/plants");
  const allData = await allRes.json();
  console.log("All Plants API:", allData);

  const cat1Res = await fetch("https://openapi.programming-hero.com/api/category/1");
  const cat1Data = await cat1Res.json();
  console.log("Category 1 API:", cat1Data);

  const detailRes = await fetch("https://openapi.programming-hero.com/api/plant/1");
  const detailData = await detailRes.json();
  console.log("Plant Detail API:", detailData);
}
debugAPIs();

















const categoryList = document.getElementById("categoryList");
const treeGrid = document.getElementById("treeGrid");
const cartBox = document.getElementById("cartBox");
const loading = document.getElementById("loading");
let cart = [];
let activeCategoryBtn = null;

// Load Categories
async function loadCategories() {
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();
    const categories = data.categories || [];

    categoryList.innerHTML = "";

    // Default All button
    const allBtn = createCategoryButton("All", null);
    allBtn.onclick = () => { setActive(allBtn); loadAllPlants(); };
    categoryList.appendChild(allBtn.parentElement);

    categories.forEach(cat => {
        const btn = createCategoryButton(cat.category_name, cat.id);
        btn.onclick = () => { setActive(btn); loadPlantsByCategory(cat.id); };
        categoryList.appendChild(btn.parentElement);
    });
}

// Create category button helper
function createCategoryButton(text, id) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.className = "w-full text-left px-3 py-2 bg-white rounded-md shadow transition";
    li.appendChild(btn);
    return btn;
}

// Set active category button
function setActive(btn) {
    if (activeCategoryBtn) activeCategoryBtn.classList.remove("bg-green-600", "text-white");
    btn.classList.add("bg-green-600", "text-white");
    activeCategoryBtn = btn;
}

// Load all plants
async function loadAllPlants() {
    showLoading();
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    hideLoading();
    displayPlants(data.plants || []);
}

// Load plants by category
async function loadPlantsByCategory(id) {
    showLoading();
    const res = await fetch(`https://openapi.programming-hero.com/api/category/${id}`);
    const data = await res.json();
    hideLoading();
    displayPlants(data.plants || []);
}

// Display plants in grid
function displayPlants(plants) {
    treeGrid.innerHTML = "";
    plants.forEach(plant => {
        const card = document.createElement("div");
        card.className = "bg-white p-4 rounded-2xl shadow-md flex flex-col justify-between";
        card.innerHTML = `
            <img src="${plant.image || ''}" alt="${plant.name || ''}" class="w-full h-40 object-contain mb-4">
            <div class="flex justify-between mb-4">
                <div>
                    <h3 onclick="openModal(${plant.id})" class="cursor-pointer text-lg font-semibold text-green-700 hover:underline">
                        ${plant.name || 'Unnamed'}
                    </h3>
                    <p class="text-gray-500 text-sm mt-2">${(plant.description||'').slice(0,50)}...</p>
                    <button class="bg-[#CFF0DC] text-green-800 text-sm px-2 py-1 rounded mt-3">${plant.category||'Unknown'}</button>
                </div>
                <span class="text-green-700 font-bold">$${plant.price||0}</span>
            </div>
            <button onclick="addToCart('${plant.name}', ${plant.price||0})"
                class="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                Add to Cart
            </button>
        `;
        treeGrid.appendChild(card);
    });
}

// Open modal
async function openModal(id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/plant/${id}`);
    const data = await res.json();
    const plant = data.plants || {};
    document.getElementById("modalImg").src = plant.image || '';
    document.getElementById("modalName").innerText = plant.name || '';
    document.getElementById("modalDesc").innerText = plant.description || '';
    document.getElementById("modalPrice").innerText = `$${plant.price||0}`;
    document.getElementById("plantModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("plantModal").classList.add("hidden");
}

// Cart functions
// function addToCart(name, price) {
//     cart.push({name, price});
//     renderCart();
// }
// function renderCart() {
//     cartBox.innerHTML = '';
//     let total = 0;
//     cart.forEach((item, i) => {
//         total += item.price;
//         const row = document.createElement("div");
//         row.className = "flex justify-between items-center";
//         row.innerHTML = `
//             <span>${item.name}</span>
//             <div class="flex items-center space-x-2">
//                 <span class="text-green-700 font-semibold">$${item.price}</span>
//                 <button onclick="removeFromCart(${i})" class="text-red-500 hover:text-red-700">❌</button>
//             </div>`;
//         cartBox.appendChild(row);
//     });
//     const tot = document.createElement("div");
//     tot.className = "mt-3 pt-2 border-t font-bold flex justify-between";
//     tot.innerHTML = `<span>Total:</span><span class="text-green-700">$${total}</span>`;
//     cartBox.appendChild(tot);
// }
// function removeFromCart(i) {
//     cart.splice(i,1);
//     renderCart();
// }



function addToCart(name, price) {
  cart.push({name,price});
  renderCart();
}

function renderCart() {
  cartBox.innerHTML = "";
  let total = 0;

  // আলাদা রঙের লিস্ট
  const colors = [
    "bg-[#F0FDF4] ",
    "bg-[#F0FDF4] ",
    "bg-[#F0FDF4] ",
    "bg-[#F0FDF4] ",
    "bg-[#F0FDF4] ",
    "bg-[#F0FDF4] ",
    "bg-[#F0FDF4] ",
    "bg-[#F0FDF4] "
  ];

  cart.forEach((item,index)=>{
    total += item.price;
    const colorClass = colors[index % colors.length]; // ✅ আলাদা রঙ apply

    const div=document.createElement("div");
    div.className=`flex justify-between items-center p-2 rounded-lg ${colorClass}`;
    div.innerHTML=`
      <span>${item.name}</span>
      <div class="flex items-center space-x-2">
        <span class="text-green-700 font-semibold">$${item.price}</span>
        <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700">❌</button>
      </div>`;
    cartBox.appendChild(div);
  });

  const totalDiv=document.createElement("div");
  totalDiv.className="mt-3 pt-2 border-t font-bold flex justify-between";
  totalDiv.innerHTML=`<span>Total:</span><span class="text-green-700">$${total}</span>`;
  cartBox.appendChild(totalDiv);
}

function removeFromCart(index){
  cart.splice(index,1);
  renderCart();
}


// Loader
function showLoading() {
    loading.classList.remove("hidden");
    treeGrid.classList.add("hidden");
}
function hideLoading() {
    loading.classList.add("hidden");
    treeGrid.classList.remove("hidden");
}

// Initialize
loadCategories();
loadAllPlants();



