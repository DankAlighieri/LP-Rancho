import { Instagram, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Contato comercial</span>
          <h2>Fale com nossa equipe comercial</h2>
          <p>
            Entre em contato para informações sobre disponibilidade, produção,
            fornecimento e oportunidades comerciais.
          </p>
          <div className="contact-list">
            <a href="https://wa.me/5574999330190" target="_blank" rel="noreferrer">
              <Phone size={24} aria-hidden="true" />
              +55 (74) 9 9933-0190
            </a>
            <a href="mailto:georgeano.santos@uol.com.br">
              <Mail size={24} aria-hidden="true" />
              georgeano.santos@uol.com.br
            </a>
            <a
              href="https://www.instagram.com/ranchosagradafamilia"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={24} aria-hidden="true" />
              @ranchosagradafamilia
            </a>
          </div>
        </div>
        <form
          className="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          {/* Insira aqui a access_key real da conta Web3Forms antes de publicar o formulário. */}
          <input
            type="hidden"
            name="access_key"
            value="SUBSTITUIR_PELA_ACCESS_KEY"
          />
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
          />
          <label>
            Nome
            <input name="name" type="text" placeholder="Seu nome" required />
          </label>
          <label>
            Empresa
            <input name="company" type="text" placeholder="Nome da empresa" />
          </label>
          <label>
            E-mail
            <input name="email" type="email" placeholder="seu@email.com" required />
          </label>
          <label>
            Telefone/WhatsApp
            <input name="phone" type="tel" placeholder="+55 (00) 00000-0000" />
          </label>
          <label className="form-full">
            Mensagem
            <textarea
              name="message"
              placeholder="Como podemos ajudar?"
              rows={5}
              required
            />
          </label>
          <p className="privacy-note">
            Ao enviar, você concorda que seus dados sejam utilizados para
            retorno do contato solicitado.
          </p>
          <button type="submit">Enviar solicitação</button>
        </form>
      </div>
    </section>
  );
}
