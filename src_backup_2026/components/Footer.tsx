const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-card text-muted-foreground border-t border-border mt-auto relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Anudeep Sri Bathina. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="https://github.com/anudeepsrib" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/anudeepsri" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="mailto:anudeepSrib@gmail.com" className="hover:text-primary transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;