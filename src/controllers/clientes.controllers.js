import getConnection from "./../db/database.js"
const getClientes = async (req,res)=>{
    try {
        const connection  = await getConnection();
        const result = await connection.query("SELECT * FROM clientes")
        res.json(result);
    } catch (error){
        console.error("ERROR 500");
    }
}
const postClientes = async(req, res)=>{
    try {
        const{Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax}=req.body;
        const clientes={Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax}
        const connection  = await getConnection();
        const result = await connection.query("INSERT INTO clientes SET ?",clientes)
        res.json(result)
    } catch (error){
        console.error("ERROR 500");
    }
}

export const methoHTTP={
    getClientes,
    postClientes
}