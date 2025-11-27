// import React, { useState } from "react";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { useToast } from "@/hooks/use-toast";

// // Replace with your deployed web app exec URL
// const APPS_SCRIPT_URL =
//   "https://script.google.com/macros/s/AKfycbxkYsmQyakSI1490YHMnypk9ZiYUp9HT_VS8chSm91G80Eg0OL_mNxG8f4JsxdZd1-mgA/exec";

// type FormState = {
//   name: string;
//   email: string;
//   phone: string;
//   company: string;
//   inquiry: string;
//   message: string;
// };

// const initialState: FormState = {
//   name: "",
//   email: "",
//   phone: "",
//   company: "",
//   inquiry: "",
//   message: "",
// };

// const Contact: React.FC = () => {
//   const { toast } = useToast();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState<FormState>(initialState);

//   // Local validation helper
//   const validate = () => {
//     if (!formData.name.trim()) return "Please enter your name.";
//     if (!formData.email.trim()) return "Please enter your email.";
//     // very basic email check
//     if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) return "Enter a valid email address.";
//     if (!formData.inquiry) return "Please select an inquiry type.";
//     if (!formData.message.trim()) return "Please enter a message.";
//     return null;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (loading) return;

//     const err = validate();
//     if (err) {
//       toast({ title: "Validation", description: err, variant: "destructive" });
//       return;
//     }

//     setLoading(true);

//     try {
//       // Use FormData to avoid triggering CORS preflight
//       const fd = new FormData();
//       fd.append("name", formData.name);
//       fd.append("email", formData.email);
//       fd.append("phone", formData.phone);
//       fd.append("company", formData.company);
//       fd.append("inquiry", formData.inquiry);
//       fd.append("message", formData.message);

//       const res = await fetch(APPS_SCRIPT_URL, {
//         method: "POST",
//         body: fd,
//         // IMPORTANT: do NOT set Content-Type header when sending FormData
//       });

//       // handle plain-text or json responses
//       const text = await res.text();
//       let data: any = {};
//       try {
//         data = text ? JSON.parse(text) : {};
//       } catch {
//         data = { status: res.ok ? "success" : "error", message: text };
//       }

//       // Robust success detection: prefer server-provided status, fall back to checking response text
//       let isSuccess = false;
//       if (res.ok) {
//         // If server returned an explicit status, require it to be 'success'. If no status field, treat as success.
//         if (!data.status || data.status === "success") {
//           isSuccess = true;
//         } else {
//           isSuccess = false;
//         }
//       } else {
//         // Non-OK HTTP code — but sometimes Apps Script returns a non-JSON message while still performing the action.
//         // Check textual hints for success as a best-effort fallback.
//         if (/success/i.test(text) || /recorded|submitted|received/i.test(text)) {
//           isSuccess = true;
//         }
//       }

//       if (isSuccess) {
//         toast({
//           title: "Message Sent!",
//           description: "Thank you for contacting us. We'll get back to you within 24 hours.",
//         });
//         setFormData(initialState);
//       } else {
//         // Provide more diagnostic information in the error toast so you can see what's coming back
//         const serverMsg = data?.message || text || `HTTP ${res.status}`;
//         throw new Error(serverMsg);
//       }
//     } catch (err: any) {
//       console.error("Submit error:", err);
//       toast({
//         title: "Submission failed",
//         description: err?.message || "Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main className="pt-20">
//         {/* Hero Section */}
//         <section className="py-24 bg-hero-gradient">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="max-w-4xl mx-auto text-center">
//               <h1 className="text-5xl sm:text-6xl font-bold text-primary-foreground mb-6">
//                 Contact Us
//               </h1>
//               <p className="text-xl text-primary-foreground/90 leading-relaxed">
//                 Let's discuss how we can help you achieve your staffing goals
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Contact Info & Form Section */}
//         <section className="py-24">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//               {/* Contact Information */}
//               <div className="lg:col-span-1 space-y-8">
//                 <div>
//                   <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
//                   <p className="text-muted-foreground">
//                     Have questions about our services? Need to submit a job order? We're here to help.
//                   </p>
//                 </div>

//                 <Card className="border-border bg-card">
//                   <CardContent className="p-6 space-y-6">
//                     <div className="flex items-start gap-4">
//                       <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                         <Phone className="h-6 w-6 text-primary" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-card-foreground mb-1">Phone</h3>
//                         <p className="text-muted-foreground">
//                           <a href="tel:+13022162057" className="hover:text-accent transition-colors">
//                             +1 (302) 216-2057
//                           </a>
//                         </p>
//                         <p className="text-muted-foreground">
//                           <a href="tel:+13022147592" className="hover:text-accent transition-colors">
//                             +1 (302) 214-7592
//                           </a>
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-4">
//                       <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                         <Mail className="h-6 w-6 text-primary" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
//                         <p className="text-muted-foreground">
//                           <a href="mailto:contact@jetronics.com" className="hover:text-accent transition-colors">
//                             contact@jetronics.com
//                           </a>
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-4">
//                       <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                         <MapPin className="h-6 w-6 text-primary" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-card-foreground mb-1">Address</h3>
//                         <p className="text-muted-foreground">
//                           1st F, 33/C/S-3,<br />Scheme 78-III, Sec F, Slice 3,<br />Indore – 452010
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Contact Form */}
//               <div className="lg:col-span-2">
//                 <Card className="border-border bg-card">
//                   <CardContent className="p-8">
//                     <h2 className="text-2xl font-bold text-card-foreground mb-6">Send us a Message</h2>
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="space-y-2">
//                           <Label htmlFor="name">Full Name *</Label>
//                           <Input
//                             id="name"
//                             placeholder="John Doe"
//                             value={formData.name}
//                             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                             required
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="email">Email Address *</Label>
//                           <Input
//                             id="email"
//                             type="email"
//                             placeholder="john@company.com"
//                             value={formData.email}
//                             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="space-y-2">
//                           <Label htmlFor="phone">Phone Number</Label>
//                           <Input
//                             id="phone"
//                             type="tel"
//                             placeholder="+1 (302) 216-2057"
//                             value={formData.phone}
//                             onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="company">Company Name</Label>
//                           <Input
//                             id="company"
//                             placeholder="Your Company"
//                             value={formData.company}
//                             onChange={(e) => setFormData({ ...formData, company: e.target.value })}
//                           />
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="inquiry">Inquiry Type *</Label>
//                         <Select
//                           value={formData.inquiry}
//                           onValueChange={(value) => setFormData({ ...formData, inquiry: value })}
//                         >
//                           <SelectTrigger aria-label="Inquiry type">
//                             <SelectValue placeholder="Select inquiry type" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="general">General Query</SelectItem>
//                             <SelectItem value="talent">Request Talent</SelectItem>
//                             <SelectItem value="consulting">IT Consulting</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="message">Message *</Label>
//                         <Textarea
//                           id="message"
//                           placeholder="Tell us about your needs..."
//                           rows={6}
//                           value={formData.message}
//                           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                           required
//                         />
//                       </div>

//                       <Button
//                         type="submit"
//                         size="lg"
//                         className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
//                         disabled={loading}
//                       >
//                         {loading ? "Sending..." : "Send Message"}
//                       </Button>
//                     </form>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;


import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiry: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl font-bold text-primary-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Let's discuss how we can help you achieve your staffing goals
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Have questions about our services? Need to submit a job order? We're here to help.
                  </p>
                </div>

                <Card className="border-border bg-card">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground">+1 (302) 214-7592</p>
                        <p className="text-muted-foreground">+1 (302) 216-2057</p>
                        {/* <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm EST</p> */}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">contact@jetronics.com</p>
                         
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          1st F, 33/C/S-3, <br /> Scheme 78-III, Sec F, Slice 3, <br /> Indore – 452010
                        </p>
                      </div>
                    </div>

                    {/* <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div> */}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-border bg-card">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-card-foreground mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiry">Inquiry Type *</Label>
                        <Select value={formData.inquiry} onValueChange={(value) => setFormData({...formData, inquiry: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Query</SelectItem>
                            <SelectItem value="talent">Request Talent</SelectItem>
                            {/* <SelectItem value="job">Submit Job Order</SelectItem> */}
                            <SelectItem value="consulting">IT Consulting</SelectItem>
                            {/* <SelectItem value="partnership">Partnership Inquiry</SelectItem> */}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your needs..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

