import axios from 'axios';

const API_BASE_URL = 'https://opentdb.com/api.php?';

export const get_questions = async (amount, category, difficulty, type) => {

    const finalAmount = parseInt(amount) || 10;
    let url = `${API_BASE_URL}amount=${finalAmount}`;
    
    if (category) {
        url += `&category=${category}`;
    }
    if (difficulty) {
        url += `&difficulty=${difficulty}`;
    }
    if (type) {
        url += `&type=${type}`;
    }
    console.log("URL de Busca Válida:", url);
    
    try {
        const response = await axios.get(url);
        return response.data;
        
    } catch (error) {
        console.error('Erro ao fazer o GET na API:', error);
        return { response_code: 500, results: [] }; 
    }
}