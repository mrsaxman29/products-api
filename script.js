const wrapper = document.getElementById('products_wrapper');
const button = document.getElementById('fetch');




async function get_products(){
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const data = await response.json();
    console.log(data);
    parse_products(data);

}

function parse_products(products_list){
    for (let index = 0; index < products_list.length; index ++){
        console.log(products_list[index]);
        console.log(products_list[index]['title']);
        create_div(wrapper, products_list[index]['title'])
    }
}

function create_div(parent_element, title){
    const new_div = document.createElement('div');
    new_div.innerHTML = title;
    parent_element.appendChild(new_div);

}

button.addEventListener('click', get_products);