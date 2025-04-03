import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-green-800 mb-4">404</h1>
        <p className="text-xl text-green-600 mb-8">Page not found</p>
        <Link href="/">
          <Button className="bg-green-600 hover:bg-green-700">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}