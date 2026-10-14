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

    function handleSetDraft(event: React.ChangeEvent) {
        const { name, value } = event.target as HTMLInputElement | HTMLTextAreaElement
        setDraft(prev => {return {...prev, [name]: value}})
    }

    function handleSubmit(event: React.SubmitEvent) {
        event.preventDefault()
        console.log(draft)
    }

    return (
        <>
            <h2>Contact</h2>
            <div className={Styles.container}>
                <p>Know a title you think would belong here, or just want to get in touch?<br/>Leave your suggestion below:</p>
                <p className={Styles.pretendNote}>This is a pretend form as proof of concept, no information will be shared and all information will be forgotten.</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Name</span>
                        <input type="text" value={draft.name} name="name" onChange={handleSetDraft}/>
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email" value={draft.email} name="email" onChange={handleSetDraft}/>
                    </label>
                    <label>
                        <span>Phone</span>
                        <input type="tel" value={draft.phone} name="phone" onChange={handleSetDraft}/>
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
            </div>
        </>
    )
}

export default ContactForm