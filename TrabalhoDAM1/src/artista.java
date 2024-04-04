public class artista {
    private String nome;

    private String discografia;

    private String genero;

    private String idade = calcula_idade();

    public String calcula_idade(){
        String idade = String.valueOf(2024 - 1948);
        return idade;
    }

    public artista(String nome, String discografia, String idade, String genero) {
        this.nome = nome;
        this.discografia = discografia;
        this.idade = idade;
        this.genero = genero;
    }





    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDiscografia() {
        return discografia;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }
    public void setDiscografia(String discografia) {
        this.discografia = discografia;
    }

    public String getIdade() {
        return idade;
    }

    public void setIdade(String idade) {
        this.idade = idade;
    }

    public String getGenero() {
        return genero;
    }
}
