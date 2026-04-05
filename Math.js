const listaUsers = [
    {id:1,nome:"Victor",estado:"RN"},
    {id:2,nome:"Maria",estado:"SP"},
    {id:3,nome:"João",estado:"MG"},
    {id:4,nome:"Ana",estado:"RJ"},
    {id:5,nome:"Carlos",estado:"BA"},
];

export function BuscarUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const usuario = listaUsers.find(u => u.id === id);

            if(usuario){
                resolve(usuario);
            } else {
                reject("Usuário não encontrado");
            }

        }, 2000);
    });
}

export async function exibirUsuario(id){
    try{
        const usuario = await BuscarUser(id);
        console.log(`Usuário encontrado: ${usuario.id} - ${usuario.nome} - ${usuario.estado}`);
    }    catch(error){
        console.error(`Erro: ${error}`);
    }
    
}