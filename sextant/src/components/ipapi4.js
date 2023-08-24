import {useEffect} from "react";
import { useState } from "react";

const URL = "https://api4.ipify.org?format=json"


export default function IPAPI4() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                } else {
                    return response.json();
                }
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
                console.log(actualData);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {data && data["ip"]}
        </div>
    )
}