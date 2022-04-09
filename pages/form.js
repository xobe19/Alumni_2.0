import { Fragment } from "react/cjs/react.production.min";
import FormHtml from "../data/form_html"
export default function AlumForm() {
    return (
        <Fragment>
<div dangerouslySetInnerHTML={{__html : FormHtml}}></div>



        </Fragment>
    );
}