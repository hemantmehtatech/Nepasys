import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">TechTraining</h3>
            <p className="text-sm text-muted-foreground">
              Professional IT training center offering cutting-edge courses in 
              web development, AI/ML, DevOps, and more.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm text-muted-foreground hover:text-primary">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <address className="text-sm text-muted-foreground not-italic">
              <p>Email: info@techtraining.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Tech Street, Innovation City</p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} TechTraining. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
