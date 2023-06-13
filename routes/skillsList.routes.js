const express = require("express");
const router = express.Router();

const Skill = require("../models/Skill.model")

//GET /api/:userId/skillsList => enviar al front end la lista de todos los skills
router.get("/:userId/skillsList", async (req, res, next) => {
 
   try {
    
    const response = await Skill.find()
     response.json(response)
   } catch (error) {
    next(error);
   }
})

// POST /api/:userId/skillsList => recibir del fronted los detalles de un skill y crearlo en la BD
router.post("/:userId/skillsList", async (req, res, next)=>{
    const {title, list} = req.body
    if(!title || !list){
        res.status(400).json({ message: "Debes rellenar todos los campos" });
    return;
    }
  try {
    await Skill.create({
        title,
        list,
    })
    
    res.json("list creada");
  } catch (error) {
    next(error);
  }

})


router.post("/:userId/skillsList/:skillId", async (req, res, next) =>{
    const { skillId } = req.params;
    const {title, list} = req.body
    try{
        await Skill.findByIdAndUpdate(skillId,{
            title,
            list,
        })
        res.json("Skill modificada");
    } catch (error) {
      next(error);
    }
})

router.delete("/:userId/skillsList/:skillId",async  (req,res,next)=>{
    const { skillId } = req.params;
    try {
        await Skill.findByIdAndDelete(skillId);
        res.json("skill eliminado");
      } catch (err) {
        next(err);
      }
    }
 )
module.exports = router;