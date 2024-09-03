import { useRouteError } from "react-router-dom";
import { AlertCircle } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="flex h-screen items-center justify-center ">
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Oops!</AlertTitle>
                <AlertDescription>
                {error.statusText || error.message}
                </AlertDescription>
            </Alert>
        </div>
    );
}

