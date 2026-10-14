import { useState } from "react"
import Styles from "./ContactForm.module.scss"
import type { IDraft } from "../../models"

function ContactForm() {

    const [draft, setDraft] = useState<IDraft>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })

    const [displayConcern, setDisplayConcern] = useState<"contact" | "confirmation">("contact")

    function handleSetDraft(event: React.ChangeEvent) {
        const { name, value } = event.target as HTMLInputElement | HTMLTextAreaElement
        setDraft(prev => {return {...prev, [name]: value}})
    }

        function handleTrimPhone() {
            setDraft(prev => {return {...prev, phone: prev.phone.replace(/[\s\-().]/g, "")}})
        }

    function handleSubmit(event: React.SubmitEvent) {
        event.preventDefault()

        function validate() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
            if (draft.name.length === 0) {
                console.error("name may not be blank")
                return false
            }
            if (draft.email.length === 0) {
                console.error("email may not be blank")
                return false
            }
            if (!emailRegex.test(draft.email)) {
                console.error("email is invalid")
                return false
            }
            if (draft.phone.length === 0) {
                console.error("phone may not be blank")
                return false
            }
            if (draft.phone.includes("+")) {
                console.error("if you're trying to include your country code, please replace it with a 0")
                return false
            }
            if (isNaN(Number(draft.phone))) {
                console.error("phone is invalid")
                return false
            }
            if (draft.phone.length !== 10) {
                console.error("phone number must contain 10 digits")
                return false
            }
            if (draft.subject.length === 0) {
                console.error("subject may not be blank")
                return false
            }
            if (draft.message.length === 0) {
                console.error("message may not be blank")
                return false
            }

            return true
        }
        if (validate()) setDisplayConcern("confirmation")
    }

    return (
        <>
            <h2>Contact</h2>
            <div className={Styles.container}>
                <p>Know a title you think would belong here, or just want to get in touch?<br/>Leave your suggestion below:</p>
                <p className={Styles.pretendNote}>This is a pretend form as proof of concept, no information will be shared and all information will be forgotten.</p>
                {displayConcern === "contact" ? (
                    <form onSubmit={handleSubmit} noValidate>
                        <label>
                            <span>Name</span>
                            <input type="text" value={draft.name} name="name" onChange={handleSetDraft}/>
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="email" value={draft.email} name="email" onChange={handleSetDraft} placeholder="example@domain.com"/>
                        </label>
                        <label>
                            <span>Phone (10 characters)</span>
                            <input type="tel" value={draft.phone} name="phone" onChange={handleSetDraft} onBlur={handleTrimPhone} placeholder="0123456789"/>
                        </label>
                        <label>
                            <span>Subject</span>
                            <input type="text" value={draft.subject} name="subject" onChange={handleSetDraft}/>
                        </label>
                        <label>
                            <span>Message</span>
                            <textarea value={draft.message} name="message" rows={5} onChange={handleSetDraft}/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                ) : (
                    <div>
                        <p>Thank you for your message!</p>
                        <p>Name: {draft.name}</p>
                        <p>Email: {draft.email}</p>
                        <p>Phone: {draft.phone}</p>
                        <p>Subject: {draft.subject}</p>
                        <p>Message: {draft.message}</p>
                    </div>
                )}

            </div>
        </>
    )
}

export default ContactForm