export default class APIService {
    static UpdateArticle(article_id, body, token){
        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json());
    }

    static InsertArticle(body,token){
        return fetch(`http://127.0.0.1:8000/api/articles/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json());
    }
    static DeleteArticle(article_id){
        return fetch(`http://127.0.0.1:8000/api/articles/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token 30fd2715518d151ff4e1ad06b388a33755b87ea9`
            },
        })
    }

    static LoginUser(body){
        return fetch(`http://127.0.0.1:8000/auth/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
    static RegisterUser(body){
        return fetch(`http://127.0.0.1:8000/api/users/`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }   
}