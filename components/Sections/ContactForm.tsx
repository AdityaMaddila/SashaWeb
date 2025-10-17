import { motion } from "framer-motion"
import { Users, Headphones } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

// ======================= ContactForm =======================
export default function ContactForm() {
  return (


<section id="contact" className="py-20 relative ">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to Transform Your Operations?
                </h2>
                <p className="text-xl text-gray-400">
                  Get in touch with our team to schedule a demo and see how
                  Sasha innoworks future‑proof your operations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#FB930B]/20 backdrop-blur-sm border border-[#FB930B]/30 flex items-center justify-center">
                      <Users className="h-5 w-5 text-[#FB930Bff]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Sales Team</h3>
                      <p className="text-sm text-gray-400">
                        sales@sasha.tech
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#FB930B]/20 backdrop-blur-sm border border-[#FB930B]/30 flex items-center justify-center">
                      <Headphones className="h-5 w-5 text-[#FB930Bff]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Support</h3>
                      <p className="text-sm text-gray-400">
                        support@sasha.tech
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className=" border-[#FB930B]/30">
                <CardHeader>
                  <CardTitle className="text-white">Contact Us</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium text-gray-300"
                        >
                          First Name
                        </label>
                        <Input id="first-name" placeholder="" className="bg-gray-800 border-gray-700 text-white" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium text-gray-300"
                        >
                          Last Name
                        </label>
                        <Input id="last-name" placeholder="" className="bg-gray-800 border-gray-700 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="robert@example.com"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-300">
                        Company
                      </label>
                      <Input id="company" placeholder="Your company" className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project and requirements..."
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#FB930Bff] to-orange-600 hover:from-orange-600 hover:to-[#FB930Bff] text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    );
}