import getConnection from "./../db/database.js"
const getProductos = async (req,res)=>{
    try {
        const connection  = await getConnection();
        const result = await connection.query("SELECT * FROM productos")
        res.json(result);
    } catch (error){
        console.error("ERROR 500");
    }
}

const updateProductos = async(req, res)=>{
    try {
        const {id}= req.params
        const{ProductoNombre,PrecioUnitario}=req.body;
        const connection  = await getConnection();
        const result = await connection.query("UPDATE productos SET ProductoNombre = ?, PrecioUnitario = ? WHERE ProductoID = ?",[ProductoNombre, PrecioUnitario, id]);
        res.json(result);
    } catch (error){
        console.error("ERROR 500");
    }
}


export const methoHTTP={
    getProductos,
    updateProductos
}