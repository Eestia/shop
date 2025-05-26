// export default function Contact() {
//   return <div className="container mt-4"><h2>Contactez-nous</h2></div>;
// }
import './Contact.css';

export default function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contactez-nous</h2>
      <p className="text-center mb-5">Une question, un souci, ou juste envie de dire bonjour ? On vous répond vite !</p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom</label>
              <input type="text" className="form-control" id="name" placeholder="Votre nom complet" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Adresse email</label>
              <input type="email" className="form-control" id="email" placeholder="vous@example.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Écrivez votre message ici..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}
