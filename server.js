const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb+srv://madadgar:madadgar123@cluster0.xsp6b4n.mongodb.net/firstLab2');

const recipeSchema = new mongoose.Schema({
  recipeName: String,
  gradient: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);
app.use(express.json());
app.use(bodyParser.json());
app.use(cors()); 

app.get('/api/recipes/get', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/recipes', async (req, res) => {
  const { recipeName, gradient } = req.body;
  const recipeCreate = new Recipe({
    recipeName,
    gradient 
  });

  try {
    const newRecipe = await recipeCreate.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/api/recipes/delete',async(req,res)=>{
  const id = req.body.id;
  try {
    await Recipe.findByIdAndDelete(id);
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
