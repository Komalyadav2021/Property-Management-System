import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useScript from "../useScript";
import useStyle from "../useStyle";
import { motion } from "framer-motion";
export const Property_form = () => {
  const navigate = useNavigate();

  useStyle("Form.css");
  return (
    <motion.div
      class="formBody"
      animate={{ x: [2000, 0], opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: 0,
        ease: [0, 0, 0, 1],
      }}
      initial={{ x: [0, 0], opacity: 0.5 }}
    >
      <div class="cover1"></div>
      <div class="form">
        <form
          action="http://localhost:80/postData"
          method="POST"
          encType="multipart/form-data"
        >
          <h1 class="title-prop">
            ENTER PROPERTY <br /> DETAILS
          </h1>
          <input
            type="text"
            class="text_input"
            id="ownerName"
            name="name"
            placeholder="Owner's Name"
          />

          <input
            type="text"
            class="text_input"
            id="contact"
            name="phone_number"
            placeholder="Contact No."
          />
          <label for="Address" class="text_input" id="add">
            Address
          </label>
          <input
            type="text"
            class="text_input"
            id="Street_name"
            name="street_name"
            placeholder="Street Name"
          />
          <input
            type="text"
            class="text_input"
            id="City"
            name="city"
            placeholder="City"
          />
          <input
            type="text"
            class="text_input"
            id="State"
            name="state"
            placeholder="State"
          />
          <input
            type="text"
            class="text_input"
            id="area"
            name="area"
            placeholder="Area in Sqm"
          />
          <input
            type="text"
            class="text_input"
            id="Furnished"
            name="furnished_status"
            placeholder="Furnished Status"
          />
          <input
            type="text"
            class="text_input"
            id="Rent"
            name="rent"
            placeholder="Rent"
          />

          <input type="file" id="File" name="images" multiple />
          <button type="submit" id="btn1">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};
