
class Artista {
    private String nome;
    private String descricao;
    private String generoPrincipal;

    public Artista(String nome, String descricao, String generoPrincipal) {
        this.nome = nome;
        this.descricao = descricao;
        this.generoPrincipal = generoPrincipal;
    }

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getGeneroPrincipal() {
        return generoPrincipal;
    }
}