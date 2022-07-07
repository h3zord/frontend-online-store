export async function getCategories() {
  //try {
  const returnAPI = await fetch("https://api.mercadolibre.com/sites/MLB/categories");
  const returnAPIJson = await returnAPI.json();
  console.log(returnAPIJson);
  return returnAPIJson;
  // console.log(returnAPI);
  /* } catch (error) {
    // return Error
    console.log(`Algo deu errado \n${error}`)
  } */
}

  export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
    // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe 
  }

