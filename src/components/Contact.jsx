
import { Mail, User, MapPin, Globe } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-6">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Contact Me
                </h1>

                <div className="space-y-4">

                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                        <User className="text-blue-500" />
                        <div>
                            <p className="text-sm text-gray-500">Name</p>
                            <p className="font-medium">Akram Ansari</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                        <Mail className="text-blue-500" />
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium break-all">
                                akramansari27923mah@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                        <MapPin className="text-blue-500" />
                        <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-medium">
                                Ghazipur, Uttar Pradesh, India
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                        <Globe className="text-blue-500" />
                        <div>
                            <p className="text-sm text-gray-500">Portfolio</p>
                            <a
                                href="https://akram-portfolio-c4hv.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-medium hover:underline"
                            >
                                Visit Website
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Contact;