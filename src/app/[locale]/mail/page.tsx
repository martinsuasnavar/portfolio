import { useTranslations } from "next-intl";
import Form from "./form";

export default function MailForm() {
    const t = useTranslations("Mail");

    return(
        <div>
            <Form
                titleCard={t('form.titleCard')} 
                email={t('form.email')} 
                name={t('form.name')} 
                subject={t('form.subject')} 
                message={t('form.message')}
                send={t('form.send')}
            />
        </div>
    );
}