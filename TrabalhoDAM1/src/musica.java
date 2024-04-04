public class musica {
    private String nome;

    private String lancamento;

    private String genero;

    private String cantor;

    public musica(String nome, String lancamento, String genero, String cantor) {
        this.nome = nome;
        this.lancamento = lancamento;
        this.genero = genero;
        this.cantor = cantor;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLancamento() {
        return lancamento;
    }

    public void setLancamento(String lancamento) {
        this.lancamento = lancamento;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getCantor() {
        return cantor;
    }

    public void setCantor(String cantor) {
        this.cantor = cantor;
    }
}
