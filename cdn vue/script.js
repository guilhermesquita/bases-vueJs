new Vue ({
    el: '#app',
    template: `    
    <div class="container">
    <h1>Sistema de Comentários</h1>
    <hr /> 

    <div class="form-comment form-group">
        <p>
            <input placeholder="Nome" type="text" name="author" class="form-control">
        </p>
        <p>
            <textarea placeholder="Comentário" name="message" class="form-control"></textarea>
        </p>
        <button type="submit" class="btn btn-primary">Comentar</button>
    </div>
</div>`,

data(){
    return{
        comments: [{
            name: 'Ayrton',
            Comment: 'Lorem Ipsum'
        }]
    }
}
})