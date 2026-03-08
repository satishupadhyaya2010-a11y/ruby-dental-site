import React from "react";
export default function RubyDentalWebsite(){
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <header className="bg-red-700 text-white p-6 shadow">
                <h1 className="text-3xl font-bold">Ruby Dental Private Limited</h1>
                <p className="text-sm mt-2">1085, (1st Floor) Bazar Pai Walan, near Gate No.3, opp. Fire Station, Jama Masjid, Delhi, 110006</p>
            </header>
            <section className="p-10 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Welcome to Ruby Dental</h2>
                    <p className="mb-4">We provide high‑quality dental products and services with a commitment to reliability and customer satisfaction.</p>
                    <p>Our mission is to supply trusted dental materials and solutions to clinics, professionals, and healthcare partners.</p>
                </div>
                <img className="rounded-2xl shadow" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5" alt="Dental tools" />
            </section>
            <section className="bg-white p-10">
                <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 border rounded-2xl shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">Dental Supplies</h3>
                        <p>Quality dental materials and equipment for professionals.</p>
                    </div>
                    <div className="p-6 border rounded-2xl shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">Wholesale Distribution</h3>
                        <p>Reliable distribution network for clinics and retailers.</p>
                    </div>
                    <div className="p-6 border rounded-2xl shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
                        <p>Dedicated support to help customers choose the right products.</p>
                    </div>
                </div>
            </section>
            <section className="p-10 bg-gray-100">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p><strong>Address:</strong> 1085, (1st Floor) Bazar Pai Walan, near Gate No.3, opp. Fire Station, Jama Masjid, Delhi, 110006</p>
                <p className="mt-2"><strong>Company:</strong> Ruby Dental Private Limited</p>
            </section>
            <footer className="bg-gray-900 text-gray-300 text-center p-4 text-sm"> © {new Date().getFullYear()} Ruby Dental Private Limited. All rights reserved. </footer>
        </div>
    )
}