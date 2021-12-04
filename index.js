const elements = document.querySelectorAll('script[type="application/ld+json"]');

function parseElements(elements, result = []) {
  for (let data of elements) {
    if (data.innerText) {
      data = JSON.parse(data.innerText);
    }

    if (Array.isArray(data)) {
      for (let node of data) {
        if (node['@type'] == 'Recipe') {
          data = node;
        }
      }
    }
    if (data.hasOwnProperty('@graph') && Array.isArray(data['@graph'])) {
      parseElements(data['@graph'], result);
    }
    if (data.image) {
      if (Array.isArray(data.image)) {
        data['myImgUrl'] = data.image[0].url;
      }
      if (data.image.url) {
        data['myImgUrl'] = data.image.url;
      }
      if (typeof data.image === 'string'){
        data['myImgUrl'] = data.image
      }
    }
    if (data['@type'] == 'Recipe') {
      data.recipeInstructions =
        typeof data.recipeInstructions == 'string'
          ? data.recipeInstructions.match(/[^\.!\?]+[\.!\?]+/g)
          : data.recipeInstructions;
      data['myInstructions'] = data.recipeInstructions?.map((r, i) => {
        const step = String(i + 1);
        const text = typeof r == 'string' ? r : r.text;
        const newInstruction = step + '. ' + text + '\n';
        return newInstruction;
      });
      for (let i = 0; i < data['recipeIngredient'].length; i++) {
        data['recipeIngredient'][i] = '* ' + data['recipeIngredient'][i];
      }
      result.push(data);
    }
  }
  return result.length > 0 ? result : false;
}
const result = parseElements(elements);
if (!result || !result.length) {
  completion();
} else {
  completion(result);
}
// Call completion to finish
