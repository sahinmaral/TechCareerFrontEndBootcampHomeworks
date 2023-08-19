import React from "react";
import ContactInformation from "../class/ContactInformation";

export const Contact: React.FC = () => {
  const initialData = new ContactInformation("", "", "", "");


  const [contactInformation, setContactInformation] =
    React.useState<ContactInformation>(initialData);

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     alert(JSON.stringify(contactInformation));
//   };

  return (
    <div className="w3-container w3-padding-32" id="contact">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        Contact
      </h3>
      <p>Lets get in touch and talk about your next project.</p>
      <form action="https://www.w3schools.com/action_page.php" target="_blank">
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="Name"
          required
          value={contactInformation.name}
          onChange={(e) =>
            setContactInformation({
              ...contactInformation,
              name: e.target.value,
            })
          }
          name="Name"
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Email"
          required
          value={contactInformation.email}
          onChange={(e) =>
            setContactInformation({
              ...contactInformation,
              email: e.target.value,
            })
          }
          name="Email"
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Subject"
          required
          value={contactInformation.subject}
          onChange={(e) =>
            setContactInformation({
              ...contactInformation,
              subject: e.target.value,
            })
          }
          name="Subject"
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Comment"
          required
          value={contactInformation.comment}
          onChange={(e) =>
            setContactInformation({
              ...contactInformation,
              comment: e.target.value,
            })
          }
          name="Comment"
        />
        <button className="w3-button w3-black w3-section" type="submit">
          <i className="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </form>
    </div>
  );
};
