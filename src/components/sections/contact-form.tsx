"use client";

import React from "react";
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Mail, 
  Send 
} from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const message = form.get("message");

    const subject = encodeURIComponent("Nouvelle demande serrurerie");
    const body = encodeURIComponent(
      `Nom: ${name}\nTéléphone: ${phone}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:shoptaserrure@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-3xl shadow-heavy overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          {/* Left Sidebar - Contact Details */}
          <div className="lg:w-1/3 bg-brand-blue p-10 text-white">
            <h2 className="text-3xl font-extrabold mb-6 text-white">Contactez-nous</h2>
            
            <div className="space-y-6">
              {/* Address / Zone */}
              <div className="flex items-start gap-4 p-4">
                <div className="bg-white/10 p-3 rounded-xl flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-medium">Zone d'intervention</p>
                  <p className="text-lg font-bold">Paris & Île-de-France</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4">
                <div className="bg-white/10 p-3 rounded-xl flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-medium">E-mail</p>
                  <p className="text-lg font-bold">shoptaserrure@gmail.com</p>
                </div>
              </div>

              {/* Availability Status */}
              <div className="pt-4 flex items-center gap-2">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </div>
                <span className="text-sm font-bold text-accent">Serrurier disponible</span>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="lg:w-2/3 p-10 bg-white">
            <h3 className="text-2xl font-extrabold text-brand-blue mb-8">Formulaire de contact</h3>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-brand-blue text-sm font-bold">
                  Nom complet
                </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    className="w-full h-12 px-4 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-standard text-text-gray font-medium"
                    required
                  />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-brand-blue text-sm font-bold">
                  Téléphone
                </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Votre numéro"
                    className="w-full h-12 px-4 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-standard text-text-gray font-medium"
                    required
                  />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="message" className="text-brand-blue text-sm font-bold">
                  Message / Description
                </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Précisez votre besoin..."
                    className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-standard text-text-gray font-medium resize-none"
                    required
                  ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-brand-green hover:bg-brand-green/90 text-white font-extrabold text-[18px] py-4 px-10 rounded-xl transition-standard shadow-lg shadow-brand-green/20 flex items-center justify-center gap-2 group"
                >
                  Envoyer ma demande
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
