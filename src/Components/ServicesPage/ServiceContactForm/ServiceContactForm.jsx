import "./ServiceContactForm.css";
export default function ServiceContactForm() {
    return (
        <div className="srvice-form-box">
            <div className="main-heading text-center mb-5">
                <h2>
                    Connect <span>with us</span>
                </h2>
                <p>contact via form below & we'll get back to you</p>
            </div>
            <div className="service-conact-form">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="TYPE YOUR CONCERN (Optional)" rows="5"></textarea>
                <div className="text-center mt-4">
                    <button type="submit"> Submit</button>
                </div>
            </div>
        </div>
    )
}