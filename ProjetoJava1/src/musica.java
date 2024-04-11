class Musica {
    private String nome;
    private String genero;
    private Artista artista;

    public Musica(String nome, String genero, Artista artista) {
        this.nome = nome;
        this.genero = genero;
        this.artista = artista;
    }

    public String getNome() {
        return nome;
    }

    public String getGenero() {
        return genero;
    }

    public Artista getArtista() {
        return artista;
    }
}