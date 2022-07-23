import Button1 from "../../../components/Button1/Button1"
import Button2 from "../../../components/Button2/Button2"

type CallToActionButtonContent ={
    backdropBlur: boolean

}

export default function CallToActionButton({backdropBlur}: CallToActionButtonContent) {
    return (
        <>
            <Button1 text="Get in touch" link='mailto:ansgar@protocol.ai' />
            <Button2 target="_blank" text="Jobs" link='https://pl-strflt.notion.site/Available-Roles-2eeb7b1ec87e4fdc959d7177acf71771' backdropBlur={backdropBlur} />
        </>
    )
}