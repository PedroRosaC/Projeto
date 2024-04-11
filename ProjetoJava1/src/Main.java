
public class Main {
    public static void main(String[] args) {
        Artista artista1 = new Artista("Artista1", "Descrição do Artista 1", "Rock");
        Artista artista2 = new Artista("Artista2", "Descrição do Artista 2", "Pop");
        Artista artista3 = new Artista("Artista3", "Descrição do Artista 3", "Jazz");

        GeneroMusical rock = new GeneroMusical("Rock", "Um gênero musical que se originou como " +
                "um estilo de música popular nos Estados Unidos na década de 1950, " +
                "e se desenvolveu principalmente a partir do rock and roll.");

        rock.adicionarArtistaPopular(artista1);

        GeneroMusical pop = new GeneroMusical("Pop", "Um gênero musical que se originou em " +
                "sua forma moderna durante os anos 1950 e 1960, derivado do rock and roll.");

        pop.adicionarArtistaPopular(artista2);

        GeneroMusical jazz = new GeneroMusical("Jazz", "Um gênero musical que se originou " +
                "nos Estados Unidos na comunidade afro-americana do final do século XIX e " +
                "início do século XX.");

        jazz.adicionarArtistaPopular(artista3);

        Musica musica1 = new Musica("Musica1", "Rock", artista1);
        Musica musica2 = new Musica("Musica2", "Pop", artista2);
        Musica musica3 = new Musica("Musica3", "Jazz", artista3);

        // Exemplo de uso
        System.out.println("Nome da música: " + musica1.getNome());
        System.out.println("Gênero da música: " + musica1.getGenero());
        System.out.println("Artista da música: " + musica1.getArtista().getNome());
        System.out.println("Descrição do artista: " + musica1.getArtista().getDescricao());

        System.out.println("\nDescrição do gênero Pop: " + pop.getDescricao());
        System.out.println("Artistas populares no gênero Pop:");
        for (Artista artista : pop.getArtistasPopulares()) {
            System.out.println("- " + artista.getNome());
        }
    }
}