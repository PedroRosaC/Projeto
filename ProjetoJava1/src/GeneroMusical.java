import java.util.ArrayList;
import java.util.List;

class GeneroMusical {
    private String nome;
    private String descricao;
    private List<Artista> artistasPopulares;

    public GeneroMusical(String nome, String descricao) {
        this.nome = nome;
        this.descricao = descricao;
        this.artistasPopulares = new ArrayList<>();
    }

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public List<Artista> getArtistasPopulares() {
        return artistasPopulares;
    }

    public void adicionarArtistaPopular(Artista artista) {
        artistasPopulares.add(artista);
    }
}