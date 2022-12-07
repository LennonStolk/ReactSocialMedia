import { FormEvent, useState } from 'react';
import { PostsService } from '../../../api-service/posts-service';
import { Company } from '../../../models/company';
import { Post } from '../../../models/post';
import { User } from '../../../models/user';
import './NewPost.css'

function NewPost(props: { postCreatedCallback: any }) {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    // Maakt een nieuwe post aan
    function createPost(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        if (checkEmpty(name, company, title, body)) return;

        // Zet nieuwe post met user in elkaar
        let newPost = new Post(0, 0, title, body);
        let newPostUser = new User(0, name, "", "");
        let newPostCompany = new Company(company, "", "");
        newPost.user = newPostUser;
        newPost.user.company = newPostCompany;

        // Voegt de nieuwe post toe aan de (neppe) backend
        let postsService = new PostsService();
        postsService.createPost(newPost).then((createdPost) => {
            // En voeg hem daarna toe aan de lijst op de homepagina
            props.postCreatedCallback(createdPost);

            // Maak het form leeg
            setName("");
            setCompany("");
            setTitle("");
            setBody("");
        });
    }

    // Kijkt of een of meerdere van de velden niet ingevuld is
    function checkEmpty(...fields: any) {
        for (let field of fields) {
            if (field.trim() == "") {
                return true;
            }
        }
        return false;
    }

    return (
        <section className='new-post-section'>
            <h3 className='new-post-label'>Create post:</h3>
            <form onSubmit={ createPost } className="new-post-block">
                <input type="text" className='text-input' placeholder='Name' onChange={ e => setName(e.target.value) } value={name}/>
                <input type="text" className='text-input' placeholder='Company' onChange={ e => setCompany(e.target.value) } value={company}/>
                <input type="text" className='text-input' placeholder='Title' onChange={ e => setTitle(e.target.value) } value={title}/>
                <textarea name="" id="" className='text-area' placeholder='Message' onChange={ e => setBody(e.target.value) } value={body}></textarea>
                <input type="submit" value="Make post" className='submit'/>
            </form>
        </section>
    )
}

export default NewPost