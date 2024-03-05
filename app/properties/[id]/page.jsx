'use client';
import { useParams, useRouter, useSearchParams } from "next/navigation";
const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const {id} = useParams();
    return (
        <div>
            { id }
            <button onClick={() => router.push("/properties")}>Back to Properties</button>
        </div>
    )
}

export default page