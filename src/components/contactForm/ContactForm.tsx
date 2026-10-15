import { useState } from "react"
import Styles from "./ContactForm.module.scss"
import type { IDraft, IDraftError } from "../../models"

function ContactForm() {

    const [draft, setDraft] = useState<IDraft>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })

    const [draftError, setDraftError] = useState<IDraftError>({
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
                setDraftError(prev => {return {...prev, name: "Name may not be blank"}})
                return false
            } else {
                setDraftError(prev => {return {...prev, name: ""}})
            }

            if (draft.email.length === 0) {
                setDraftError(prev => {return {...prev, email: "Email may not be blank"}})
                return false
            } else {
                setDraftError(prev => {return {...prev, email: ""}})
            }

            if (!emailRegex.test(draft.email)) {
                setDraftError(prev => {return {...prev, email: "Email is invalid"}})
                return false
            } else {
                setDraftError(prev => {return {...prev, email: ""}})
            }

            if (draft.phone.length === 0) {
                setDraftError(prev => {return {...prev, phone: "Phone may not be blank"}})
                return false
            } else {
                setDraftError(prev => {return {...prev, phone: ""}})
            }

            if (draft.phone.includes("+")) {
                setDraftError(prev => {return {...prev, phone: "If you're trying to include your country code, please replace it with a 0"}})
                return false
            } else {
                setDraftError(prev => {return {...prev, phone: ""}})
            }

            if (isNaN(Number(draft.phone))) {
                setDraftError(prev => {return {...prev, phone: "Phone is invalid"}})
                return false
            } else {
                setDraftError(prev => {return {...prev, phone: ""}})
            }

            if (draft.phone.length !== 10) {
                setDraftError(prev => {return {...prev, phone: "Phone number must contain 10 digits"}})
                return false
            } else {
                setDraftError(prev => {return {...prev, phone: ""}})
            }

            if (draft.subject.length === 0) {
                setDraftError(prev => {return {...prev, subject: "Subject may not be blank"}})
                return false
            } else {
                setDraftError(prev => {return {...prev, subject: ""}})
            }

            if (draft.message.length === 0) {
                setDraftError(prev => {return {...prev, message: "Message may not be blank"}})
                return false
            } else {
                setDraftError(prev => {return {...prev, message: ""}})
            }

            return true
        }
        if (validate()) setDisplayConcern("confirmation")
    }

    return (
        <>
            <h2>Contact</h2>
            <div className={Styles.container}>
                <p className={Styles.subtitle}>Know a title you think would belong here, or just want to get in touch?<br/>Leave your suggestion below:</p>
                <p className={Styles.pretendNote}>This is a pretend form as proof of concept, no information will be shared and all information will be forgotten.</p>
                {displayConcern === "contact" ? (
                    <form onSubmit={handleSubmit} noValidate>
                        <label>
                            <div className={Styles.labelAndAlertWrapper}>
                                <span className={Styles.inputLabel}>Name</span>
                                <span className={Styles.inputAlert}>{draftError.name}</span>
                            </div>
                            <input type="text" value={draft.name} name="name" onChange={handleSetDraft}/>
                        </label>
                        <label>
                            <div className={Styles.labelAndAlertWrapper}>
                                <span className={Styles.inputLabel}>Email</span>
                                <span className={Styles.inputAlert}>{draftError.email}</span>
                            </div>
                            <input type="email" value={draft.email} name="email" onChange={handleSetDraft} placeholder="example@domain.com"/>
                        </label>
                        <label>
                            <div className={Styles.labelAndAlertWrapper}>
                                <span className={Styles.inputLabel}>Phone (10 characters)</span>
                                <span className={Styles.inputAlert}>{draftError.phone}</span>
                            </div>
                            <input type="tel" value={draft.phone} name="phone" onChange={handleSetDraft} onBlur={handleTrimPhone} placeholder="0123456789"/>
                        </label>
                        <label>
                            <div className={Styles.labelAndAlertWrapper}>
                                <span className={Styles.inputLabel}>Subject</span>
                                <span className={Styles.inputAlert}>{draftError.subject}</span>
                            </div>
                            <input type="text" value={draft.subject} name="subject" onChange={handleSetDraft}/>
                        </label>
                        <label>
                            <div className={Styles.labelAndAlertWrapper}>
                                <span className={Styles.inputLabel}>Message</span>
                                <span className={Styles.inputAlert}>{draftError.message}</span>
                            </div>
                            <textarea value={draft.message} name="message" rows={5} onChange={handleSetDraft}/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                ) : (
                    <div className={Styles.confirmationWrapper}>
                        <p className={Styles.thankYouMessage}>Thank you for your message!</p>
                        <p><span>Name:</span><span>{draft.name}</span></p>
                        <p><span>Email:</span><span>{draft.email}</span></p>
                        <p><span>Phone:</span><span>{draft.phone}</span></p>
                        <p><span>Subject:</span><span>{draft.subject}</span></p>
                        <p><span>Message:</span><span>{draft.message}</span></p>
                    </div>
                )}

            </div>
        </>
    )
}

export default ContactForm