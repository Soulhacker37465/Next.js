export default function Page({ params }) {
    //fetch your blog post by its slug
    let languages = ["python", "javascript", "java", "Cpp", "Cs"]
    if (languages.includes(params.slug)){
        return <div>MY Post: {params.slug} </div>
    }
    else{
        return <div> Post Is not found </div>
    }
    return <div>MY Post: {params.slug} </div>
}