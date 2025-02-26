// existing routes...

// Removed the route for View Desert
// app.get('/view-all-desert', (req, res) => {
//     // logic to display all deserts
// });

// Removed the route for View Desert Recipes
// app.get('/view-desert-recipes', (req, res) => {
//     // logic to display desert recipes
// });

app.get('/desert', (req, res) => {
    // logic to display desert page
});

// Add the route for DessertPage
app.get('/desserts', (req, res) => {
    // logic to display dessert page
    res.render('DessertPage'); // Adjust this line based on your rendering method
});

// existing routes... 