import { pool } from "../db.js";

export const getCertificados = async (req,res) =>{
    try {
        const [rows] = await pool.query("SELECT * FROM BD_LIC_TEMP");
        res.json(rows);
      } catch (error) {
        return res.status(500).json({ message: "Error al listar todo" });
      }
}

export const getCertixId = async(req,res) => {
    try {
        const {id} = req.params;
        const [row] = await pool.query('select * from BD_LIC_TEMP where item=?',[id]);

        if(row.length <= 0){
            return res.status(404).json({message:"Certificado no encontrado"})
        }
        res.json(row[0]);

    } catch (error) {
        return res.status(500).json({message:"Error inesperado"})
    }
}

export const createCerti= async (req,res) => {
    const {propietario,direccion,giro,estado} = req.body

    const [rows] = await pool.query('INSERT INTO BD_LIC_TEMP(propietario,direccion,giro,estado) VALUES (?,?,?,?)',
    [propietario,direccion,giro,estado])
    console.log(req.body)
    res.send({
        id: rows.insertId,
        propietario,
        direccion,
        giro,
        estado
    })
}

export const updateCerti = async (req,res) => {
  try {
    const { id } = req.params
    const {propietario,direccion,giro,estado} = req.body

    const [result] = await pool.query(
      //update BD_LIC_TEMP set propietario = "Test solo", direccion = "", giro = "", estado = "" where id = 7;
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [propietario,direccion,giro,estado]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Certificado no encontrado" });

    const [rows] = await pool.query("SELECT * FROM BD_LIC_TEMP WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Ocurrio un error" });
  }
}

export const deleteCerti = async(req,res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("DELETE FROM BD_LIC_TEMP WHERE id = ?", [id]);
    
        if (rows.affectedRows <= 0) {
          return res.status(404).json({ message: "Certificado no encontrado" });
        }
    
        res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: "Ecorrio un error" });
      }
}



