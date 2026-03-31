import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 text-gray-800">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

            <p className="mb-4">
                We respect your privacy and are committed to protecting your personal information.
            </p>

            <h2 className="text-xl font-semibold mt-4">Information We Collect</h2>
            <ul className="list-disc ml-6">
                <li>Name and email</li>
                <li>Uploaded files (PDF, notes)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">How We Use Data</h2>
            <ul className="list-disc ml-6">
                <li>Provide services</li>
                <li>Generate AI notes</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Contact</h2>
            <p>akramansari27923mah@gmail.com</p>
        </div>
    );
};

export default PrivacyPolicy;