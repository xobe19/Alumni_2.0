import { Fragment } from "react/cjs/react.production.min";
import AlumniMobile from "./alumni_mobile";
import AlumniPC from "./alumni_pc";
export default function Reunion() {
    return (
        <Fragment>
    <div className="hidden lg:block">
<AlumniPC />
    </div>
    <div className="block lg:hidden">
<AlumniMobile />
    </div>
    </Fragment>
    )
}