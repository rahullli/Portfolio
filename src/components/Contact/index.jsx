import "./Contact.css";
import Pyramid from "../../ui/Pyramid";
import { contactInfo } from "../../data";
const Contact = () => {
  return (
    <section id="contact">
      <div className="section__wrapper">
        <div className="pyramid__header">
          <Pyramid />
        </div>

        <div className="contact__group">
          <div>
            <h3 className="title">
              Let's talk on your <span>great project</span>
              {""}
            </h3>
            <div className="contact__options">
              {contactInfo.map((contact, index) => (
                <article className="option" key={index}>
                  <div className="contact__icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="contact__content">
                    <div>
                      <h3 className="name">{contact.name}</h3>
                      <p className="text__muted line__clamp__1 value">{contact.value}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
