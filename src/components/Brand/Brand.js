import { Button, Link } from "react-daisyui";

const Brand = (props) => {
    const { brandTitle } = props;

    return (
        <div className="flex-1">
            <Link href="/">
                <Button className="text-3xl normal-case" color="ghost">{ brandTitle }</Button>
            </Link>
        </div>
    )
}

export default Brand;