import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import MainLayout from "@/layouts/MainLayout";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [error, setError] = useState<string | null>(null);

  // Fetch contact messages
  const { data: messages, isLoading, isError } = useQuery<ContactMessage[]>({
    queryKey: ['/api/contact/messages'],
    retry: 1,
  });

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString();
    } catch (e) {
      return dateString;
    }
  };

  // Handle CSV export
  const handleExportCSV = () => {
    window.location.href = '/api/contact/export';
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg mb-8 border border-green-200 shadow-sm">
          <h1 className="text-3xl font-bold mb-2 text-green-800">Contact Form Submissions</h1>
          <p className="text-green-700">View and export all contact form submissions from your customers.</p>
        </div>
        
        {isError && (
          <Alert className="mb-4 bg-red-100 text-red-800 border-red-300">
            <AlertDescription>
              Failed to load contact submissions. Please try again later.
            </AlertDescription>
          </Alert>
        )}
        
        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="text-gray-600">
            <span className="font-medium text-green-700">
              {messages ? messages.length : 0}
            </span> submissions found
          </div>
          <Button 
            onClick={handleExportCSV} 
            className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export as CSV
          </Button>
        </div>
        
        {isLoading ? (
          <div className="flex flex-col justify-center items-center py-12 bg-white rounded-lg shadow">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
            <p className="text-green-700">Loading submissions...</p>
          </div>
        ) : messages && messages.length > 0 ? (
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <Table>
              <TableCaption className="mt-4 mb-2 text-green-700">
                A list of all contact form submissions from Greens and Grains customers.
              </TableCaption>
              <TableHeader className="bg-green-50">
                <TableRow>
                  <TableHead className="text-green-800">ID</TableHead>
                  <TableHead className="text-green-800">Name</TableHead>
                  <TableHead className="text-green-800">Email</TableHead>
                  <TableHead className="text-green-800">Phone</TableHead>
                  <TableHead className="text-green-800">Subject</TableHead>
                  <TableHead className="text-green-800">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messages.map((message) => (
                  <TableRow key={message.id} className="hover:bg-green-50 transition-colors">
                    <TableCell>{message.id}</TableCell>
                    <TableCell className="font-medium">{message.name}</TableCell>
                    <TableCell>{message.email}</TableCell>
                    <TableCell>{message.phone || "Not provided"}</TableCell>
                    <TableCell>{message.subject}</TableCell>
                    <TableCell>{formatDate(message.createdAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow border border-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-green-300 mb-4">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            <p className="text-gray-500 mb-2">No contact submissions found yet.</p>
            <p className="text-green-600 text-sm">Submissions will appear here when customers fill out the contact form.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}