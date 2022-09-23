
/* const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function (_req, res) {
  res.json(drinks.sort((a, b) => (a.name - b.name) ? 1 : -1))
});

app.get('/drinks/search', function(req, res) {
  const {minPrice, name} = req.query
  const filteredDrinks = drinks.filter((d) => d.price > parseInt(minPrice) || d.name.includes(name));
  res.status(200).json(filteredDrinks);
})

app.get('/drinks/:id', function (req, res) {
    const { id } = req.params;
    const drink = drinks.find((d) => d.id === parseInt(id));
  
    if (!drink) return res.status(404).json({ message: 'drink not found!'});
  
    res.status(200).json(drink);
  });

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); */