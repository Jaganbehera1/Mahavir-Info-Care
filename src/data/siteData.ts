export const BUSINESS = {
  name: "MAHAVIR INFO CARE",
  tagline: "Technology • Service • Solutions",
  location: "Ranpur, Nayagarh, Odisha, India",
  phone: "7377797971",
  phoneDisplay: "73777 97971",
  whatsappMessage: "Hello MAHAVIR INFO CARE, I would like to know about your services.",
} as const;

export const PHONE_LINK = `tel:${BUSINESS.phone}`;
export const WHATSAPP_LINK = `https://wa.me/91${BUSINESS.phone}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Ranpur, Nayagarh, Odisha, India")}`;

export const IMAGES = {
  heroTech: "https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  heroRepair: "https://images.pexels.com/photos/12741843/pexels-photo-12741843.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  hardware: "https://images.pexels.com/photos/1432797/pexels-photo-1432797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  software: "https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  softwareDev: "https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  repair: "https://images.pexels.com/photos/9242904/pexels-photo-9242904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  refurbished: "https://images.pexels.com/photos/265144/pexels-photo-265144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  printer: "https://images.pexels.com/photos/193057/pexels-photo-193057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  education: "https://images.pexels.com/photos/5530484/pexels-photo-5530484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  itSupport: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  circuit: "https://images.pexels.com/photos/163170/board-printed-circuit-board-computer-electronics-163170.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  workspace: "https://images.pexels.com/photos/20313664/pexels-photo-20313664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Software Development", href: "#software" },
  { label: "Repair", href: "#repair" },
  { label: "Courses", href: "#courses" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  { icon: "Monitor", title: "Computer Sales & Service", desc: "New and refurbished computers, laptops, and accessories with complete setup and support." },
  { icon: "Laptop", title: "Refurbished Laptop Sales", desc: "Budget-friendly tested laptops suitable for students, offices, and home use." },
  { icon: "Wrench", title: "Computer & Laptop Repair", desc: "Expert repair for hardware faults, software issues, and general servicing." },
  { icon: "Code2", title: "Software Development", desc: "Custom business, school, and inventory management software built to your requirements." },
  { icon: "Globe", title: "Website Development", desc: "Professional, responsive, SEO-friendly websites for businesses, schools, and portfolios." },
  { icon: "ShieldCheck", title: "Software & Hardware Troubleshooting", desc: "Diagnosis and resolution of complex software errors and hardware problems." },
  { icon: "Printer", title: "Printer Parts & Service", desc: "Printer parts, computer components, cables, adapters, and accessories." },
  { icon: "Download", title: "Driver & Application Software", desc: "OS installation, driver setup, and application configuration for all devices." },
  { icon: "Headphones", title: "IT Support", desc: "Ongoing technical support and system configuration for homes and businesses." },
  { icon: "GraduationCap", title: "Educational Courses", desc: "10th, +2 courses, and university degree program information and guidance." },
] as const;

export const HARDWARE_ITEMS = [
  "Desktop Computers", "Laptops", "RAM", "SSD", "HDD", "Monitors",
  "Keyboards", "Mouse", "Power Supplies", "Cables", "Networking Accessories", "Computer Accessories",
] as const;

export const SOFTWARE_SERVICES = [
  "Business Management Software", "School Management Software", "Student Management Systems",
  "Attendance Systems", "Billing & Invoice Software", "Inventory Management Software",
  "Customer Management Systems", "Employee Management Systems", "Booking & Appointment Systems",
  "Data Management Systems", "Dashboard Development", "Admin Panel Development",
  "Custom Web Applications", "Database Applications", "Cloud-based Applications",
  "Automation Solutions", "API Integration", "Firebase Applications",
  "Supabase Applications", "Custom Digital Solutions",
] as const;

export const WEBSITE_SERVICES = [
  "Business Websites", "School Websites", "Portfolio Websites",
  "E-commerce Websites", "Landing Pages", "Responsive Websites",
  "Admin Dashboards", "SEO-friendly Websites", "Web Applications",
] as const;

export const REPAIR_ISSUES = [
  "Computer not starting", "Laptop problems", "Windows issues", "Slow computer",
  "SSD/HDD problems", "RAM issues", "Display problems", "Keyboard problems",
  "Charging issues", "OS installation", "Virus/malware troubleshooting", "Software errors",
  "Driver problems", "Hardware replacement", "General computer servicing",
] as const;

export const REASONS = [
  { icon: "Layers", title: "Complete IT Solutions", desc: "Hardware, software, and educational services all under one roof." },
  { icon: "Cpu", title: "Hardware & Software Support", desc: "From component-level repair to full-stack software development." },
  { icon: "MapPin", title: "Local & Accessible Service", desc: "Based in Ranpur, Nayagarh — serving the local community with trust." },
  { icon: "MonitorSmartphone", title: "Computer & Laptop Expertise", desc: "Experienced with all major desktop and laptop hardware platforms." },
  { icon: "Code2", title: "Custom Software Development", desc: "Tailored software and web solutions built for your specific needs." },
  { icon: "Users", title: "Solutions for Everyone", desc: "Serving students, businesses, schools, offices, and home users." },
] as const;

export const PROCESS_STEPS = [
  { num: "01", title: "Contact Us", desc: "Call or WhatsApp us with your technology needs." },
  { num: "02", title: "Explain Your Requirement", desc: "Tell us what you need — a product, repair, or software solution." },
  { num: "03", title: "Get the Right Solution", desc: "We assess and recommend the best approach for your situation." },
  { num: "04", title: "Service / Delivery", desc: "We deliver the product, complete the repair, or deploy the software." },
] as const;

export const FOOTER_SERVICES = [
  "Computer Sales & Service", "Laptop Repair", "Software Development",
  "Website Development", "Refurbished Laptops", "Printer Parts", "IT Support",
] as const;
