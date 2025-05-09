const API_HOST = 'htpps://dattebayo-api.onrender.com' //define url da api

//exportação de função assincrona
export async function fetchPersonagens(){
    //bloco exception para tratativa de erros na conexão de API
    try {
        const response = await fetch(`${API_HOST}/characters`) // espera da resposta do endpoint

        //lançamento de erro se a resposta não for ok
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`)
        }
        
        return await response.json()
    } catch (error) {
        console.error(`Erro ao buscar personagens: ${error}`)
        return []
    }
}