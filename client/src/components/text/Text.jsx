import axios from "axios";
import { useRef } from "react";
import "./text.css"
import { useHistory } from "react-router";

export default function Text() {
    const parking_lot = useRef();
    const phone_number = useRef();
    const history = useHistory();
    
    const send_form = async (e) =>  
    {
        e.preventDefault();
        const new_driver = {
            parking_lot: parking_lot.current.value,
            phone_number: phone_number.current.value
          }
          try {
            console.log(new_driver);
            //await axios.post("", new_driver);
            alert("You have successfully subscribed!");
            history.push("/");
          } catch (err) {
            console.log(err);
          }
    };
    return (
        <>
        <main id="site-main-map">
            <div className="container">
                <div className="form-title text-center">
                    <h2 className="text-dark">Kensington Text Notification Subscription</h2>
                    <span className="text-light">
                        Use the below form to subscribe and receive text notifications!
                    </span>
                </div>
                <form onSubmit = {send_form} id="add_number">
                    <div className="new_number">
                        <div className="form-group">
                            <label htmlFor="name" className="text-light">Parking Lot Name</label>
                            <input type="text" ref={parking_lot} name="name" defaultValue="" required placeholder="Parking Lot Name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phonenumber" className="text-light">Phone Number</label>
                            <input type="tel" ref={phone_number} name="phonenumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" defaultValue="" required placeholder="Phone Number"></input>
                            <small>Format: 123-456-7890</small>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn text-dark update">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
        </>
    );
  }