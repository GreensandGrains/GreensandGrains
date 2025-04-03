
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface PrivacyPolicyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyPolicyDialog({ open, onOpenChange }: PrivacyPolicyDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">Privacy Policy</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm">
          <h2>Information Collection and Use</h2>
          <p>We collect information to provide better services to our customers. The types of information we collect include:</p>
          <ul>
            <li>Contact information (name, email address, phone number)</li>
            <li>Order history and preferences</li>
            <li>Device information when you use our website</li>
          </ul>

          <h2>Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h2>Cookies</h2>
          <p>We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings.</p>

          <h2>Third-Party Services</h2>
          <p>We may use third-party services that collect, monitor, and analyze data to improve our service.</p>

          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us through the provided contact information on our website.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
