const recipes =[
    { recipe_name: 'chicken alfredo'},
    { recipe_name: 'pb&j'},
    { recipe_name: 'ramen'}
]

const ingredients = [
    { ingredient_name:'chicken', ingredient_unit: 'lbs'},
    { ingredient_name:'pasta', ingredient_unit: 'lbs'},
    { ingredient_name:'sauce', ingredient_unit: 'lbs'},
    { ingredient_name:'peanut butter', ingredient_unit: 'lbs'},
    { ingredient_name:'jelly', ingredient_unit: '1lbs'},
    { ingredient_name:'bread', ingredient_unit: 'slices'},
    { ingredient_name:'ramen', ingredient_unit: 'lbs'},
    { ingredient_name:'broth', ingredient_unit: 'oz'},
]

const steps = [
    //chicken alfredo
    {step_text: 'heat pan', step_number: '1', recipe_id:'1'},
    {step_text: 'add chicken', step_number: '2', recipe_id:'1'},
    {step_text: 'add noodles and sauce', step_number: '3', recipe_id:'1'},

    //pb&j
    {step_text: 'spread peanut butter', step_number: '1', recipe_id:'2'},
    {step_text: 'spread jelly', step_number: '2', recipe_id:'2'},
    {step_text: 'combine', step_number: '3', recipe_id:'2'},

    //ramne
    {step_text: 'heat pan', step_number: '1', recipe_id:'3'},
    {step_text: 'add broth', step_number: '2', recipe_id:'3'},
    {step_text: 'add noodles and seasoning packet', step_number: '3', recipe_id:'3'}
]

exports.seed = function (knex) {

}